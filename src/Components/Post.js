import React, { Component } from 'react';
import propTypes from 'prop-types';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
    };
  }

  render() {
    return (
      this.props.breeds.map((title, index) => (
      <div key={index}>
        <img alt="" src={title} id="image"/>
        <p>{`title ${index + 1}`}</p>
      </div>
      ))
    );
  }
}
Post.propTypes = {
  breeds: propTypes.array,
};
export default Post;
