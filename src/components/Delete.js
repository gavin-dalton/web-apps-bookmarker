import React from 'react';

const Delete = (props) => {

  const handleNo = (e) => {
    e.preventDefault();
    props.history.goBack();
  };

  return (
    <div className="container">
      <div className="border border-primary rounded-lg my-2 p-3">
        <h4>Continue to delete the bookmark?</h4>
        <div className="mt-3">
          <button
            className="btn btn-outline-danger"
          >YES</button>
          <button
            className="btn btn-outline-success ml-2"
            onClick={handleNo}
          >NO</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
