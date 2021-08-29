import React from "react";

import {Addlink} from './Component/Addlink'
import {Viewlink} from "./Component/Viewlink";

import { BrowserRouter } from 'react-router-dom'
import { Link, Route } from "react-router-dom";



export default class App extends React.Component {
  

  // addLinkHandler = (link) => {

  //   const linkList = this.state.links.concat(link)
  //   console.log(linkList);
  //   this.setState({
  //     links: linkList,
  //   });
  // }

  render() {
    return (
 <>
        <BrowserRouter>
          <nav>
            <div >
              <ul className="row justify-content-around">
                <li>
                  Shandy's ShareLink
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
              <Viewlink />
            </Route>
          </div>
        </BrowserRouter>
      </>
    )

  }

}