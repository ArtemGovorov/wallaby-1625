module.exports = function (wallaby) {
  return {
    files: [
      'src-node/src/**/*.coffee'        ],

    tests: [
      'src-node/test/**/*.coffee'
    ],
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({}),
    },
    env: {
      type: 'node',
      runner: 'node'
    }
  }
}