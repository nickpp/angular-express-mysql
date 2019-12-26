var express = require('express');
var router = express.Router({mergeParams: true});
var crud = require('../models/CRUD');
var messageError = {
    error: {
        code: '400',
        message: 'Invalid request - exemplo: ?t=nametable - more info in www.mycrosan.com.br'
    }
};


router.get('/', function (req, res, next) {
    //console.dir("id"+req.query.id)

    if (req.query.id) {
        crud.getById(req.query.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        crud.get(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
})



router.post('/', function (req, res, next) {
    //console.dir ("insert...")

   

    crud.insert(req.body, function (err, results) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({id: results.insertId, values: req.body});//or return count for 1 &amp;amp;amp; 0
        }
    });
});

router.delete('/', function (req, res, next) {
    //console.dir ("delete..."+req.query.id)

  
    crud.delete(req.query.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});

router.put('/', function (req, res, next) {
    //console.dir ("put...")

   

    crud.update(req.query.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;