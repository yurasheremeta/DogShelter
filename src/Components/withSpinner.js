import React, { Component } from 'react';
import Spinner from './Spinner';

const withSpinner = WrappedComponent => class WithSpinner extends Component {
  render() {
    const { isLoading } = this.props;
    return isLoading ? <Spinner>Loading..</Spinner> : <WrappedComponent {...this.props}/>;
  }
};

export default withSpinner;
