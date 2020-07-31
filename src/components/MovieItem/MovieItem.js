import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
  render() {
    return (
      <div key={this.props.item.id}>
        <img alt={this.props.item.title} src={this.props.item.poster} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieItem);
