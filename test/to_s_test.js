// Run 'mocha' at terminal

var assert = require("assert");

var to_s = require("./../to_s");

var body = "hello #{name}, I'm #{age} years old".to_s({name: "nobi",age: 23});

assert.equal("hello nobi, I'm 23 years old",body);

