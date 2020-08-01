import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieDetails extends Component {
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
        <h1>This is the details page</h1>
        <Link to={'/'}>Back</Link>

        <ul>{genresListArray}</ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieDetails);
