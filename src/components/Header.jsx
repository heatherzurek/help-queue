import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          border-radius: 5px;
          padding: 5px;
          margin: 0 auto;
          text-align: center;
        }
        `}</style>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
