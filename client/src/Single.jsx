import React from 'react';
import {Link} from 'react-router-dom';
import {MdDelete} from "react-icons/md";
import {FaEdit} from "react-icons/fa";
import Menu from "./components/Menu";


function Single() {
  return (
<div className="single">
  <div className="content">
  <img className = "bigPicture" src="https://sportshub.cbsistatic.com/i/2022/06/10/91e49e5d-41c3-4252-a649-fbf540595907/english-harry-potter-7-epub-9781781100264.jpg?auto=webp&width=300&height=450&crop=0.667:1,smart" alt=""/>
<div className="user">
<img src="https://sportshub.cbsistatic.com/i/2022/06/10/91e49e5d-41c3-4252-a649-fbf540595907/english-harry-potter-7-epub-9781781100264.jpg?auto=webp&width=1200&height=1800&crop=0.667:1,smart" alt="" />
  <div className="info">
    <span><strong>Laima</strong></span>
    <p>Posted 2 days ago</p>
  </div>
  <div className="edit">
    <Link to={`/write?edit=2`}>
      <span className="editIcon">
        <FaEdit size={24} />
      </span>
</Link>
<Link to={`/write`}>  
<span className="deleteIcon">
<MdDelete size={24}/>
</span>
</Link>
  </div>
</div>
<h1>
  One One One
</h1>
<p>
  one one one one one one one one
</p>
      </div>
<Menu />
</div>
  );
}

export default Single;
