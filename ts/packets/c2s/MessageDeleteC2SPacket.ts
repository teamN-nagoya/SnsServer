import { C2SPacket } from "../C2SPacket";

export class MessageDeleteC2SPacket extends C2SPacket {
    readonly MessageDeleteC2SPacketType:null = null;
    userId: string;
    messageId: string;
    passwordHash: string;

    constructor(userId:string,messageId:string,passwordHash:string) {
        super()
        this.userId = userId
        this.messageId = messageId
        this.passwordHash = passwordHash
    }
}