const userModel1 = require('../models/userModel;
const createUser = (req,res) => {
  const newUser = req.body;
  res.send('usuario ${newUser.name} criado com sucesso');
};
module.exports = {createUser};
