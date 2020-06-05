const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3333;

(async () => {
  try {
    await app.prepare();

    const server = express();

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on port ${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
  }
})();
