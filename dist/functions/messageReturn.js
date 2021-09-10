"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageReturn = void 0;
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
//受け取ったMessageRequestC2Sに記述のあるuseridをdbから取り出しurnS2CPacketに入れてReturn
function messageReturn(userId) {
    var db = (0, FileFunction_1.getMessageDB)();
    var db2 = (0, FileFunction_1.getAccountDB)();
    var obj = {
        userId: userId,
    };
    var userlist = (0, FileFunction_1.userIdGet)(db2, obj);
    var messagelist = (0, FileFunction_2.fullMessageIdGet)(db, obj);
    if (messagelist.length) {
        return messagelist;
    }
    return false;
}
exports.messageReturn = messageReturn;
