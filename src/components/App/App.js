import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import { connect } from 'react-redux';
import MovieDetails from '../MovieDetails/MovieDetails';

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
          <h2>Movie Saga App</h2>
          <Route exact path="/" component={MovieList} />
        </div>
        <Route path="/details/:id" component={MovieDetails} />
      </Router>
    );
  }
}

export default connect()(App);
