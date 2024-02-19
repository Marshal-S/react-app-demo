/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const {createProxyMiddleware} = require("http-proxy-middleware");

// 配置代理中间件
const requestUrl = 'http://192.168.1.1'
//websocket地址
// ws://192.168.1.1/api

const apiProxy = createProxyMiddleware("/api", {
    target: requestUrl,
    changeOrigin: true,
    // ws: true,
    // pathRewrite: {'^': ''},
});

// eslint-disable-next-line no-undef
module.exports = function (app) {
    app.use(apiProxy);
}
