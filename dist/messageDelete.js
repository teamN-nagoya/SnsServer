"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageDelete = void 0;
//バグあります　デバッグしろ水谷
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
function messageDelete(userId, messageId) {
    //DBからmessageデータを取得
    var db = (0, FileFunction_2.getMessageDB)();
    //入力情報を参照
    var obj = {
        userId: userId,
        messageId: messageId
    };
    //DBのmessageデータに取得してきたobjをpush
    if ((0, FileFunction_3.userIdGet)(db, obj).userId == obj.userId) {
        //login成功
        for (var i = 0; i < Object.keys(db).length; i++) {
            if (db[i].messageId == obj.messageId && db[i].userId == obj.userId) {
                delete db[i];
                var filterDB = db.filter(Boolean);
                var sendDb_1 = JSON.stringify(filterDB, undefined, 1);
                (0, FileFunction_1.messageWriteFileJson)(sendDb_1);
                return true;
            }
        }
    }
    else {
        //login失敗
        console.log("RequestされたUserIdとメッセージのUserIdが一致しません");
        return false;
    }
    //pushしたものをDBに保存
    var sendDb = JSON.stringify(db, undefined, 1);
    (0, FileFunction_1.messageWriteFileJson)(sendDb);
    return true;
}
exports.messageDelete = messageDelete;
