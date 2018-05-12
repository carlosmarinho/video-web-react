import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBDDsQ3hEtE0q6TnZiZRYV0z2JGh5CT_fI';

// Create a new component. this component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

//Take this component's generated HTML and put i on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));