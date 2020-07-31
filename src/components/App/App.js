import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <h2>This is the App</h2>
          <MovieList />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
