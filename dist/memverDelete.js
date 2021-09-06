"use strict";
//余裕があったら実装できたらなユーザー削除機能
Object.defineProperty(exports, "__esModule", { value: true });
exports.memverDelete = void 0;
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
var FileFunction_4 = require("./FileFunction");
function memverDelete(userid, passwordhash) {
    //DB呼び出し＆デコード
    var db = (0, FileFunction_4.getAccountDB)();
    //accountdata.jsonに受け取ったobj追加	
    var obj = {
        userId: userid,
        passwordHash: passwordhash
    };
    //該当するuseridが登録されてるかチェック＆入力されたパスワードが正しければ削除
    if ((0, FileFunction_2.useridcheck)(db, obj)) {
        if ((0, FileFunction_3.useridget)(db, obj).passwordHash == obj.passwordHash) {
            //login成功
            for (var i = 0; i < Object.keys(db).length; i++) {
                if (db[i].userId == obj.userId) {
                    delete db[i];
                    var filterDB = db.filter(Boolean);
                    var senddb = JSON.stringify(filterDB, undefined, 1);
                    (0, FileFunction_1.accountWriteFileJson)(senddb);
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
exports.memverDelete = memverDelete;
