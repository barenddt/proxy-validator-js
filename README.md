## Install

Using NPM:

```
$ npm i mass-proxy-validator
```

Using Yarn:

```
$ yarn add mass-proxy-validator
```

## Example

```javascript
const proxyValidator = require("mass-proxy-validator");

proxyValidator({
  input: "path/to/proxies.txt",
  output: "path/to/newProxies.txt",
  url: "http://example.com/",
  threads: 100,
  timeout: 1000
});
```

## Options

```javascript
{
    input: // Path to proxies text file. Required
    output: // Path to saved proxies text file. Required
    url: // Url to test proxies against. Required
    threads: // Amount of threads to run. Required
    timeout: // Time to wait before closing connection. Required
}
```
