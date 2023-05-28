// controllers/UserController.js


let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  class UserController {
    // Controller methods
    static getUsers(req, res) {
      res.json({ users });
    }
  
    static getUser(req, res) {
      const userId = parseInt(req.params.id);
      const user = users.find((user) => user.id === userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ user });
    }
  
    static createUser(req, res) {
      const { name, email } = req.body;
      const newUser = { id: users.length + 1, name, email };
  
      users.push(newUser);
      res.status(201).json({ message: 'User created', user: newUser });
    }
  }
  
  module.exports = UserController;