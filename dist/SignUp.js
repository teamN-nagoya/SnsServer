"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = void 0;
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
function SignUp(userId, userName, passwordHash) {
    //DB呼び出し＆デコード
    var db = (0, FileFunction_3.getAccountDB)();
    //DBに受け取ったobj追加	
    var obj = {
        userId: userId,
        userName: userName,
        passwordHash: passwordHash
    };
    console.log(obj);
    //新規のユーザーidだったらaccountdata.jsonに追加
    if (!((0, FileFunction_2.userIdCheck)(db, obj))) {
        db.push(obj);
        var sendDb = JSON.stringify(db, null, 1);
        (0, FileFunction_1.accountWriteFileJson)(sendDb);
        return true;
    }
    else {
        return false;
    }
}
exports.SignUp = SignUp;
