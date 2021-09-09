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
    var db2 = (0, FileFunction_1.getfollowsDB)();
    //accountData.jsonに受け取ったobj追加	
    var obj = {
        userId: userId,
        passwordHash: passwordHash
    };
    var obj2 = {
        followerId: userId,
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
                    for (var i_1 = 0; i_1 < Object.keys(db).length; i_1++) {
                        if (db2[i_1].followerId == obj2.followerId) {
                            delete db2[i_1];
                            var filterDB_1 = db2.filter(Boolean);
                            var sendDb_1 = JSON.stringify(filterDB_1, undefined, 1);
                            (0, FileFunction_1.followsWriteFileJson)(sendDb_1);
                            return true;
                        }
                    }
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
