const brandPath = `./App/brands/${process.env.APP_BRAND}`;

console.log(`Bundling for the brand: ${process.env.APP_BRAND}`);

module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: [brandPath, './App/brands/default'],
          alias: {
            '@': './App',
            '@genericComponents': './App/components',
          },
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: ['SENTRY_DSN', 'BUNDLE_ID'],
        },
      ],
    ],
  };
};
