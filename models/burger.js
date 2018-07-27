const orm = require('../config/orm');

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        })
    }
}

// SHOW ALL ITEMS IN BURGER TABLE
// orm.selectAll('burgers');

// orm.insertOne('burgers',)

module.exports = burger;    