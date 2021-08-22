module.exports = {
  presets: [
    [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
      {
        targets: {
          node: 'current'
        },
      }
    ],
  ],
  verbose: true,
  plugins: [
    ["babel-plugin-styled-components"],
    ["react-remove-properties", {"properties": ["data-test"]}]
  ]
};