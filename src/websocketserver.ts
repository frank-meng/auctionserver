
import * as express from "express";
import * as path from "path";
import {Server } from "ws";

const app = express();

app.get ("/", (req, res) => res.sendFile(path.join(__dirname, "./simple-websocket-client.html")));

const httpServer = app.listen(8000, "localhost", () => {
    console.log(`  HTTP server is lisening on 8000`);
});

const wsServer = new Server({port: 8085});

console.log(" websocket server is listening on 8085");

wsServer.on("connection", (websocket) => {
    websocket.send("Hello from the two-way WebSocket server");

    websocket.onmessage = (message) =>      {
              console.log(`The server received: ${message.data}`);
              websocket.send(" server: recieved.");
     };

    websocket.onerror = (error) =>
          console.log(`The server received: ${error.message}`);

    websocket.onclose = (why) =>
          console.log(`The server received: ${why.code} ${why.reason}`); });
