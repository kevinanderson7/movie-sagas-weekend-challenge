import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class MovieItem extends Component {
  handleImageClick = (action) => {
    this.props.history.push('/details');
  };

  render() {
    return (
      <div key={this.props.item.id}>
        <img
          onClick={this.handleImageClick}
          alt={this.props.item.title}
          src={this.props.item.poster}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withRouter(connect(mapStoreToProps)(MovieItem));
