import * as WebSocket from 'ws'

const server = new WebSocket.Server({ port: 5001 })


server.on("connection", (ws) => {
    ws.on("message", (message) => {
            console.log("Received: " + message);
        if (message === "hello") {
            ws.send("hello from server");
        }
    });
});