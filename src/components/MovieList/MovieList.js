import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import Grid from '@material-ui/core/Grid';
import './MovieList.css';

class MovieList extends Component {
  render() {
    const moviesListArray = this.props.store.movies.map((item, index) => {
      return (
        <div key={item.id} className="movie-container2">
          <Grid container>
            <Grid key={item.id} xs={12} item>
              <MovieItem key={item.id} item={item} />{' '}
            </Grid>
          </Grid>
        </div>
      );
    });

    return <Grid container>{moviesListArray}</Grid>;
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(MovieList);
