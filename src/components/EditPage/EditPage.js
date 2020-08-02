import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditPage extends Component {
  state = {
    titleInput: '',
    descriptionInput: '',
    id: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
      id: this.props.store.movieClickedReducer.id,
    });
    console.log(this.state);
  };

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
    this.setState({
      ...this.state,
      id: this.props.store.movieClickedReducer.id,
    });
    console.log(this.state);
    this.props.dispatch({
      type: 'UPDATE_MOVIE',
      payload: this.state,
    });
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
          <div>
            <input
              onChange={this.onInputChange('titleInput')}
              className="movie-title-input"
              placeholder="Movie Title"
            ></input>
          </div>
          <div>
            <input
              onChange={this.onInputChange('descriptionInput')}
              className="movie-description-input"
              placeholder="Movie Description"
            ></input>
          </div>
        </div>

        <h3>Genre:</h3>
        <ul>{genresListArray}</ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
