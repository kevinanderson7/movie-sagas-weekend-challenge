import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  render() {
    return (
      <div>
        <h1>This is the details page</h1>
        <Link to={'/'}>Back</Link>
      </div>
    );
  }
}

export default connect()(MovieDetails);
