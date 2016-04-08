var PouchDB = require('pouchdb');

var db = new PouchDB('test');

db.allDocs({include_docs:true,attachments:true}).then(function (result) {
  console.log(result);
}).catch(function (error) {
  console.log(error);
});


db.get('1460151078416').then(function (resp) {
  console.log(resp);
}).catch(function (err) {
  console.log(err);
});