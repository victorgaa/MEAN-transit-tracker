const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, trim: true },
    role: { type: String, enum: ['commuter', 'admin'], default: 'commuter' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);