import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://meta-cycle.io:8000",
      changeOrigin: true,
    })
  );
}
