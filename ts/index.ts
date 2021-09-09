import * as WebSocket from 'ws'
import { SignInRequestC2SPacket } from './packets/c2s/SignInRequestC2SPacket';
import { SignUpRequestC2SPacket } from './packets/c2s/SignUpRequestC2SPacket';
import { MemberDeleteC2SPacket } from './packets/c2s/memberDeleteC2SPacket';
import { ProfileEditC2SPacket } from './packets/c2s/ProfileEditC2SPacket';
import { ProfileRequestC2SPacket } from './packets/c2s/ProfileRequestC2SPacket';
import { MessageSendC2SPacket } from './packets/c2s/MessageSendC2SPacket';
import { MessageDeleteC2SPacket } from './packets/c2s/messageDeleteC2SPacket';
import { MessagesRequestC2SPacket } from './packets/c2s/MessageRequestsC2SPacket';
import { FollowC2SPacket } from './packets/c2s/FollowC2SPacket';
import { UnFollowC2SPacket } from './packets/c2s/UnFollowC2SPacket';
import { TimeLineRequestC2SPacket } from './packets/c2s/TimeLineRequestC2SPacket';
import { ProfileReturnS2CPacket } from './packets/s2c/ProfileReturnS2CPacket';
import { MessageReturnS2CPacket } from './packets/s2c/MessageReturnS2CPacket';
import { FollowersReturnS2CPacket } from './packets/s2c/FollowersReturnS2CPacket';
import { Packet } from './Packet';
import { SignUp } from './functions/SignUp';
import { SignIn } from './functions/SignIn';
import { memberDelete } from './functions/memberDelete';
import { profileReturn } from './functions/profileReturn';
import { messageDelete } from './functions/messageDelete';
import { messageSend } from './functions/messageSend';
import { messageReturn } from './functions/messageReturn';
import { follow } from './functions/follow';
import { Unfollow } from './functions/UnFollow';
import { profileEdit } from './functions/profileEdit';
import { timeLine } from './functions/Timeline';
//Socket.ioで……
const server = new WebSocket.Server({ port: 5001 })

server.on("connection", (ws) => {
    ws.on("message", (message) => {
		console.log(message)
		const rawPacket:Packet = new MemberDeleteC2SPacket("userid","pass")
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
		} else if("ProfileEditC2SPacketType" in rawPacket){
			const packet = (rawPacket as ProfileEditC2SPacket)
			console.log("Received: " + packet);
			if(profileEdit(packet.userId,packet.newUserName)){
				ws.send("Login execution!")
				console.log("Login execution!")
			} else {
				ws.send("Login error")
				console.log("Login error!")
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
		} else if("MessagesRequestC2SPacketType" in rawPacket){
			const packet = (rawPacket as MessagesRequestC2SPacket)
			console.log("Received: " + packet);
			const messagelist = messageReturn(packet.userId) 
			if(messagelist.length){
				for(let i = 0; i < Object.keys(messagelist).length; i++){
				ws.send(JSON.stringify(new MessageReturnS2CPacket(messagelist[i].userId,messagelist[i].messageId[i],messagelist[i].time,messagelist[i].message)));
				}
			} else {
				ws.send("MessageRequest error")
				console.log("MessageRequest error")
			}
		} else if("FollowC2SPacketType" in rawPacket){
			const packet = (rawPacket as FollowC2SPacket)
			console.log("Received: " + packet);
			if(follow(packet.followUserId,packet.myId)){
				ws.send("follow execution")
				console.log("follow execution")
			} else {
				ws.send("follow error")
				console.log("follow error")
			}
		} else if("UnFollowC2SPacketType" in rawPacket){
			const packet = (rawPacket as UnFollowC2SPacket)
			console.log("Received: " + packet);
			if(Unfollow(packet.followUserId,packet.myId)){
				ws.send("UnFollow execution")
				console.log("UnFollow execution")
			} else {
				ws.send("UnFollow error")
				console.log("UnFollow error")
			}
		} else if("ProfileRequestC2SPacketType" in rawPacket){
			const packet = (rawPacket as ProfileRequestC2SPacket)
			console.log("Received: " + packet);
			if(profileReturn(packet.userId,packet.myId)){
				ws.send(JSON.stringify(new ProfileReturnS2CPacket(packet.userId,true)));
				console.log("messageReturn execution")
			} else {
				ws.send(JSON.stringify(new ProfileReturnS2CPacket(packet.userId,false)));
				console.log("messageReturn execution")
			}
		}else if("TimeLineRequestC2SPacketType" in rawPacket){
			const packet = (rawPacket as TimeLineRequestC2SPacket)
			console.log("Received: " + packet);
			const followerlist = timeLine(packet.myId)
			if(followerlist.length){
				for(let i = 0; i < Object.keys(followerlist).length; i++){
				const messagelist = messageReturn(followerlist[i]) 
				for(let i = 0; i < Object.keys(messagelist).length; i++){
				ws.send(JSON.stringify(new MessageReturnS2CPacket(messagelist[i].userId,messagelist[i].messageId[i],messagelist[i].time,messagelist[i].message)));
				}	}
				ws.send("messageReturn execution")
				console.log("messageReturn execution")
			} else {
				ws.send("messageReturn error")
				console.log("messageReturn error")
			}	}	
	ws.on('close', () => {
        console.log('I lost a client');
    });
    });
});
