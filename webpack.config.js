const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // 프로덕션 모드로 설정
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // 청크 이름과 해시를 포함하여 캐싱 최적화
    clean: true, // 이전 빌드 결과물 정리
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 모든 청크에 대해 코드 분할 적용
    },
    usedExports: true, // 사용하지 않는 코드 제거
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 확장자 설정 확인
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
  ],
};
