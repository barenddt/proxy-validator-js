const proxyChecker = require("./index");

proxyChecker({
  input: "proxies.txt",
  output: "newProxies.txt",
  url: "http://soundcloud.com/",
  threads: 400,
  timeout: 10000
});
