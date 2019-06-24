import React from 'react';

const PageNotFound = (props) => {
  console.log('PageNotFound: props...', props);
  return (
    <div className="container">
      <div className="border border-warning rounded-lg text-center mt-5 p-3">
        <h4>404</h4>
        <p>Page not found for ... {props.location.pathname}</p>
        <button
          className="btn btn-outline-warning"
          onClick={() => { props.history.goBack() }}
        >Back</button>
      </div>
    </div>
  );
};

export default PageNotFound;
