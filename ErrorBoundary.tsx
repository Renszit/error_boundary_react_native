import React from 'react';
import {FallbackUI} from './FallbackUI';

class MyErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(_error: any) {
    return {hasError: true};
  }

  logError(error: any, errorInfo: any) {
    console.log(error, errorInfo);
    //do with this info what you will, preferably fix your error!
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.logError(error, errorInfo);
  }

  render() {
    console.log('error boundary hit');
    return this.state.hasError ? <FallbackUI /> : this.props.children;
  }
}

export default MyErrorBoundary;
