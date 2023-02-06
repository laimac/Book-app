import React from 'react';
import {Link} from 'react-router-dom';


function Home() {

  const posts = [
    {
      id:1,
      title: "one",
      desc: "one one one",
      img:"https://sportshub.cbsistatic.com/i/2022/06/10/91e49e5d-41c3-4252-a649-fbf540595907/english-harry-potter-7-epub-9781781100264.jpg?auto=webp&width=1200&height=1800&crop=0.667:1,smart",
    },
    {
      id:2,
      title: "two",
      desc: "two two two",
      img:"https://sportshub.cbsistatic.com/i/2022/06/10/91e49e5d-41c3-4252-a649-fbf540595907/english-harry-potter-7-epub-9781781100264.jpg?auto=webp&width=1200&height=1800&crop=0.667:1,smart",
    },    {
      id:3,
      title: "three",
      desc: "three three three",
      img:"https://sportshub.cbsistatic.com/i/2022/06/10/91e49e5d-41c3-4252-a649-fbf540595907/english-harry-potter-7-epub-9781781100264.jpg?auto=webp&width=1200&height=1800&crop=0.667:1,smart",
    },    {
      id:4,
      title: "four",
      desc: "four four four",
      img:"https://sportshub.cbsistatic.com/i/2022/06/10/91e49e5d-41c3-4252-a649-fbf540595907/english-harry-potter-7-epub-9781781100264.jpg?auto=webp&width=1200&height=1800&crop=0.667:1,smart",
    },    {
      id:5,
      title: "five",
      desc: "five five five",
      img:"https://sportshub.cbsistatic.com/i/2022/06/10/91e49e5d-41c3-4252-a649-fbf540595907/english-harry-potter-7-epub-9781781100264.jpg?auto=webp&width=1200&height=1800&crop=0.667:1,smart",
    },
  ];

  return (
<div className="home">
<div className="posts">
  {posts.map(post=>(
    <div className="post"key={post.id}>
      <div className="img">
        <img src={post.img} alt="" />
      </div>
      <div className="content">
        <Link to={`/post/${post.id}`} className="link">
          <h1>
            {post.title}
          </h1>
        </Link>        
          <p>
            {post.desc}
          </p>
          <button>
            See more
          </button>
      </div>
    </div>
  ))}
</div>
</div>
  );
}

export default Home;
