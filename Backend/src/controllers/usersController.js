const usersController = {};

usersController.getUsers = (req, res) => res.json({messages: []});

usersController.getUser = (req, res) => res.json({name: "NAME 1"});

usersController.deleteUser = (req, res) => res.json({message: "User deleted."});

usersController.modifyUser = (req, res) => res.json({message: "User modified."});

usersController.createUser = (req, res) => res.json({message: "User created."});

module.exports = usersController;