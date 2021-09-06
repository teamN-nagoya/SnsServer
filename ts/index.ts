import * as WebSocket from 'ws'
import { C2SPacket } from './Packet/C2SPacket';
import { SignInRequestC2SPacket } from './Packet/C2Spacket/SignInRequestC2SPacket';
import { SignUpRequestC2SPacket } from './Packet/C2Spacket/SignUpRequestC2SPacket';
import { MemberDeleteC2SPacket } from './Packet/C2Spacket/memberDeleteC2SPacket';
import { MessageSendC2SPacket } from './Packet/C2Spacket/messageSendC2SPacket';
import { MessageDeleteC2SPacket } from './Packet/C2Spacket/messageDeleteC2SPacket';
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
	const packet = new SignInRequestC2SPacket("user","pass")
	//テスト用
	// packet = JSON.parse(message.toString())a
	console.log(packet)
	if("SignUpRequestC2SPacketType" in packet){
		(packet as SignUpRequestC2SPacket).C2SPacketType
		console.log("Received: " + packet);
			if(SignUp(packet.userId,packet.userName,packet.passwordHash)){
				ws.send("MemverRegistration execution!")
				console.log("MemverRegistration error")
			}
			else{
				ws.send("MemverRegistration error")
				console.log("MemverRegistration error")
			};

	}
	else if("SignInRequestC2SPacketType" in packet){
		(packet as SignInRequestC2SPacket).C2SPacketType
		console.log("Received: " + packet);
			if(SignIn(packet.userId,packet.passwordHash)){
				ws.send("Login execution!")
				console.log("Login execution!")
			}
			else{
				ws.send("Login error")
				console.log("Login error!")
			}
	}
	else if("MemberDeleteC2SPacketType" in packet){
		(packet as MemberDeleteC2SPacket).C2SPacketType
		console.log("Received: " + packet);
			
				if(memverDelete(packet.userId,packet.passwordHash)){
					ws.send("memberEject execution!")
					console.log("memberEject execution!")
				}
				else{
					ws.send("menberEject error")
					console.log("menberEject error")
				}
	}
	else if("MessageSendC2SPacketType" in packet){
		(packet as MessageSendC2SPacket).C2SPacketType
		console.log("Received: " + packet);
			if(messageSend(packet.userId,packet.message)){
				ws.send("messageSend execution")
				console.log("messageSend execution")
			}
			else{
				ws.send("messageSend error")
				console.log("messageSend error")
			}
	} 
	else if("MessageDeleteC2SPacketType" in packet){
		(packet as MessageDeleteC2SPacket).C2SPacketType
				console.log("Received: " + packet);
				if(messageDelete(packet.requestUserId,packet.message)){
					ws.send("messageDelete execution")
					console.log("messageDelete execution")
				}
					else{
				ws.send("messageDelete error")
				console.log("messageDelete error")
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
	ws.on('close', () => {
        console.log('I lost a client');
    	});
});
