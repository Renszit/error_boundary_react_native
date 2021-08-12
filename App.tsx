import React from 'react';
import SomeRandomFailingApp from './SomeRandomFailingApp';
import MyErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <MyErrorBoundary>
      <SomeRandomFailingApp />
    </MyErrorBoundary>
  );
};

export default App;
