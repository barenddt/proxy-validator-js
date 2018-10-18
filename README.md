## Install

    npm i mass-proxy-validator
    -- or
    yarn add mass-proxy-validator

## Example

    const proxyValidator = require('mass-proxy-validator')

    proxyValidator({
        input: "path/to/proxies.txt",
        output: "path/to/newProxies.txt",
        url: "http://example.com/", //URL to test against,
        threads: 100,
        timeout: 1000
    })
