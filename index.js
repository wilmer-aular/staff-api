const express = require("express");
const config = require("./src/config");
const pkg = require("./package.json");
const routerApi = require("./src/routers/api");

const app = express();
app.set("port", process.env.PORT || config.app.port);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: pkg.name,
    author: pkg.author,
    description: pkg.description,
    version: pkg.version,
  });
});

app.use("/api", routerApi);

app.listen(app.get("port"), () => {
  console.info(`Server listening at the port ${app.get("port")}`);
});
