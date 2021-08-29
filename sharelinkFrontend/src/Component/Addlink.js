
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, } from 'reactstrap';

import { connect } from "react-redux"
import { AddLink, DelLink} from "../Redux/actions"

class PureAddlink extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            modal: false,
            name: "",
            url: "",
            tags:[],
        };
        this.toggle = this.toggle.bind(this);
        this.addTag=this.addTag.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    addTag(e){
        e.preventDefault();
        this.setState({
            tags:this.state.tags.concat([{name:""}])
        })
    }

    onTagChange(i, e){
        const tags = this.state.tags.slice();
        tags[i]={
            name: e.currentTarget.value
        }
        this.setState({
            tags:tags
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       
        this.setState({
            modal: false,
            name: "",
            url: "",
            tags:[],         
        });
        console.log("this.state",this.state);
        this.props.addLinkMDP(this.state)
    };

   
    render() {
        console.log("this.props",this.props);
        return (
            <div className="d-flex justify-content-center">
                <Button  color="danger" onClick={this.toggle}>Add link</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Add Link Form</ModalHeader>
                    <ModalBody>
                        <Form>
                            <form >
                                <FormGroup>
                                    <label for="name">Name</label>
                                    <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} placeholder="linkname" />
                                </FormGroup>
                                <FormGroup>
                                    <label for="name">URL</label>
                                    <input value={this.state.url} onChange={(e) => this.setState({ url: e.target.value })} placeholder="linkurl" />
                                </FormGroup>
                                <FormGroup>
                                <button onClick={this.addTag}>Add Tag</button> 
                                <label>Tags:</label>
                                <br />
                                {this.state.tags.map((tag, i)=>{
                                    return (        
                                    <input key={i} type="text" onChange={this.onTagChange.bind(this,i)} value={tag.name}/ >    
                                    )
                                })}
                                </FormGroup>
                            </form>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.handleSubmit} >Submit</Button>
                        <Button color="primary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      addLinkMDP: (link)=> dispatch(AddLink(link)),
      delLinkMDP: (index)=> dispatch(DelLink(index))
    }

}

export const Addlink = connect(null,mapDispatchToProps)(PureAddlink)