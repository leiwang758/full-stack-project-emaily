const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
	app.use(
		["/api", "/auth/google"],
		createProxyMiddleware({
			target: "http://localhost:5000", // CORS request / no cookies -> try to do sth malicious, same domin so not a issue.
		})
	);
};
// index.js Redux
// app.js React
