import buildPostRoutes from "./src/routesBuilders/buildPostRoutes";

export default {
  getSiteData: () => ({
    title: "React Static"
  }),
  getRoutes: async () => {
    return [
      ...(await buildPostRoutes()),
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
