var mongoose = require('mongoose');
var User = require('../models/user');

mongoose.connect('mongodb://localhost/ryde');


    const users = [
      {
        name: 'Sean Cesmat',
        email: 'sean.cesmat@gmail.com',
        password: 'blahblah',
        address: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        seedId:1
      },
      {
        name: 'Another User',
        email: 'anotheruser@gmail.com',
        password: 'blahblah',
        address: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        seedId:2
      },
      {
        name: 'Brett',
        email: 'brettuser@gmail.com',
        password: 'blahblah',
        address: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        seedId:3
      },
      {
        name: 'brant',
        email: 'brantuser@gmail.com',
        password: 'blahblah',
        address: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        seedId:4
      },
      {
        name: 'Scott',
        email: 'scottuser@gmail.com',
        password: 'blahblah',
        address: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        seedId:5
      }

    ];


    for(let user of users){
      var newUser = new User(user);
      newUser.save();
    }
