import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditPage extends Component {
  handleEditClick = () => {
    this.props.history.push(
      `/details/${this.props.store.movieClickedReducer.id}/edit`
    );
  };

  handleCancelClick = () => {
    this.props.history.push(
      `/details/${this.props.store.movieClickedReducer.id}`
    );
  };

  handleSaveClick = () => {
    console.log('clicking save');
  };

  render() {
    console.log(this.props.store.movies);
    const genresListArray = this.props.store.movieClickedReducer.genre.map(
      (item, index) => {
        return <li key={index}>{item}</li>;
      }
    );

    return (
      <div>
        <div>
          <Link to={'/'}>Back to List</Link>
        </div>
        <div>
          <button onClick={this.handleCancelClick}>Cancel</button>
          <button onClick={this.handleSaveClick}>Save</button>
        </div>
        <h2>{this.props.store.movieClickedReducer.title}</h2>
        <p>{this.props.store.movieClickedReducer.description}</p>
        <h3>Genre:</h3>
        <ul>{genresListArray}</ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
