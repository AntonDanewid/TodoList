var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todos: { type: [String], default: [] }
});

userSchema.methods.generateHash = function (password) {
  console.log("generating password");
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}


userSchema.pre('save', function (next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified('password')) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds,
      function (err, hashedPassword) {
        if (err) {
          console.log("There was an error in hashing the password");
          next(err);
        }
        else {
          document.password = hashedPassword;
          next();
        }
      });
  } else {
    next();
  }
});

const User = mongoose.model('User', userSchema);



module.exports = User; 