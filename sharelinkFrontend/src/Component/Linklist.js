import React from 'react'
import { connect } from "react-redux"
import { DelLink } from "../Redux/actions"

class PureLinklist extends React.Component {


    render() {

        console.log(this.props.links);

        return (

            this.props.links.map((link, i) => {

                return (
                    <div key={i} id={i} className="d-flex justify-content-center" >
                        <a href={link.url}>{link.name}</a>
                        {/* {link.tags.map((tag, y) => <span key={y}>{tag.name}</span>)} */}
                        <button key={i} onClick={() => this.props.delLinkMDP(i)}>x</button>
                    </div>
                )
            })

        )
    }


}



const mapDispatchToProps = (dispatch) => {
    return {
        delLinkMDP: (index) => dispatch(DelLink(index))
    }

}

export const LinkList = connect(null, mapDispatchToProps)(PureLinklist)
