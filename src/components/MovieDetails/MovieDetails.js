import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './MovieDetails.css';
import { CardActionArea } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class MovieDetails extends Component {
  //   componentDidMount() {
  //     this.props.dispatch({
  //       type: 'GET_MOVIES',
  //     });
  //   }

  handleBackClick = () => {
    this.props.history.push('/');
  };

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
          <Button variant="contained" onClick={this.handleBackClick}>
            Back to List
          </Button>
          {/* <Link to={'/'}>Back to List</Link> */}
        </div>
        <div className="edit-button">
          <Button variant="contained" onClick={this.handleEditClick}>
            Edit
          </Button>
        </div>
        <div className="movie-container">
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.store.movieClickedReducer.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.store.movieClickedReducer.description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h3">
                  Genre:
                </Typography>
                <Typography gutterBottom color="textSecondary" component="h4">
                  <ul>{genresListArray}</ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieDetails);
