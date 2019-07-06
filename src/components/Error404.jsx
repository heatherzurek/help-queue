import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: pink;
          border: 1px solid black;
          border-radius: 5px;
          padding: 5px;
          margin: 0 auto;
          text-align: center;
          width: 500px;
        }
        button {
          background-color: #5e7761;
          border: 1px solid black;
        }
        `}</style>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
