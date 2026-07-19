module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-proposal-export-namespace-from'],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@types': './src/types',
            '@stores': './src/stores',
            '@hooks': './src/hooks',
          },
        },
      ],
    ],
  };
};
