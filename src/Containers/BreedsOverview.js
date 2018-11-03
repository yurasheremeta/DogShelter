import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Apiclient from '../services/ApiClient';
// eslint-disable-next-line import/no-duplicates
import withSpinner from '../components/withSpinner';
import Overview from '../components/Overview';
// eslint-disable-next-line import/no-duplicates
import Spinner from '../components/withSpinner';
import '../index.css';

const OverviewWithSpinner = withSpinner(Overview);

class BreedsOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beeds: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleFetcBreeds(1);
  }

    handleFetcBreeds = (num) => {
      this.setState({ isLoading: true });
      Apiclient.get(`https://dog.ceo/api/breeds/image/random/${num}`).then((breeds) => {
        console.log(breeds);
        const photo = breeds.message;
        this.setState({ breeds: photo, isLoading: false });
      });
    };

    render() {
      return (
    <div>
        <h3>BreedsOverview</h3>
            <div id="container">
                <Spinner isLoading={true} />
                <OverviewWithSpinner isLoading={this.state.isLoading} breeds={this.state.breeds} />
            </div>
    </div>
      );
    }
}

BreedsOverview.PropTypes = {
  breeds: PropTypes.array,
};
export default BreedsOverview;
