"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocket = __importStar(require("ws"));
var menberRegistration_1 = require("./menberRegistration");
var snsLogin_1 = require("./snsLogin");
var server = new WebSocket.Server({ port: 5001 });
server.on("connection", function (ws) {
    ws.on("message", function (message) {
        console.log(message);
        var packet = JSON.parse(message.toString());
        switch (packet.packetName) {
            case "MemverRegistrationC2SPacket":
                console.log("Received: " + packet.packetName);
                console.log("Received: " + packet.userid);
                console.log("Received: " + packet.passwordhash);
                (0, menberRegistration_1.memverRegistration)(packet.userid, packet.passwordhash);
                break;
            case "LoginRegistrationC2SPacket":
                console.log("Received: " + packet.packetName);
                console.log("Received: " + packet.userid);
                console.log("Received: " + packet.passwordhash);
                (0, snsLogin_1.snsLogin)(packet.userid, packet.passwordhash);
                break;
        }
    });
});
