import React from "react";
import { withRouteData, Link } from "react-static";

export default withRouteData(({ posts }) => (
  <div>
    {posts.map(post => (
      <div key={post.id}>
        <Link to={`/post/${post.slug}/`}>{post.title.rendered}</Link>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        <hr />
      </div>
    ))}
  </div>
));
