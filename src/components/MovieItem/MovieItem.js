import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieItem extends Component {
  handleImageClick = (movieId) => (event) => {
    this.props.dispatch({
      type: 'UPDATE_MOVIE_CLICKED',
      payload: this.props.item,
    });
    // const movieClicked = this.props.store.movies.find(function (movieClicked) {
    //   return movieClicked.id === movieId;
    // });
    // console.log(movieClicked);
    console.log(this.props);
    this.props.history.push(`/details/${movieId}`);
  };

  render() {
    return (
      <div
        onClick={this.handleImageClick(this.props.item.id)}
        key={this.props.item.id}
      >
        <img alt={this.props.item.title} src={this.props.item.poster} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(MovieItem));
