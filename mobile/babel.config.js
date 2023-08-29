module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@configs': './src/configs',
            '@contexts': './src/contexts',
            '@dtos': './src/dtos',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@services': './src/services',
            '@storage': './src/storage',
            '@routes': './src/routes',
            '@themes': './src/themes',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  }
}
