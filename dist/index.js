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
var memberDeleteC2SPacket_1 = require("./packets/c2s/memberDeleteC2SPacket");
var ProfileReturnS2CPacket_1 = require("./packets/s2c/ProfileReturnS2CPacket");
var MessageReturnS2CPacket_1 = require("./packets/s2c/MessageReturnS2CPacket");
var SignUp_1 = require("./functions/SignUp");
var SignIn_1 = require("./functions/SignIn");
var memberDelete_1 = require("./functions/memberDelete");
var profileReturn_1 = require("./functions/profileReturn");
var messageDelete_1 = require("./functions/messageDelete");
var messageSend_1 = require("./functions/messageSend");
var messageReturn_1 = require("./functions/messageReturn");
var follow_1 = require("./functions/follow");
var UnFollow_1 = require("./functions/UnFollow");
//Socket.ioで……
var server = new WebSocket.Server({ port: 5001 });
server.on("connection", function (ws) {
    ws.on("message", function (message) {
        console.log(message);
        var rawPacket = new memberDeleteC2SPacket_1.MemberDeleteC2SPacket("userid", "pass");
        //テスト用
        // packet = JSON.parse(message.toString())a
        console.log(rawPacket);
        if ("SignUpRequestC2SPacketType" in rawPacket) {
            var packet = rawPacket;
            console.log("Received: " + packet);
            if ((0, SignUp_1.SignUp)(packet.userId, packet.userName, packet.passwordHash)) {
                ws.send("SignUp execution!");
                console.log("SignUp error");
            }
            else {
                ws.send("SignUp error");
                console.log("SignUp error");
            }
            ;
        }
        else if ("SignInRequestC2SPacketType" in rawPacket) {
            var packet = rawPacket;
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
        else if ("MemberDeleteC2SPacketType" in rawPacket) {
            var packet = rawPacket;
            console.log("Received: " + packet);
            if ((0, memberDelete_1.memberDelete)(packet.userId, packet.passwordHash)) {
                ws.send("MemberDelete execution!");
                console.log("MemberDelete execution!");
            }
            else {
                ws.send("MemberDelete error");
                console.log("MemberDelete error");
            }
        }
        else if ("ProfileEditC2SPacket" in rawPacket) {
            var packet = rawPacket;
            console.log("Received: " + packet);
            if ((packet.userId, packet.newUserName)) {
                ws.send("Login execution!");
                console.log("Login execution!");
            }
            else {
                ws.send("Login error");
                console.log("Login error!");
            }
        }
        else if ("MessageSendC2SPacketType" in rawPacket) {
            var packet = rawPacket;
            console.log("Received: " + packet);
            if ((0, messageSend_1.messageSend)(packet.userId, packet.message)) {
                ws.send("MessageSend execution");
                console.log("MessageSend execution");
            }
            else {
                ws.send("MessageSend error");
                console.log("MessageSend error");
            }
        }
        else if ("MessageDeleteC2SPacketType" in rawPacket) {
            var packet = rawPacket;
            console.log("Received: " + packet);
            if ((0, messageDelete_1.messageDelete)(packet.userId, packet.messageId)) {
                ws.send("MessageDelete execution");
                console.log("MessageDelete execution");
            }
            else {
                ws.send("MessageDelete error");
                console.log("MessageDelete error");
            }
        }
        else if ("MessagesRequestC2SPacketType" in rawPacket) {
            var packet = rawPacket;
            console.log("Received: " + packet);
            var messagelist = (0, messageReturn_1.messageReturn)(packet.userId);
            if (messagelist.length) {
                for (var i = 0; i < Object.keys(messagelist).length; i++) {
                    ws.send(JSON.stringify(new MessageReturnS2CPacket_1.MessageReturnS2CPacket(messagelist[i].userId, messagelist[i].messageId[i], messagelist[i].time, messagelist[i].message)));
                }
            }
            else {
                ws.send("MessageRequest error");
                console.log("MessageRequest error");
            }
        }
        else if ("FollowC2SPacketType" in rawPacket) {
            var packet = rawPacket;
            console.log("Received: " + packet);
            if ((0, follow_1.follow)(packet.followUserId, packet.myId)) {
                ws.send("follow execution");
                console.log("follow execution");
            }
            else {
                ws.send("follow error");
                console.log("follow error");
            }
        }
        else if ("UnFollowC2SPacketType" in rawPacket) {
            var packet = rawPacket;
            console.log("Received: " + packet);
            if ((0, UnFollow_1.Unfollow)(packet.followUserId, packet.myId)) {
                ws.send("UnFollow execution");
                console.log("UnFollow execution");
            }
            else {
                ws.send("UnFollow error");
                console.log("UnFollow error");
            }
        }
        else if ("ProfileRequestC2SPacketType" in rawPacket) {
            var packet = rawPacket;
            console.log("Received: " + packet);
            if ((0, profileReturn_1.profileReturn)(packet.userId, packet.myId)) {
                ws.send(JSON.stringify(new ProfileReturnS2CPacket_1.ProfileReturnS2CPacket(packet.userId, true)));
                console.log("messageReturn execution");
            }
            else {
                ws.send(JSON.stringify(new ProfileReturnS2CPacket_1.ProfileReturnS2CPacket(packet.userId, false)));
                console.log("messageReturn execution");
            }
        }
        // }else if("TimeLineRequestC2SPacketType" in rawPacket){
        // 	const packet = (rawPacket as TimeLineRequestC2SPacket)
        // 	console.log("Received: " + packet);
        // 	if(profileReturn()){
        // 		ws.send("messageReturn execution")
        // 		console.log("messageReturn execution")
        // 	} else {
        // 		ws.send("messageReturn error")
        // 		console.log("messageReturn error")
        // 	}	
        ws.on('close', function () {
            console.log('I lost a client');
        });
    });
});
