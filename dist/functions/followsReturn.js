"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.followsReturn = void 0;
var FileFunction_1 = require("./FileFunction");
function followsReturn(userId) {
    var db = (0, FileFunction_1.getfollowsDB)();
    var obj = {
        followerId: userId
    };
    var list = [];
    var followsList = [];
    for (var i = 0; i < Object.keys(db).length; i++) {
        list = db[i];
        if (list["followId"].includes(obj.followerId)) {
            followsList.push(list["followerId"]);
        }
    }
    if (list.length) {
        return followsList;
    }
    else {
        return followsList;
    }
}
exports.followsReturn = followsReturn;
