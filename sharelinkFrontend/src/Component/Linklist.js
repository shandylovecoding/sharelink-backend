import React from 'react'
import { connect } from "react-redux"
import { DelLink } from "../Redux/actions"
import { Col } from 'reactstrap';

class PureLinklist extends React.Component {


    render() {

        console.log(this.props.links);

        return (

            this.props.links.map((link, i) => {

                return (
                  
                    <div key={link.id} id={link.id} className="d-flex justify-content-center" >
                        <Col><a a href={link.url}>{link.name}</a></Col>
                        {link.tags.map((tag, y) => <Col key={y}>{tag.name}</Col>)}
                        <Col><button key={link.id} onClick={() => this.props.delLinkMDP(link.id)}>x</button></Col>
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
