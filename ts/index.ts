import * as WebSocket from 'ws'
import { Express } from 'express-serve-static-core';
import { Packet } from './Packet/Packet';
import { LoginRequestC2SPacket } from './Packet/C2Spacket/LoginRequestC2SPacket';
import { memverRegistration } from './menberRegistration';
import { snsLogin } from './snsLogin';
import { memverDelete} from './memverDelete';
import http from "http";

//Socket.ioで……
const server = new WebSocket.Server({ port: 5001 })

server.on("connection", (ws) => {
    ws.on("message", (message) => {
	console.log(message)
	const packet = JSON.parse(message.toString())
	switch(packet.packetName){
		case "MemverRegistrationC2SPacket":
			console.log("Received: " + packet.packetName);
			if(memverRegistration(packet.userId,packet.passwordHash)){
				ws.send("MemverRegistration execution!")
				console.log("MemverRegistration error")
			}
			else{
				ws.send("MemverRegistration error")
				console.log("MemverRegistration error")
			};
			break;

		case "LoginRegistrationC2SPacket":
			console.log("Received: " + packet.packetName);
			if(snsLogin(packet.userId,packet.passwordHash)){
				ws.send("Login execution!")
				console.log("Login execution!")
			}
			else{
				ws.send("Login error")
				console.log("Login error!")
			}
			break;
		case "menberEjectC2SPacket":
			console.log("Received: " + packet.packetName);
			
			if(memverDelete(packet.userId,packet.passwordHash)){
				ws.send("memberEject execution!")
				console.log("memberEject execution!")
			}
			else{
				ws.send("menberEject error")
				console.log("menberEject error")
			}


		case "SNSC2SPacket":
			console.log("Received: " + packet.packetName);


	}
	});
	ws.on('close', () => {
        console.log('I lost a client');
    	});
});
