var db = require('../dbconnection'); //reference of dbconnection.js

var Crud = {
    get: function (callback) {
        return db.query("SELECT * FROM persons", callback);
    },
    getById: function (id, callback) {
        //console.dir("getid"+id)
        return db.query("SELECT * FROM persons WHERE id=?", [id], callback);
    },
    insert: function (values, callback) {
        return db.query("INSERT INTO persons SET ?", [values], callback);
    },
    delete: function (id, callback) {
        //console.dir("DELETE FROM persons WHERE id="+id)
        db.query("DELETE FROM persons WHERE id="+id);
        return db.query("SELECT * FROM persons", callback);

    },
    update: function (id, values, callback) {
        return db.query("UPDATE persons SET ? WHERE id=?", [values, id], callback);
    }
};
module.exports = Crud;