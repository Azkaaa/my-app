import React, { Component } from 'react';
const emojiList = require("./emojiList.json");

class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.searchList = emojiList;
        this.bindList = this.bindList.bind(this);
    }
    bindList() {
        //
        if (this.props.filterCriteria == '')
            return this.searchList.map(emoji => {
                return <div key={emoji.title} className="SearchRow">{emoji.symbol}{emoji.title}</div>
            });
        else {
            var filtered = this.searchList.filter
                (emoji => emoji.keywords.includes(this.props.filterCriteria.toLowerCase()));

            return filtered.map(emoji => {
                return <div key={emoji.title} className="SearchRow">{emoji.symbol}{emoji.title}</div>
            });
        }

    }
    render() {
        return this.bindList();
    }
}
export default SearchList;