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

const getUsers = (req, res) => {
  return User.find({}, (err, users) => {
    if (err) {
      res.status(500).send({ message: "Error al obtener usuarios" });
    }
    return users;
  });
};

const getUserById = userId => {
  return User.findById(userId, (err, user) => {
    if (err) {
      res.status(500).send({ message: "Error al obtener el usuario" });
    }
    return user;
  });
};

const updateUser = async (userId, edit) => {
  return await User.findOne({_id: userId}, async (err, user) => {
    if (err) {
      res.status(500).send({ message: "Error al actualizar el usuario" });
    }
    user.name = edit;
    await user.save();
    return user
  });
};

const deleteUser = (userId) => {
  return User.findByIdAndDelete(userId, (err, userDeleted) => {
    if (err) {
      res.status(500).send({ message: "Error al eliminar el usuario" });
    }
    return userDeleted;
  });
};

module.exports = {
  saveUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
