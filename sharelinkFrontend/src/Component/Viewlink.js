import React from 'react'
import {LinkList} from './Linklist'
import Search from './Search'
import { connect } from "react-redux"
import { ListLink} from "../Redux/actions"



class PureViewlink extends React.Component {
  
  componentDidMount() {
    this.props.listLinkMDP("")
  }

  onSearch = (search) => {
    this.props.listLinkMDP(search)
  }

  render() {
      console.log(this.props.links);
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <LinkList links={this.props.links}/>   
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state);
      return {
          links: state.linkStore.links  
      }

}

const mapDispatchToProps = (dispatch) =>{
    return {
      listLinkMDP: (search)=> dispatch(ListLink(search))
    }
}
export const Viewlink = connect(mapStateToProps, mapDispatchToProps,)(PureViewlink)
