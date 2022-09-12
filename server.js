const jsonServer = require("json-server");
const server = jsonServer.create();
const route = jsonServer.route("./public/db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

const PORT = process.env.PORT || 3001;
server.use(middlewares);
server.use(route);
server.listen(PORT, () => {
  console.log("Server is running");
});
