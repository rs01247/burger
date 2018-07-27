const conn = require('./connection');

const orm = {
    selectAll: function (tableInput, cb) {
        let queryString = 'SELECT * FROM ??';
        conn.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function (tableInput, colInput, userVal) {
        let queryString = 'INSERT INTO ?? (??) VALUES (??)';
        conn.query(queryString, [tableInput, colInput, userVal], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function () {
        let queryString;
    }
};

module.exports = orm;