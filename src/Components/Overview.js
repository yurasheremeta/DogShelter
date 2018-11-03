import React, { Component } from 'react';
import propTypes from 'prop-types';

class Overview extends Component {
  render() {
    return (
      this.props.breeds.map((title, index) => (
                <div key={index}>
                    <img src={title} id="image"></img>
                </div>
      ))
    );
  }
}
Overview.propTypes = {
  breeds: propTypes.array,
};
export default Overview;
