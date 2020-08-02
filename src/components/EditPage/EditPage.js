import React, { Component } from 'react';

import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './EditPage.css';
import Button from '@material-ui/core/Button';

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
    this.props.history.push('/');
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
          <div className="cancel-button">
            <Button variant="contained" onClick={this.handleCancelClick}>
              Cancel
            </Button>
          </div>
          <div className="save-button">
            <Button variant="contained" onClick={this.handleSaveClick}>
              Save
            </Button>
          </div>
          <div className="title-input">
            <TextField
              id="outlined-basic"
              label="Movie Title"
              variant="outlined"
              onChange={this.onInputChange('titleInput')}
              className="movie-title-input"
            ></TextField>
          </div>
          <div className="description-input">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Movie Description"
              onChange={this.onInputChange('descriptionInput')}
              className="movie-description-input"
            ></TextField>
          </div>
        </div>
        <div className="movie-container">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Genre:
              </Typography>
              <Typography gutterBottom color="textSecondary" component="h4">
                <ul>{genresListArray}</ul>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
