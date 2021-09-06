"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUp = void 0;
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
function SignUp(userid, username, passwordhash) {
    //DB呼び出し＆デコード
    var db = (0, FileFunction_3.getAccountDB)();
    //DBに受け取ったobj追加	
    var obj = {
        userId: userid,
        userName: username,
        passwordHash: passwordhash
    };
    console.log(obj);
    //新規のユーザーidだったらaccountdata.jsonに追加
    if (!((0, FileFunction_2.useridcheck)(db, obj))) {
        db.push(obj);
        var senddb = JSON.stringify(db, null, 1);
        (0, FileFunction_1.accountWriteFileJson)(senddb);
        return true;
    }
    else {
        return false;
    }
}
exports.SignUp = SignUp;
