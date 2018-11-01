import React, { Component } from 'react';

import { Title } from '../Components/Title';
import Apiclient from '../ApiClient';
import { Review } from '../Components/Review';
import WithSpinner from '../Components/withSpinner';
import '../index.css';

import Post from '../Components/Post';

import Spinner from '../Components/withSpinner';
import withSpinner from '../Components/withSpinner';


const PostWithSpinner = withSpinner(Post);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      isLoading: false
    }

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
    const breedsMore = [];
    Apiclient.get(`https://dog.ceo/api/breeds/image/random/${num}`).then((breedsMore) => {
      console.log(breedsMore);

      const photo = breedsMore.message;
      const breeds1 = this.state.breeds.concat(breedsMore.message);

      console.log('breeds1: ', breeds1);

      this.setState({ breeds: breeds1 });
    });
  }



  render() {
    return (
      <div className="App">
     
        <div id="title">
          <Title />
        </div>
        <div id="container">
          <Spinner isLoading={true} />
          <PostWithSpinner isLoading={this.state.isLoading} breeds={this.state.breeds} />

        </div>
        <button id="seeMore" onClick={() => this.seeMore(5)}>
          see more
           </button>
        <div>
          <Review />
        </div>
      </div>

    );
  }
}

export default App;