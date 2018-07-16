import axios from "axios";

export default {
  getSiteData: () => ({
    title: "React Static"
  }),
  getRoutes: async () => {
    return [
      await generatePostsRoutes(),
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
  // webpack: (config, { defaultLoaders }) => {
  //   config.module.rules = [
  //     {
  //       oneOf: [
  //         {
  //           test: /\.json$/,
  //           use: [{ loader: 'json-loader' }],
  //         },
  //         defaultLoaders.jsLoader,
  //         defaultLoaders.cssLoader,
  //         defaultLoaders.fileLoader,
  //       ],
  //     },
  //   ]
  //   return config
  // },
};

const generatePostsRoutes = async () => {
  const { data: posts } = await axios.get(
    "https://public-api.wordpress.com/wp/v2/sites/yannboisselier.wordpress.com/posts?per_page=100"
  );
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
