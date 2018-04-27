import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import SearchList from './SearchList';

const imgURL = 'https://cdn.jsdelivr.net/emojione/assets/png/1f638.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { filterQuery: '' }
  }
  onFilterChange(str) {
    this.setState({ filterQuery: str });
    console.log("daddy", str)
  }
  render() {
    return (
      <div className="App1">
        <header className="App-header">
          <Grid>
            <Row className="show-grid">
              <Col md={12} sm={6}>
                <h1 className="App-title"><img src={imgURL} className="App-logo" alt="logo" />
                  Emoji Search<img src={imgURL} className="App-logo" alt="logo" /></h1>
              </Col>
            </Row>
          </Grid>
        </header>
        <div className="App-search">
          <Grid>
            <Row className="search-grid">
              <Col md={12} sm={6}>
                <Search onChange={this.onFilterChange.bind(this)} />
                <SearchList filterCriteria={this.state.filterQuery} />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
