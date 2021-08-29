
class LinkService {
  constructor(knex) {
    this.knex = knex
  }

  list(search) {
    console.log("this is Link service");
    let query = this.knex
      .select("links.id", "links.name", "links.url",
        "tags.name as tag_name"
       )
      .from("links")
      .innerJoin("links_tags", "links.id", "links_id")
      .innerJoin("tags", "tags.id", "tags_id")
      .where("links.name", "like", `%${search}%`)
      .orWhere("tags.name", "like", `%${search}%`)

    return query.then((rows) => {
      console.log("rows", rows);
      return rows.map((row) => ({
        id: row.id,
        name: row.name,
        url: row.url,
        tags: row.tag_name
      }
      ));
    });
  }

  async add(link) {

    let query = await this.knex.insert({
      name: link.name,
      url: link.url,
    })
      .into("links")
      .returning("id")

    link.tags.map(async (tag) => {
      let query1 = await this.knex
        .select("*")
        .from("tags")
        .where("name", "=", tag.name)
        .then(async (data) => {
          console.log("data, tag.name", data, tag.name);
          return data
        })

      if (query1[0] === undefined) {
        await this.knex
          .insert({
            name: tag.name,
          })
          .into("tags")
          .returning("id")
          .then(async (data) => {
            console.log("data", data);
            await this.knex.
              insert({
                links_id: query[0],
                tags_id: data[0]
              })
              .into("links_tags")
              .returning("id")
          })
      } else {
        await this.knex.insert({
          links_id: query[0],
          tags_id: query1[0].id
        })
          .into("links_tags")
          .returning("id")
      }
    })


  }

  // remove(id,user){
  // let query=this.knex
  // .select("id")
  // .from("users")
  // .where("users.username",user);
  // return query.then((rows)=>{
  //   if(rows.length===1){
  //     return this.knex("links")
  //     .where("id",id).del();
  //   }else{
  //     thrownewError(`Cannot remove a link when the user doesn't exist!`);
  //   }
  // });
  // }
}
module.exports = LinkService;