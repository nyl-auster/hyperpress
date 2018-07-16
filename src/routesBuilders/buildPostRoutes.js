import axios from "axios";
import { getPosts } from "../lib/wordpressClient";

export default async () => {
  const ApiResponse = await getPosts({ per_page: 1, _embed: true });
  console.log(ApiResponse.metaData.totalPages);
  const posts = ApiResponse.data;
  return {
    path: "/",
    component: "src/containers/Blog",
    getData: () => ({
      posts
    }),
    children: posts.map(post => ({
      path: `/post/${post.id}`,
      component: "src/containers/Post",
      getData: () => ({
        post
      })
    }))
  };
};
