"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unfollow = void 0;
var FileFunction_1 = require("./FileFunction");
function Unfollow(folloUserId, myId) {
    var db = (0, FileFunction_1.getfollowsDB)();
    var obj = {
        followerId: folloUserId,
        followId: myId
    };
    var list = (0, FileFunction_1.followerIdGet)(db, obj);
    var followerlist = list["followId"];
    var result = followerlist.filter(function (id) {
        return obj.followId !== id;
    });
    var followerObj = {
        followerId: folloUserId,
        followId: result
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
exports.Unfollow = Unfollow;
