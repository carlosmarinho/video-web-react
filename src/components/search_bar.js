import React, { Component } from 'react'; //ES6 syntax

class SearchBar extends Component {
    constructor(props){
        super();
    
        this.state = {term: ''}
    }
    
    render(){
        return (    
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})} />    
            </div>
        )
    }
}

export default SearchBar;