import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiClient from '../../services/ApiClient';
// eslint-disable-next-line import/no-duplicates
import withSpinner from '../../components/withSpinner';
import '../../index.css';
import Post from '../../components/Post';

const PostWithSpinner = withSpinner(Post);

class BreedsOverview extends Component {
  componentDidMount() {
    const { loadBreeds } = this.props;

    ApiClient.get(`https://dog.ceo/api/breeds/image/random/${1}`).then((breeds) => {
      loadBreeds(breeds);
    });
  }

  // handleFetcBreeds = (num) => {
  //   this.setState({ isLoading: true });
  //   Apiclient.get(`https://dog.ceo/api/breeds/image/random/${num}`).then((breeds) => {
  //     console.log(breeds);
  //     const photo = breeds.message;
  //     this.setState({ breeds: photo, isLoading: false });
  //   });
  // };

  render() {
    const {
      isLoading,
      breeds,
    } = this.props;
    return (
        <div>
        <div className="App">
        <div id="title">
          <h3>Breeds Overview</h3>
        </div>
        <div id="container">
          <PostWithSpinner isLoading={isLoading} breeds={breeds} />
        </div>

      </div>

      </div>
    );
  }
}

BreedsOverview.propTypes = {
  isLoading: PropTypes.bool,
  breeds: PropTypes.array,
  loadBreeds: PropTypes.func,
  getImages: PropTypes.func,
};
export default BreedsOverview;
