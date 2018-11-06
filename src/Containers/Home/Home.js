import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title';

import '../../index.css';
import Post from '../../components/Post';
import withSpinner from '../../components/withSpinner';
import { getImagesFOrOverview } from '../../actions/actions';
// import { getImagesThunk } from '../../actions/actions';

const PostWithSpinner = withSpinner(Post);


class Home extends Component {
  componentDidMount() {
    const { getImages } = this.props;
    getImages();
    getImagesFOrOverview();
  }

  render() {
    const {
      isLoading,
      breeds,
    } = this.props;
    return (
          <React.Fragment>
            <div className="App">
        <div id="title">
          <Title />
        </div>
        <div id="container">
          <PostWithSpinner isLoading={isLoading} breeds={breeds} />
        </div>

      </div>

          </React.Fragment>

    );
  }
}
Home.propTypes = {
  isLoading: PropTypes.bool,
  breeds: PropTypes.array,
  // loadBreeds: PropTypes.func,
  getImages: PropTypes.func,

};

export default Home;
