"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeLine = void 0;
var FileFunction_1 = require("./FileFunction");
function timeLine(myId) {
    var db = (0, FileFunction_1.getfollowsDB)();
    var obj = {
        followerId: myId
    };
    var list = (0, FileFunction_1.followerIdGet)(db, obj);
    var followIdlist = list["followId"];
    return followIdlist;
}
exports.timeLine = timeLine;
