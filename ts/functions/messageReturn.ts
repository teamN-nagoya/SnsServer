import ws from "ws";
import { getAccountDB, getMessageDB, userIdGet } from "./FileFunction";
import { fullUserIdGet } from "./FileFunction";
import { fullMessageIdGet } from "./FileFunction";
import { MessageReturnS2CPacket } from "../packets/s2c/MessageReturnS2CPacket";

//受け取ったMessageRequestC2Sに記述のあるuseridをdbから取り出しurnS2CPacketに入れてReturn
export function messageReturn(userId:string){
	const db = getMessageDB()
	const db2 = getAccountDB()
	const obj = {
		userId:userId,
	}
	const userlist = userIdGet(db2,obj);
	const messagelist:any = fullMessageIdGet(db,obj)
	if (messagelist.length){
		return messagelist
	}
	return false
}