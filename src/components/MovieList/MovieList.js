import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  render() {
    const moviesListArray = this.props.store.movies.map((item, index) => {
      return (
        <div>
          <img src={item.poster} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      );
    });

    return <div>{moviesListArray}</div>;
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(MovieList);
