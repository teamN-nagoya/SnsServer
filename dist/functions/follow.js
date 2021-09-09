"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.follow = void 0;
var FileFunction_1 = require("./FileFunction");
function follow(folloUserId, myId) {
    var db = (0, FileFunction_1.getfollowsDB)();
    var obj = {
        followerId: folloUserId,
        followId: myId
    };
    var list = (0, FileFunction_1.followerIdGet)(db, obj);
    var followerlist = list["followId"];
    followerlist.push(obj.followId);
    var followerObj = {
        followerId: folloUserId,
        followId: followerlist
    };
    for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].followerId == obj.followerId) {
            delete db[i];
            var filterDB = db.filter(Boolean);
            filterDB.push(followerObj);
            var sendDb = JSON.stringify(filterDB, undefined, 1);
            (0, FileFunction_1.followsWriteFileJson)(sendDb);
            return true;
        }
    }
    return true;
}
exports.follow = follow;
