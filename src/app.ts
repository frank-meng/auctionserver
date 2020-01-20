import * as express from "express";
import { createServer } from "http";
import * as path from "path";
import {createBidServer} from "./bitServer";
import { router } from "./rest-auction";

const app = express();

const PORT = process.env.PORT || 8081

app.use('/favicon.ico', express.static('images/favicon.ico'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api", router);
//app.use("/data", express.static(path.join(__dirname, ".", "data")));

const server = createServer(app);
//createBidServer(server);



server.listen(PORT, () => {
  // const {address, port} = server.address();
  // console.log('Listening on %s %s', address, port);
  console.log("Listening on localhost:8081");
});
