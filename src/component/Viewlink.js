import React from 'react'
import {LinkList} from './Linklist'
import Search from './Search'

export default class Viewlink extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    const parsedLinks = JSON.parse(localStorage.getItem('links'))
    console.log(parsedLinks);

    this.state = {
      links: parsedLinks,
      search: ""
    }
  }
  onSearch = (search) => {
    this.setState({
      search: search,
    })

  }

  render() {

    const searchWord = this.state.search.toLowerCase();
    console.log("searchWord", searchWord);
    const filteredLinks = this.state.links.filter((link) => {

      return (
        link.name.toLocaleLowerCase().includes(searchWord) ||
        link.url.toLocaleLowerCase().includes(searchWord) ||
        link.tags.map((tag) => {
          return tag.name.toLowerCase().includes(searchWord)
        }).indexOf(true) > -1
      )
    })
    console.log("filteredLinks", filteredLinks);
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <LinkList /> 
        {/* // links={filteredLinks}  */}      
      </div>
    )
  }
}