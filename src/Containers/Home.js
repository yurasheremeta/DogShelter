import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from '../components/Title';
import Apiclient from '../services/ApiClient';
import Review from '../components/Review';
import '../index.css';
import Post from '../components/Post';
// eslint-disable-next-line import/no-duplicates

// eslint-disable-next-line import/no-duplicates
import withSpinner from '../components/withSpinner';
import Button from '../components/Button';


const PostWithSpinner = withSpinner(Post);
const buttonDiv = styled.div`
margin: auto;
position: absolute;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleFetcBreeds(3);
  }

  handleFetcBreeds = (num) => {
    this.setState({ isLoading: true });

    Apiclient.get(`https://dog.ceo/api/breeds/image/random/${num}`).then((breeds) => {
      console.log(breeds);

      const photo = breeds.message;
      this.setState({ breeds: photo, isLoading: false });
    });
  };

  seeMore = (num) => {
    Apiclient.get(`https://dog.ceo/api/breeds/image/random/${num}`).then((breedsMore) => {
      console.log(breedsMore);
      const breeds1 = this.state.breeds.concat(breedsMore.message);
      console.log('breeds1: ', breeds1);
      this.setState({ breeds: breeds1 });
    });
  }

  render() {
    return (
      <div>
        <div className="App">
        <div id="title">
          <Title />
        </div>
        <div id="container">
          <PostWithSpinner isLoading={this.state.isLoading} breeds={this.state.breeds} />
        </div>
        <buttonDiv>
           <Button onClick={() => this.seeMore(5)}>see More</Button>
           <Review />
        </buttonDiv>
      </div>

      </div>
    );
  }
}

App.propTypes = {
  breeds: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default App;
