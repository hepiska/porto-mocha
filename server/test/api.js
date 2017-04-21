var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var mongoose = require('mongoose');
var Memo = require('../models/memo');
//console.log(server);
chai.use(chaiHttp);
describe('Memos',function(){
  beforeEach(function(done){
     var newMemo=new Memo({
        title:'lalala',
        memo:'lalals nasanehsneh'
     })
     newMemo.save(function(err,data) {
        if (err) {
          console.log('err',err);
           done();
        } else {

           done();
        }

     });
  })
  it('create memo',function(done){
      chai.
      request(server).
      post('/api/memo').
      send({
        title:'hai',
        memo:'halo halo'
      }).end(function(err,res){
        //console.log(res.body);
        res.should.have.status(200)
        res.body.should.have.property('memo')
        res.body.should.have.property('title')
        done()
      })
  })
  it('views memo',function(done){
      chai.
      request(server).
      get('/api/memo').
      send({

      }).end(function(err,res){
        console.log(res.body);
        res.should.have.status(200)
        res.body.should.be.an('array');
        res.body[0].should.have.property('title');
        res.body[0].should.have.property('memo');
        done()
      })
  })

  afterEach((done)=> {
    Item.collection.remove({})
    done()
  })

})
