const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require("../sequelize");

const login = async (req, res) => {
  try {
    const { Username, Password } = req.body;

    // Check if both username and password are provided
    if (!Username || !Password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // Find the user by username
    const user = await User.findOne({ where: { Username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(Password, user.Password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // If username and password are correct, generate a token
    const token = jwt.sign({ UserID: user.UserID }, 'hrms_secret_key', { expiresIn: '1h' });

    // Return the token to the employer
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).send(error.message);
  }
};

module.exports = {
  login,
};
