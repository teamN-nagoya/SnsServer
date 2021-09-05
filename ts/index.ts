import * as WebSocket from 'ws'
import { Packet } from './Packet/Packet';
import { LoginRequestC2SPacket } from './Packet/C2Spacket/LoginRequestC2SPacket';
import { memverRegistration } from './menberRegistration';
import { snsLogin } from './snsLogin';
//Socket.ioで……
const server = new WebSocket.Server({ port: 5001 })

server.on("connection", (ws) => {
    ws.on("message", (message) => {
	console.log(message)
	const packet = JSON.parse(message.toString())
	switch(packet.packetName){
		case "MemverRegistrationC2SPacket":
			console.log("Received: " + packet.packetName);
			console.log("Received: " + packet.userId);
			console.log("Received: " + packet.passwordHash);
			if(memverRegistration(packet.userId,packet.passwordHash)){
				ws.send("MemverRegistration execution!")
			}
			else{
				ws.send("MemverRegistration error")
			};
			break;

		case "LoginRegistrationC2SPacket":
			console.log("Received: " + packet.packetName);
			console.log("Received: " + packet.userId);
			console.log("Received: " + packet.passwordHash);
			if(snsLogin(packet.userId,packet.passwordHash)){
				ws.send("Login execution！")
			}
			else{
				ws.send("Login error")
			}
			break;
	}
	});
	ws.on('close', () => {
        console.log('I lost a client');
    	});
});
