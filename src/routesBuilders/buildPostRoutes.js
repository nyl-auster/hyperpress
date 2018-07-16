import axios from "axios";
import { getPosts } from "../lib/wordpressClient";

export default async () => {
  const routes = [];
  const per_page = 20;
  // first request just allow us to know how many pages we will have
  // according to our per_page number
  const ApiResponse = await getPosts({
    per_page,
    page: 1,
    _embed: true
  });

  for (let page = 1; page <= ApiResponse.metaData.totalPages; page++) {
    console.log(`Fetching ${per_page} posts to build page ${page}`);
    const ApiResponse = await getPosts({
      per_page,
      page,
      _embed: true
    });

    // adding a route for this page
    console.log(`generating route /posts/page/${page}`);
    routes.push({
      path: `/posts/page/${page}`,
      component: "src/containers/PostList",
      getData: () => ({
        posts: ApiResponse.data
      })
    });

    // adding one route per post
    ApiResponse.data.forEach(post => {
      console.log(`generating route /post/${post.slug}`);
      routes.push({
        path: `/post/${post.slug}`,
        component: "src/containers/Post",
        getData: () => ({
          post
        })
      });
    });
  }
  return routes;
};
