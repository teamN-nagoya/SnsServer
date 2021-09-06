import * as WebSocket from 'ws'
import { Express } from 'express-serve-static-core';
import { Packet } from './Packet/Packet';
import { SignInC2SPacket } from './Packet/C2Spacket/SignInC2SPacket';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { memverDelete } from './memverDelete';
import { messageDelete } from './messageDelete';
import { messageSend } from './messageSend';

//Socket.ioで……
const server = new WebSocket.Server({ port: 5001 })

server.on("connection", (ws) => {
    ws.on("message", (message) => {
	console.log(message)
	const packet = JSON.parse(message.toString())
	switch(packet.packetName){
		case "SignUpC2SPacket":
			console.log("Received: " + packet.packetName);
			if(SignUp(packet.userId,packet.userName,packet.passwordHash)){
				ws.send("MemverRegistration execution!")
				console.log("MemverRegistration error")
			}
			else{
				ws.send("MemverRegistration error")
				console.log("MemverRegistration error")
			};
			break;

		case "SignInC2SPacket":
			console.log("Received: " + packet.packetName);
			if(SignIn(packet.userId,packet.passwordHash)){
				ws.send("Login execution!")
				console.log("Login execution!")
			}
			else{
				ws.send("Login error")
				console.log("Login error!")
			}
			break;
		case "MemberDeleteC2SPacket":
			console.log("Received: " + packet.packetName);
			
			if(memverDelete(packet.userId,packet.passwordHash)){
				ws.send("memberEject execution!")
				console.log("memberEject execution!")
			}
			else{
				ws.send("menberEject error")
				console.log("menberEject error")
			}
			break;


		case "MessageSendC2SPacket":
			console.log("Received: " + packet.packetName);
			if(messageSend(packet.userId,packet.message)){
				ws.send("messageSend execution")
				console.log("messageSend execution")
			}
			else{
				ws.send("messageSend error")
				console.log("messageSend error")
			}
			break;
		
		case "MessageDeleteC2SPacket":
			console.log("Received: " + packet.packetName);
			if(messageDelete(packet.requestUserId,packet.message)){
				ws.send("messageDelete execution")
				console.log("messageDelete execution")
			}
			else{
				ws.send("messageDelete error")
				console.log("messageDelete error")
			}
			break;

	}
	});
	ws.on('close', () => {
        console.log('I lost a client');
    	});
});
