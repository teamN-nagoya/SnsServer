import * as WebSocket from 'ws'
import { Packet } from './Packet/Packet';
import { LoginRequestC2SPacket } from './Packet/C2Spacket/LoginRequestC2SPacket';
import { memverRegistration } from './menberRegistration';
import { snsLogin } from './snsLogin';

const server = new WebSocket.Server({ port: 5001 })


server.on("connection", (ws) => {
    ws.on("message", (message) => {
	console.log(message)
        const packet = JSON.parse(message.toString())
        switch(packet.packetName){
		case "MemverRegistrationC2SPacket":
			console.log("Received: " + packet.packetName);
			console.log("Received: " + packet.userid);
			console.log("Received: " + packet.passwordhash);
			memverRegistration(packet.userid,packet.passwordhash);
			break

		case "LoginRegistrationC2SPacket":
			console.log("Received: " + packet.packetName);
			console.log("Received: " + packet.userid);
			console.log("Received: " + packet.passwordhash);
			snsLogin(packet.userid,packet.passwordhash);
			break
	}
    });
});