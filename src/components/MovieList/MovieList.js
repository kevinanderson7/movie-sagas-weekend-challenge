import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {
  render() {
    const moviesListArray = this.props.store.movies.map((item, index) => {
      return <MovieItem key={item.id} item={item} />;
    });

    return <div>{moviesListArray}</div>;
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(MovieList);
