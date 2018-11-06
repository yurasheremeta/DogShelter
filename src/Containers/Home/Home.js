import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title';
import '../../index.css';
import Post from '../../components/Post';
import withSpinner from '../../components/withSpinner';

const PostWithSpinner = withSpinner(Post);

class Home extends Component {
  componentDidMount() {
    const { getImages } = this.props;
    getImages();
  }

  render() {
    const {
      isLoading,
      breeds,
      // minDisplayAmount,
      getMoreBreeds,
    } = this.props;
    console.log(breeds);
    return (
          <React.Fragment>
            <div className="App">
        <div id="title">
          <Title />
        </div>
        <div id="container">
          <PostWithSpinner isLoading={isLoading} breeds={breeds} />
        </div>
        <div>
          <button onClick = {getMoreBreeds}>See more</button>
        </div>

      </div>
      </React.Fragment>

    );
  }
}
Home.propTypes = {
  isLoading: PropTypes.bool,
  breeds: PropTypes.array,
  getImages: PropTypes.func,
  getMoreBreeds: PropTypes.func,

};

export default Home;
