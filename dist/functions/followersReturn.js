"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.followersReturn = void 0;
var FileFunction_1 = require("./FileFunction");
function followersReturn(userId) {
    var db = (0, FileFunction_1.getfollowsDB)();
    var obj = {
        followerId: userId
    };
    var list = (0, FileFunction_1.followerIdGet)(db, obj);
    var followerList = list["followId"];
    if (list.length) {
        return followerList;
    }
    else {
        return followerList;
    }
}
exports.followersReturn = followersReturn;
