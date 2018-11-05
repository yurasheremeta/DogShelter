import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';\


import Title from '../../components/Title';
// import Review from '../components/Review';
import '../../index.css';
import Post from '../../components/Post';
import ApiClient from '../../services/ApiClient';
// import Header from '../components/BreedsOverwievComponent';
// eslint-disable-next-line import/no-duplicates

// eslint-disable-next-line import/no-duplicates
import withSpinner from '../../components/withSpinner';
// import getImages from '../../reducers/DogApp';
// import getImages from '../../actions/actions';
// import Button from '../components/Button';
// import {
//   getBreeds,
// } from '../../store/actions';
//  import getImages from '../reducers/DogApp';


const PostWithSpinner = withSpinner(Post);

// const buttonDiv = styled.div`
// margin: auto;
// position: absolute;
// `;
class Home extends Component {
  componentDidMount() {
    const { loadBreeds } = this.props;

    // console.log('props: ', this.props);

    ApiClient.get(`https://dog.ceo/api/breeds/image/random/${3}`).then((breeds) => {
      loadBreeds(breeds);
    });
  }

  render() {
    const {
      isLoading,
      breeds,
    } = this.props;

    return (
          <div>
        <div className="App">
        <div id="title">
          <Title />
        </div>
        <div id="container">
          <PostWithSpinner isLoading={isLoading} breeds={breeds} />
        </div>

      </div>

      </div>

    );
  }
}


Home.propTypes = {
  isLoading: PropTypes.bool,
  breeds: PropTypes.array,
  loadBreeds: PropTypes.func,
  getImages: PropTypes.func,

};

export default Home;

// {/* <buttonDiv>
//        <Button onClick={loadMore}>see More</Button>
//        <Review />
//     </buttonDiv> */}


// this.props.getImages(breeds);
// const photo = breeds.message;
// this.setState({ breeds: photo, isLoading: false });
