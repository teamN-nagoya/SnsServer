"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSend = void 0;
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var node_uuid_1 = __importDefault(require("node-uuid"));
function messageSend(userId, message) {
    //DBからmessageデータを取得
    var db = (0, FileFunction_2.getMessageDB)();
    var db2 = (0, FileFunction_1.getAccountDB)();
    var today = new Date();
    var time = today.getTime();
    var messageId = node_uuid_1.default.v4();
    var obj2 = {
        userId: userId
    };
    var userData = (0, FileFunction_1.userIdGet)(db2, obj2);
    var userName = userData["userName"];
    //入力情報を参照
    var obj = {
        userId: userId,
        userName: userName,
        messageId: messageId,
        time: time,
        message: message
    };
    //DBのmessageデータに取得してきたobjをpush
    db.push(obj);
    //pushしたものをDBに保存
    var sendDb = JSON.stringify(db, undefined, 1);
    (0, FileFunction_1.messageWriteFileJson)(sendDb);
    return messageId;
}
exports.messageSend = messageSend;
