"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileEdit = void 0;
//プロフィール編集の機能を実装します　アカウントデータに保存するよ
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
function profileEdit(userId, newUserName) {
    //DB呼び出し＆デコード
    var db = (0, FileFunction_3.getAccountDB)();
    //accountData.jsonに受け取ったobj追加	
    var obj = {
        userId: userId,
        newUserName: newUserName
    };
    //該当するuserIdが登録されてるかチェック＆入力されたパスワードが正しければ削除
    if ((0, FileFunction_2.userIdCheck)(db, obj)) {
        for (var i = 0; i < Object.keys(db).length; i++) {
            if (db[i].userId == obj.userId) {
                var list = db[i];
                delete db[i];
                var filterDB = db.filter(Boolean);
                list.userName = newUserName;
                db.push(list);
                var sendDb = JSON.stringify(db, undefined, 1);
                (0, FileFunction_1.accountWriteFileJson)(sendDb);
                return true;
            }
        }
    }
    else {
        return false;
    }
    //入力されたパスワードが正しければ削除
}
exports.profileEdit = profileEdit;
