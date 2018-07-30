const conn = require('./connection');

const orm = {
    selectAll: function (tableInput, cb) {
        let queryString = 'SELECT * FROM ??';
        conn.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function (tableInput, colInput, userVal, cb) {
        let queryString = 'INSERT INTO ?? (??) VALUES (??)';
        conn.query(queryString, [tableInput, colInput, userVal], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (tableInput, colInput, condition, cb) {
        let queryString = 'UPDATE ?? SET ?? WHERE ??';
        conn.query(queryString, [tableInput, colInput, condition], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;