import React from 'react'
import { connect } from "react-redux"


 class PureLinklist extends React.Component{


    render(){
        console.log(this.props.links);
        const renderLinkList = this.props.links.map((link, i) => {
            return (
                <>
                <div className="d-flex justify-content-center" key={i}>
                    <a href={link.url}>{link.name}</a>
                    {link.tags.map((tag,j)=><span key={j}>{tag.name}</span>)}
                </div>
                </>
            )
        })
        return <div>{renderLinkList}</div>
    }

    
}

    const mapStateToProps = (state) =>{
        console.log(state);
            return {
                links: state.linkStore.links
            }
    
    }

    // const mapDispatchToProps = (dispatch) =>{
    //         return {
    //           addLinkMDP: (link)=> dispatch(AddLink),
    //           delLinkMDP: (index)=> dispatch(DelLink)
    //         }
    
    // }

export const LinkList = connect(mapStateToProps, null)(PureLinklist)
