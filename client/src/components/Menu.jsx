import React from "react";

const Menu = () => {

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


    return(
        <div className="menu">
            <h1>
                Other books
            </h1>
            {posts.map(post=>(
                <div className="post" key={post.id}>
<img src={post.img} alt="" />
<h2>
    {post.title}
</h2>
<button>
    Read more
</button>
                </div>
            )
                )}
        </div>
    )
}

export default Menu