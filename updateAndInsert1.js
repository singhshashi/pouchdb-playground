var PouchDB = require('pouchdb');

var db = new PouchDB('test');


var person;

db.get('1460151078416').then(function (resp) {
  person = resp;
  console.log(person);
  person.email = 'shashi@mauryan.in';
  person.title = 'CEO';
  console.log(person);
  db.put(person).then(function (resp) {
    console.log(resp);
  }).catch(function (error) {
    console.log(error);
  });
}).catch(function (err) {
  console.log(err);
});