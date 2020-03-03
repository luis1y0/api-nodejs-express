const User = require("../models/user");

const saveUser = user => {
  const newUser = new User(user);
  return newUser
    .save()
    .then(user => {
      return user;
    })
    .catch(err => {
      console.log(err);
    });
};
module.exports = {
  saveUser
};
