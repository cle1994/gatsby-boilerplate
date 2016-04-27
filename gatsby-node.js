const cssnano = require('cssnano');

exports.modifyWebpackConfig = function(config, env) {
  config.merge({
    postcss: [
      cssnano({
        safe: true,
        sourcemap: true,
        autoprefixer: {
          add: true,
          remove: true,
          browsers: [
            'last 3 versions',
            'ie >= 8',
            '> 2%'
          ]
        },
        discardComments: {
          removeAll: true
        }
      });
    ]
  });

  return config;
}
