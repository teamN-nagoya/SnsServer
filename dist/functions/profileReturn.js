"use strict";
//受け取ったprofileRequestC2Sに記述のあるuseridをdbから取り出しprofileReturnS2CPacketに入れてReturn
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileReturn = void 0;
var FileFunction_1 = require("./FileFunction");
function profileReturn(userId, myId) {
    var db = (0, FileFunction_1.getfollowsDB)();
    var db2 = (0, FileFunction_1.getAccountDB)();
    var obj = {
        followerId: userId,
        myId: myId
    };
    var obj2 = {
        userId: userId
    };
    var list = (0, FileFunction_1.followerIdGet)(db, obj);
    var nameList = (0, FileFunction_1.userIdGet)(db2, obj2);
    var followerlist = list["followId"];
    var userName = nameList["userName"];
    console.log(followerlist);
    for (var i = 0; i < Object.keys(followerlist).length; i++) {
        if (followerlist[i] == myId) {
            var obj3_1 = {
                userName: userName,
                boolean: true
            };
            return obj3_1;
        }
    }
    var obj3 = {
        userName: userName,
        boolean: false
    };
    return obj3;
}
exports.profileReturn = profileReturn;
