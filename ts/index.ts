import * as WebSocket from 'ws'
import { SignInRequestC2SPacket } from './packets/c2s/SignInRequestC2SPacket';
import { SignUpRequestC2SPacket } from './packets/c2s/SignUpRequestC2SPacket';
import { MemberDeleteC2SPacket } from './packets/c2s/memberDeleteC2SPacket';
import { ProfileRequestC2SPacket } from './packets/c2s/ProfileRequestC2SPacket';
import { MessageSendC2SPacket } from './packets/c2s/MessageSendC2SPacket';
import { MessageDeleteC2SPacket } from './packets/c2s/messageDeleteC2SPacket';
import { MessageRequestC2SPacket } from './packets/c2s/MessageRequestC2SPacket';
import { Packet } from './Packet';
import { SignUp } from './functions/SignUp';
import { SignIn } from './functions/SignIn';
import { memberDelete } from './functions/memberDelete';
import { profileReturn } from './functions/profileReturn';
import { messageDelete } from './functions/messageDelete';
import { messageSend } from './functions/messageSend';
import { messageReturn } from './functions/messageReturn';

//Socket.ioで……
const server = new WebSocket.Server({ port: 5001 })

server.on("connection", (ws) => {
    ws.on("message", (message) => {
		console.log(message)
		const rawPacket:Packet = new MessageSendC2SPacket("user","hogentyo")
		//テスト用
		// packet = JSON.parse(message.toString())a
		console.log(rawPacket)
		if("SignUpRequestC2SPacketType" in rawPacket){
			const packet = (rawPacket as SignUpRequestC2SPacket)
			console.log("Received: " + packet);
				if(SignUp(packet.userId,packet.userName,packet.passwordHash)){
					ws.send("SignUp execution!")
					console.log("SignUp error")
				} else {
					ws.send("SignUp error")
					console.log("SignUp error")
				};
		} else if("SignInRequestC2SPacketType" in rawPacket){
			const packet = (rawPacket as SignInRequestC2SPacket)
			console.log("Received: " + packet);
				if(SignIn(packet.userId,packet.passwordHash)){
					ws.send("Login execution!")
					console.log("Login execution!")
				} else {
					ws.send("Login error")
					console.log("Login error!")
				}
		} else if("MemberDeleteC2SPacketType" in rawPacket){
			const packet = (rawPacket as MemberDeleteC2SPacket)
			console.log("Received: " + packet);
				if(memberDelete(packet.userId,packet.passwordHash)){
					ws.send("MemberDelete execution!")
					console.log("MemberDelete execution!")
				} else {
					ws.send("MemberDelete error")
					console.log("MemberDelete error")
				}
		} else if("MessageSendC2SPacketType" in rawPacket){
			const packet = (rawPacket as MessageSendC2SPacket)
			console.log("Received: " + packet);
				if(messageSend(packet.userId,packet.message)){
					ws.send("MessageSend execution")
					console.log("MessageSend execution")
				} else {
					ws.send("MessageSend error")
					console.log("MessageSend error")
			}
		} else if("MessageDeleteC2SPacketType" in rawPacket){
			const packet = (rawPacket as MessageDeleteC2SPacket)
			console.log("Received: " + packet);
			if(messageDelete(packet.userId,packet.messageId)){
				ws.send("MessageDelete execution")
				console.log("MessageDelete execution")
			} else {
				ws.send("MessageDelete error")
				console.log("MessageDelete error")
			}
		} else if("MessageRequestC2SPacket" in rawPacket){
			const packet = (rawPacket as MessageRequestC2SPacket)
			console.log("Received: " + packet);
			if(messageReturn()){
				ws.send("messageReturn execution")
				console.log("messageReturn execution")
			} else {
				ws.send("messageReturn error")
				console.log("messageReturn error")
			}	
		} else if("ProfileRequestC2S" in rawPacket){
			const packet = (rawPacket as ProfileRequestC2SPacket)
			console.log("Received: " + packet);
			if(profileReturn()){
				ws.send("messageReturn execution")
				console.log("messageReturn execution")
			} else {
				ws.send("messageReturn error")
				console.log("messageReturn error")
			}	
		}
	});
	ws.on('close', () => {
        console.log('I lost a client');
    });
});
