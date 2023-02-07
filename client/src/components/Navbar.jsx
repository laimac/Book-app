import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "../img/book.png";
import {GiBookCover} from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
            <GiBookCover size={36} />
        </div>
        <div className="links">
            <Link className='link' to="/?cat=art">
                <h6> Fantasy</h6>
                </Link>
                <Link className='link' to="/?cat=art">
                <h6> Romance</h6>
                </Link>
                <Link className='link' to="/?cat=art">
                <h6> Crime</h6>
                </Link>
                <Link className='link' to="/?cat=art">
                <h6> Adventure</h6>
                </Link>
                <span>Laima</span>
                <span>Logout</span>
                <span className="write">
                    <Link to="/write" className="link">Write</Link>
                </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
