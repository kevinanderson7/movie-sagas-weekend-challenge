import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './MovieDetails.css';

class MovieDetails extends Component {
  //   componentDidMount() {
  //     this.props.dispatch({
  //       type: 'GET_MOVIES',
  //     });
  //   }
  handleEditClick = () => {
    this.props.history.push(
      `/details/${this.props.store.movieClickedReducer.id}/edit`
    );
  };

  render() {
    console.log(this.props.match.params.id);
    console.log(this.props.store.movieClickedReducer);
    const genresListArray = this.props.store.movieClickedReducer.genre.map(
      (item, index) => {
        return <li key={index}>{item}</li>;
      }
    );

    return (
      <div>
        <div className="back-button">
          <Link to={'/'}>Back to List</Link>
        </div>
        <div className="edit-button">
          <button onClick={this.handleEditClick}>Edit</button>
        </div>
        <div className="movie-container">
          <h2>{this.props.store.movieClickedReducer.title}</h2>
          <p>{this.props.store.movieClickedReducer.description}</p>
          <h3>Genre:</h3>
          <ul>{genresListArray}</ul>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieDetails);
