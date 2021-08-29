import React from 'react'


export default class Search extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            search: "",
        };
        this.handleSearch = this.handleSearch.bind(this);

    }
    
    handleSearch(e) {
        console.log("this.props in search",this.props);
        this.props.onSearch(e.currentTarget.value)

        this.setState({
            search: e.currentTarget.value
        })

    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <input type="text"
                    value={this.state.search}
                    onChange={ (e)=>this.handleSearch(e)}
                    placeholder="Search Link.."
                />
            </div>
        )
    }
}


