function getBuildNumber() {
  return process.env.BUILD_NUMBER ||
         process.env.CI_BUILD_NUMBER ||
         process.env.CIRCLE_BUILD_NUM ||
         process.env.TRAVIS_BUILD_NUMBER ||
         process.env.APPVEYOR_BUILD_NUMBER ||
         process.env.bamboo_buildNumber ||
         process.env.GITHUB_RUN_ID;
}

module.exports = getBuildNumber;
