import * as WebSocket from 'ws'
import { SignInRequestC2SPacket } from './packets/c2s/SignInRequestC2SPacket';
import { SignUpRequestC2SPacket } from './packets/c2s/SignUpRequestC2SPacket';
import { MemberDeleteC2SPacket } from './packets/c2s/memberDeleteC2SPacket';
import { MessageSendC2SPacket } from './packets/c2s/MessageSendC2SPacket';
import { MessageDeleteC2SPacket } from './packets/c2s/messageDeleteC2SPacket';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { memberDelete } from './memberDelete';
import { messageDelete } from './messageDelete';
import { messageSend } from './messageSend';
import { Packet } from './Packet';

//Socket.ioで……
const server = new WebSocket.Server({ port: 5001 })

server.on("connection", (ws) => {
    ws.on("message", (message) => {
		console.log(message)
		const rawPacket:Packet = new SignInRequestC2SPacket("user","pass")
		//テスト用
		// packet = JSON.parse(message.toString())a
		console.log(rawPacket)
		if("SignUpRequestC2SPacketType" in rawPacket){
			const packet = (rawPacket as SignUpRequestC2SPacket)
			console.log("Received: " + packet);
				if(SignUp(packet.userId,packet.userName,packet.passwordHash)){
					ws.send("MemberRegistration execution!")
					console.log("MemberRegistration error")
				} else {
					ws.send("MemberRegistration error")
					console.log("MemberRegistration error")
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
					ws.send("MemberEject execution!")
					console.log("MemberEject execution!")
				} else {
					ws.send("MemberEject error")
					console.log("MemberEject error")
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
			if(messageDelete(packet.userId,packet.message)){
				ws.send("MessageDelete execution")
				console.log("MessageDelete execution")
			} else {
				ws.send("MessageDelete error")
				console.log("MessageDelete error")
			}
		}
	});
	ws.on('close', () => {
        console.log('I lost a client');
    });
});
