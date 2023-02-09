let db = require('../db/index')

exports.all = (req, res) => {        //获取denlu表全部数据
    var sql = 'select * from info'
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
exports.get = (req, res) => {        //通过id查询数据
    var sql = 'select * from info where id = ?'    //？用于占位
    db.query(sql, [req.query.id], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.del = (req, res) => {        //通过id删除数据
    var sql = 'delete from denlu where id = ?'
    db.query(sql, [req.query.id], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send({
            status: 200,
            message: '删除成功'
        })
    })
}

exports.add = (req, res) => {        //向denlu表添加数据
    var sql = 'insert into denlu (id,name,address,tel) values (?,?,?,?)'
    db.query(sql, [req.query.id, req.query.name, req.query.address, req.query.tel], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send({
            status: 200,
            message: '添加成功'
        })
    })
}

exports.update = (req, res) => {        //通过id更新数据
    var sql = 'update denlu set name = ?, address = ?, tel = ? where id = ?'
    db.query(sql, [req.query.name, req.query.address, req.query.tel, req.query.id], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send({
            status: 200,
            message: '修改成功'
        })
    })
}




// let db = require('../db/index')

// exports.all = (req, res) => {        //获取denlu表全部数据
//     var sql = 'select * from denlu'
//     db.query(sql, (err, data) => {
//         if(err) {
//             return res.send('错误：' + err.message)
//         }
//         res.send(data)
//     })
// }
// exports.get = (req, res) => {        //通过id查询数据
//     var sql = 'select * from denlu where id = ?'    //？用于占位
//     db.query(sql, [req.query.id], (err, data) => {
//         if(err) {
//             return res.send('错误：' + err.message)
//         }
//         res.send(data)
//     })
// }

// exports.del = (req, res) => {        //通过id删除数据
//     var sql = 'delete from denlu where id = ?'
//     db.query(sql, [req.query.id], (err, data) => {
//         if(err) {
//             return res.send('错误：' + err.message)
//         }
//         res.send({
//             status: 200,
//             message: '删除成功'
//         })
//     })
// }

// exports.add = (req, res) => {        //向denlu表添加数据
//     var sql = 'insert into denlu (id,name,address,tel) values (?,?,?,?)'
//     db.query(sql, [req.query.id, req.query.name, req.query.address, req.query.tel], (err, data) => {
//         if(err) {
//             return res.send('错误：' + err.message)
//         }
//         res.send({
//             status: 200,
//             message: '添加成功'
//         })
//     })
// }

// exports.update = (req, res) => {        //通过id更新数据
//     var sql = 'update denlu set name = ?, address = ?, tel = ? where id = ?'
//     db.query(sql, [req.query.name, req.query.address, req.query.tel, req.query.id], (err, data) => {
//         if(err) {
//             return res.send('错误：' + err.message)
//         }
//         res.send({
//             status: 200,
//             message: '修改成功'
//         })
//     })
// }
