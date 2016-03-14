'use strict';

var chai = require('chai');
var expect = chai.expect;

var SMRouter = require(__dirname + '/../router.js')
var notesRouter = new SMRouter();


describe('Test Router',() => {
  before(function () {
    notesRouter.get('/notes', (req,res) =>{})
    notesRouter.post('/notes', (req,res) =>{})
    notesRouter.put('/notes', (req,res) =>{})
    notesRouter.patch('/notes', (req,res) =>{})
    notesRouter.delete('/notes', (req,res) =>{})

  })

  it('should test the GET routes', (done) => {
      notesRouter.routes.GET['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      done();
  })

  it('should test the PUT routes', (done) => {
      notesRouter.routes.PUT['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      done();
  })

  it('should test the POST routes', (done) => {
      notesRouter.routes.POST['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      done();
  })

  it('should test the PATCH routes', (done) => {
      notesRouter.routes.PATCH['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      done();
  })

  it('should test the DELETE routes', (done) => {
      notesRouter.routes.DELETE['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      done();
  })

  it('should test that the GET method is a function', (done) => {
    expect(notesRouter.get).to.be.a('function');
    done();
  });


  it('should test that the POST method is a function', (done) => {
    expect(notesRouter.post).to.be.a('function');
    done();
  });

  it('should test that the PUT method is a function', (done) => {
    expect(notesRouter.put).to.be.a('function');
    done();
  });

  it('should test that the PATCH method is a function', (done) => {
    expect(notesRouter.patch).to.be.a('function');
    done();
  });

  it('should test that the DELETE method is a function', (done) => {
    expect(notesRouter.delete).to.be.a('function');
    done();
  });
})
