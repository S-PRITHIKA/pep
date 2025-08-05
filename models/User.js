const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true  // Keep this to avoid duplicate usernames
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
  // ❌ Do NOT include email here if you're not using it
});

module.exports = mongoose.model('User', userSchema);
