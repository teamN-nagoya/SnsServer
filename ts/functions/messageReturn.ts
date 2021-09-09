import ws from "ws";
import { getMessageDB } from "./FileFunction";
import { fullUserIdGet } from "./FileFunction";
import { fullMessageIdGet } from "./FileFunction";
import { MessageReturnS2CPacket } from "../packets/s2c/MessageReturnS2CPacket";

//受け取ったMessageRequestC2Sに記述のあるuseridをdbから取り出しurnS2CPacketに入れてReturn
export function messageReturn(userId:string){
	const db = getMessageDB()
	const obj = {
		userId:userId,
	}
	const messagelist:any = fullMessageIdGet(db,obj)
	if (messagelist.length){
		return messagelist
	}
	return false
}