let users = [];

exports.createUser = (req, res) => {
    const { username, password } = req.body;
    const newUser = { username, password };
    users.push(newUser);
    res.status(201).json(newUser);
};


exports.getAllUsers = (req, res) => {
    res.json(users);
};


exports.getUserByUsername = (req, res) => {
    const { username } = req.params;
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};


exports.updateUser = (req, res) => {
    const { username } = req.params;
    const { password } = req.body;
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users[userIndex].password = password;
    res.json(users[userIndex]);
};


exports.deleteUser = (req, res) => {
    const { username } = req.params;
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
};
