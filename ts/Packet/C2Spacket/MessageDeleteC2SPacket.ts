import { C2SPacket } from "../C2SPacket";

export class MessageDeleteC2SPacket extends C2SPacket {
    readonly MessageDeleteC2SPacketType:null = null;
    userId: string;
    passwordHash: string;

    constructor(userId:string,passwordHash:string) {
        super()
        this.userId = userId
        this.passwordHash = passwordHash
    }
}