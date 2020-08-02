import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import { connect } from 'react-redux';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditPage from '../EditPage/EditPage';
import Typography from '@material-ui/core/Typography';
import AppBar from '../AppBar/AppBar';

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
        <div>
          <AppBar />
          <div className="App">
            {/* <Typography gutterBottom variant="h4" component="h1">
              Movie Saga App
            </Typography> */}
            <Route exact path="/" component={MovieList} />
          </div>
        </div>
        <Route exact path="/details/:id" component={MovieDetails} />
        <Route exact path="/details/:id/edit" component={EditPage} />
      </Router>
    );
  }
}

export default connect()(App);
