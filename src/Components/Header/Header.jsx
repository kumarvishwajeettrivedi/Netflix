import React from 'react'
import {Link} from "react-router-dom";
import logo from "../../netflix.png";
import {BsSearch} from "react-icons/bs"
function Header() {
  return (
    <div className="header">
      <img src={logo} alt='logo' />
      <div>
        <Link to="/">TV Show</Link>
        <Link to="/Movies">Movies</Link>
        <Link to="/Recent">Recently Added</Link>
        <Link to="/MyList">My List</Link>
      </div>
      <BsSearch />
    </div>
    
  );
}

export default Header