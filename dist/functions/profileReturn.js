"use strict";
//受け取ったprofileRequestC2Sに記述のあるuseridをdbから取り出しprofileReturnS2CPacketに入れてReturn
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileReturn = void 0;
var FileFunction_1 = require("./FileFunction");
function profileReturn(userId, myId) {
    var db = (0, FileFunction_1.getfollowsDB)();
    var obj = {
        followerId: userId,
        myId: myId
    };
    var list = (0, FileFunction_1.followerIdGet)(db, obj);
    var followerlist = list["followId"];
    var result = followerlist.filter(function (id) {
        return obj.followerId !== myId;
    });
    if (result.length) {
        return true;
    }
    else {
        return false;
    }
}
exports.profileReturn = profileReturn;
