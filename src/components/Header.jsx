import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: lightgreen;
          border: 1px solid black;
          border-radius: 5px;
          padding: 5px;
          margin: 0 auto;
          text-align: center;
          width: 500px;
        }
        `}</style>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
