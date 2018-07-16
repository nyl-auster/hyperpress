import React from "react";
import { withRouteData, Link } from "react-static";

export default withRouteData(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    {posts.map(post => (
      <div key={post.id}>
        {console.log(post)}
        <Link to={`/post/${post.id}/`}>{post.title.rendered}</Link>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        <hr />
      </div>
    ))}
  </div>
));
