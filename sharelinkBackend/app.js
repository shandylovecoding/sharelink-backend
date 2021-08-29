const express = require("express")
// const bodyParser=require("body-parser");
const cors = require("cors")
const morgan = require('morgan')

require("dotenv").config();

const knexConfig=require("./knexfile").development;
const knex=require("knex")(knexConfig);

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(cors())
app.use(morgan("combined"))

var LinkRouter = require('./routers/linkRouter')
var LinkService = require('./services/linkService')

const linkService = new LinkService(knex)
app.use("/link", new LinkRouter(linkService).router())

app.listen(8000, () => {
    console.log("Application listening to port ");
  });    