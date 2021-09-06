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
var SignInRequestC2SPacket_1 = require("./Packet/C2Spacket/SignInRequestC2SPacket");
var SignUp_1 = require("./SignUp");
var SignIn_1 = require("./SignIn");
var memverDelete_1 = require("./memverDelete");
var messageDelete_1 = require("./messageDelete");
var messageSend_1 = require("./messageSend");
//Socket.ioで……
var server = new WebSocket.Server({ port: 5001 });
server.on("connection", function (ws) {
    ws.on("message", function (message) {
        console.log(message);
        var packet = new SignInRequestC2SPacket_1.SignInRequestC2SPacket("user", "pass");
        //テスト用
        // packet = JSON.parse(message.toString())a
        console.log(packet);
        if ("SignUpRequestC2SPacketType" in packet) {
            packet.C2SPacketType;
            console.log("Received: " + packet);
            if ((0, SignUp_1.SignUp)(packet.userId, packet.userName, packet.passwordHash)) {
                ws.send("MemverRegistration execution!");
                console.log("MemverRegistration error");
            }
            else {
                ws.send("MemverRegistration error");
                console.log("MemverRegistration error");
            }
            ;
        }
        else if ("SignInRequestC2SPacketType" in packet) {
            packet.C2SPacketType;
            console.log("Received: " + packet);
            if ((0, SignIn_1.SignIn)(packet.userId, packet.passwordHash)) {
                ws.send("Login execution!");
                console.log("Login execution!");
            }
            else {
                ws.send("Login error");
                console.log("Login error!");
            }
        }
        else if ("MemberDeleteC2SPacketType" in packet) {
            packet.C2SPacketType;
            console.log("Received: " + packet);
            if ((0, memverDelete_1.memverDelete)(packet.userId, packet.passwordHash)) {
                ws.send("memberEject execution!");
                console.log("memberEject execution!");
            }
            else {
                ws.send("menberEject error");
                console.log("menberEject error");
            }
        }
        else if ("MessageSendC2SPacketType" in packet) {
            packet.C2SPacketType;
            console.log("Received: " + packet);
            if ((0, messageSend_1.messageSend)(packet.userId, packet.message)) {
                ws.send("messageSend execution");
                console.log("messageSend execution");
            }
            else {
                ws.send("messageSend error");
                console.log("messageSend error");
            }
        }
        else if ("MessageDeleteC2SPacketType" in packet) {
            packet.C2SPacketType;
            console.log("Received: " + packet);
            if ((0, messageDelete_1.messageDelete)(packet.requestUserId, packet.message)) {
                ws.send("messageDelete execution");
                console.log("messageDelete execution");
            }
            else {
                ws.send("messageDelete error");
                console.log("messageDelete error");
            }
        }
        // switch(packet){
        // 	case "SignUpC2SPacket":
        // console.log("Received: " + packet.packetName);
        // if(SignUp(packet.userId,packet.userName,packet.passwordHash)){
        // 	ws.send("MemverRegistration execution!")
        // 	console.log("MemverRegistration error")
        // }
        // else{
        // 	ws.send("MemverRegistration error")
        // 	console.log("MemverRegistration error")
        // };
        // break;
        // 	case "SignInC2SPacket":
        // 		console.log("Received: " + packet.packetName);
        // 		if(SignIn(packet.userId,packet.passwordHash)){
        // 			ws.send("Login execution!")
        // 			console.log("Login execution!")
        // 		}
        // 		else{
        // 			ws.send("Login error")
        // 			console.log("Login error!")
        // 		}
        // 		break;
        // 	case "MemberDeleteC2SPacket":
        // 		console.log("Received: " + packet.packetName);
        // 		if(memverDelete(packet.userId,packet.passwordHash)){
        // 			ws.send("memberEject execution!")
        // 			console.log("memberEject execution!")
        // 		}
        // 		else{
        // 			ws.send("menberEject error")
        // 			console.log("menberEject error")
        // 		}
        // 		break;
        // 	case "MessageSendC2SPacket":
        // 		console.log("Received: " + packet.packetName);
        // 		if(messageSend(packet.userId,packet.message)){
        // 			ws.send("messageSend execution")
        // 			console.log("messageSend execution")
        // 		}
        // 		else{
        // 			ws.send("messageSend error")
        // 			console.log("messageSend error")
        // 		}
        // 		break;
        // 	case "MessageDeleteC2SPacket":
        // 		console.log("Received: " + packet.packetName);
        // 		if(messageDelete(packet.requestUserId,packet.message)){
        // 			ws.send("messageDelete execution")
        // 			console.log("messageDelete execution")
        // 		}
        // 		else{
        // 			ws.send("messageDelete error")
        // 			console.log("messageDelete error")
        // 		}
        // 		break;
        // }
    });
    ws.on('close', function () {
        console.log('I lost a client');
    });
});
