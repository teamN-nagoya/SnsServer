"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = void 0;
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
function SignUp(userId, userName, passwordHash) {
    //DB呼び出し＆デコード
    var db = (0, FileFunction_3.getAccountDB)();
    var db2 = (0, FileFunction_1.getfollowsDB)();
    //DBに受け取ったobj追加	
    var obj = {
        userId: userId,
        userName: userName,
        passwordHash: passwordHash
    };
    var followslist = {
        followerId: userId,
        followId: []
    };
    //新規のユーザーidだったらaccountdata.jsonに追加
    if (!((0, FileFunction_2.userIdCheck)(db, obj))) {
        db.push(obj);
        db2.push(followslist);
        var sendDb1 = JSON.stringify(db, null, 1);
        var sendDb2 = JSON.stringify(db2, null, 1);
        (0, FileFunction_1.accountWriteFileJson)(sendDb1);
        (0, FileFunction_1.followsWriteFileJson)(sendDb2);
        return true;
    }
    else {
        return false;
    }
}
exports.SignUp = SignUp;
