var PouchDB = require('pouchdb');

var db = new PouchDB('test');

db.info().then(function(info){
  console.log(info);
});

//No ES6 here..
function Person(name,age,gender,weight,height) {
  this._id = (Date.now()+age).toString();
  this.name = name;
  this.age = age;
  this.height = height;
  this.gender = gender;
  this.weight = weight;
}

var shashi = new Person('Shashi', 32, 'M', 87, 183);

db.put(shashi).then(function (resp) {
  console.log(resp);
}).catch(function (err) {
  console.log(err);
});
