import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import './MovieItem.css';

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
      <div>
        <img
          onClick={this.handleImageClick(this.props.item.id)}
          src={this.props.item.poster}
          alt={this.props.item.title}
        ></img>

        <Card
          onClick={this.handleImageClick(this.props.item.id)}
          key={this.props.item.id}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(MovieItem));
