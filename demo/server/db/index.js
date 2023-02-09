let mysql = require('mysql')

let db = mysql.createPool({
    host: 'localhost',     //数据库IP地址
    user: 'root',          //数据库登录账号
    password: '3006',      //数据库登录密码
    database: 'bishe'       //要操作的数据库
})

module.exports = db
