import React, { Component } from 'react';
//const emojiList = require("./emojiList.json");


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterCriteria: '' }
        this.changeFilterCriteria = this.changeFilterCriteria.bind(this);
    }
    changeFilterCriteria(e) {
        this.setState({ filterCriteria: e.target.value });
        this.props.onChange(e.target.value)
    }
    render() {
        return <div>
            <input type="text" onChange={this.changeFilterCriteria} class="form-control searchBox"/>
            
            </div>;
        }
    }
    
export default Search;