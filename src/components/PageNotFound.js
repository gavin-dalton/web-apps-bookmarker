import React from 'react';

const PageNotFound = (props) => {
  console.log('PageNotFound: props...', props);
  return (
    <div className="text-primary text-center my-5">
      <h3>Page not found for ... {props.location.pathname}</h3>
    </div>
  );
};

export default PageNotFound;
