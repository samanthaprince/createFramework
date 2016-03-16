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

  it('should test the GET routes and method', (done) => {
      notesRouter.routes.GET['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      expect(notesRouter.get).to.be.a('function');
      done();
  })

  it('should test the PUT routes and method', (done) => {
      notesRouter.routes.PUT['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      expect(notesRouter.put).to.be.a('function');
      done();
  })

  it('should test the POST routes and method', (done) => {
      notesRouter.routes.POST['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      expect(notesRouter.post).to.be.a('function');
      done();
  })

  it('should test the PATCH routes and method', (done) => {
      notesRouter.routes.PATCH['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      expect(notesRouter.patch).to.be.a('function');
      done();
  })

  it('should test the DELETE routes and method', (done) => {
      notesRouter.routes.DELETE['/notes'];
      expect(notesRouter.routes).to.be.an('object')
      expect(notesRouter.delete).to.be.a('function');
      done();
  })

})
