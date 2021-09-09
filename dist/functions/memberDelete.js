"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberDelete = void 0;
//memberDeleteと一緒にfollowsDataからも削除する記述を追加しろ水谷！！！！！！！！！
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
var FileFunction_4 = require("./FileFunction");
function memberDelete(userId, passwordHash) {
    //DB呼び出し＆デコード
    var db = (0, FileFunction_4.getAccountDB)();
    //accountData.jsonに受け取ったobj追加	
    var obj = {
        userId: userId,
        passwordHash: passwordHash
    };
    //該当するuserIdが登録されてるかチェック＆入力されたパスワードが正しければ削除
    if ((0, FileFunction_2.userIdCheck)(db, obj)) {
        if ((0, FileFunction_3.userIdGet)(db, obj).passwordHash == obj.passwordHash) {
            //login成功
            for (var i = 0; i < Object.keys(db).length; i++) {
                if (db[i].userId == obj.userId) {
                    delete db[i];
                    var filterDB = db.filter(Boolean);
                    var sendDb = JSON.stringify(filterDB, undefined, 1);
                    (0, FileFunction_1.accountWriteFileJson)(sendDb);
                    return true;
                }
            }
        }
        else {
            //login失敗
            return false;
        }
    }
    else {
        return false;
    }
    //入力されたパスワードが正しければ削除
}
exports.memberDelete = memberDelete;
