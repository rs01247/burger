const conn = require('./connection');

function objToSql(ob) {
    let arr = [];
    for (let key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

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
        conn.query(queryString, [tableInput, colInput.toString(), userVal], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (tableInput, colInput, condition, cb) {
        let queryString = 'UPDATE ?? SET ?? WHERE ??';
        conn.query(queryString, [tableInput, objToSql(colInput), condition], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;