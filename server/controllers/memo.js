let Memo = require('../models/memo')

module.exports = {
    create: function(req, res) {
        Memo.create({
                title: req.body.title,
                memo: req.body.memo
            },
            function(err, data) {
                if (err) {
                    res.send(err)
                } else {
                    res.send(data)
                }
            })
    },
    views: function(req, res) {
        Memo.find({},
            function(err, data) {
                if (err) {
                    res.send(err)
                } else {
                    res.send(data)
                }
            })
    },
    view(req, res) {
        Memo.findOne({
                _id: req.params.id
            },
            function(err, data) {
                if (err) {
                    res.send(err)
                } else {
                    res.send(data)
                }
            })
    },
    update(req, res) {
        Memo.findOne({
                _id: req.params.id
            },
            function(err, data) {
                if (err) {
                    res.send(err)
                } else {
                  console.log(data);
                    data.title = req.body.title || data.title,
                    data.memo = req.body.memo || data.memo
                    data.save(function(err, data) {
                        if (err) {
                            res.status(500).send(err)
                        } else {
                            res.send('update success');
                        }
                    });
                }
            })
    },
    delete(req,res){
      Memo.findOneAndRemove(req.params.id
        ,function(err,succ){
          if (err) {
            res.send(err)
          } else {
            res.send('data deleted')
          }
        })
    }
}
