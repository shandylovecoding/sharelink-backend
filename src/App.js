import React from "react";

import {Addlink} from './component/Addlink'
import Viewlink from "./component/Viewlink";

import { BrowserRouter } from 'react-router-dom'
import { Link, Route } from "react-router-dom";



export default class App extends React.Component {
  

  addLinkHandler = (link) => {

    const linkList = this.state.links.concat(link)
    console.log(linkList);
    this.setState({
      links: linkList,
    });
    console.log("this.state.links", this.state.links);
    localStorage.setItem("links", JSON.stringify(linkList))
  }

  render() {
    return (
 <>
        <BrowserRouter>
          <nav>
            <div >
              <ul className="row justify-content-around">
                <li>
                  <Link to="/Linklist">Shandy's ShareLink</Link>
                </li>
                <li>
                  <Link to="/ViewLink">View Link</Link>
                </li>
                <li>
                  <Link to="/Addlink">Add Link</Link>
                </li>
              </ul>
            </div>
          </nav>

          <div>
            <Route path="/Addlink">
              <Addlink  />
            </Route>
            <Route path="/Viewlink" >
              <Viewlink   />
            </Route>
          </div>
        </BrowserRouter>
      </>
    )

  }

}