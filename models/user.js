const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
  college: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  notes: {
    type: String,
  },
  postingLink: {
    type: String,
  },
  status: {
    type: String,
    enum: ['interested', 'applied', 'interviewing', 'rejected', 'accepted'],
  }
})

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [applicationSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
