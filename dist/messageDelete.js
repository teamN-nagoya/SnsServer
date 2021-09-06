"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageDelete = void 0;
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
function messageDelete(requestUserid, message) {
    //DBからmessageデータを取得
    var db = (0, FileFunction_2.getmessageDB)();
    //入力情報を参照
    var obj = {
        userId: requestUserid,
        message: message
    };
    console.log((0, FileFunction_3.useridget)(db, obj).userId);
    console.log(db.userId);
    console.log(obj.userId);
    //DBのmessageデータに取得してきたobjをpush
    if ((0, FileFunction_3.useridget)(db, obj).userId == obj.userId) {
        //login成功
        for (var i = 0; i < Object.keys(db).length; i++) {
            if (db[i].message == obj.message && db[i].userId == obj.userId) {
                delete db[i];
                var filterDB = db.filter(Boolean);
                var senddb_1 = JSON.stringify(filterDB, undefined, 1);
                (0, FileFunction_1.messageWriteFileJson)(senddb_1);
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
    var senddb = JSON.stringify(db, undefined, 1);
    (0, FileFunction_1.messageWriteFileJson)(senddb);
    return true;
}
exports.messageDelete = messageDelete;
