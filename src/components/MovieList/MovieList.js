import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  render() {
    return <div>{this.props.store.movies.title}</div>;
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(MovieList);
