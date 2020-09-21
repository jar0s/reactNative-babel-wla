const brandPath = `./App/brands/${process.env.APP_BRAND}`;

console.log(`Bundling for the brand: ${process.env.APP_BRAND}`);

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./App', brandPath, './App/brands/default']
      }]
    ]
  };
};
