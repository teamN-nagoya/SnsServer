"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSend = void 0;
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
function messageSend(userid, message) {
    //DBからmessageデータを取得
    var db = (0, FileFunction_2.getmessageDB)();
    //入力情報を参照
    var obj = {
        userId: userid,
        message: message
    };
    //DBのmessageデータに取得してきたobjをpush
    db.push(obj);
    //pushしたものをDBに保存
    var senddb = JSON.stringify(db, undefined, 1);
    (0, FileFunction_1.messageWriteFileJson)(senddb);
    return true;
}
exports.messageSend = messageSend;
