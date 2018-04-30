var path = require("path");
var ghpages = require("gh-pages");
var basePath = path.join(__dirname, "../demo/dist");
var repoUrl = require("../package.json").repository.url;

var GITHUB_TOKEN = process.env.GITHUB_TOKEN;
var tokenRegex = GITHUB_TOKEN ? new RegExp(GITHUB_TOKEN, "g") : null;

var log = function(message) {
  if (tokenRegex) {
    // Hide token from build logs
    message = message.replace(tokenRegex, "[GITHUB_TOKEN]");
  }

  console.log(message);
};

var makeConfig = function() {
  return {
    repo: GITHUB_TOKEN
      ? repoUrl.replace("https://", "https://" + GITHUB_TOKEN + "@")
      : repoUrl,
    logger: log
  };
};

ghpages.publish(basePath, makeConfig(), function(err) {
  if (err) {
    log("Deployment error");
    return log(JSON.stringify(err));
  }

  log("Deployment complete!");
});
