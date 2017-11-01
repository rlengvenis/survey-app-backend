import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import Promise from 'bluebird';


Promise.promisifyAll(bcrypt);

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String
});

userSchema.pre('save', async function(next) {
  try {
    const salt = await bcrypt.genSaltAsync(10);
    const hash = await bcrypt.hashAsync(this.password, salt, null);

    this.password = hash;
    next();

  } catch (err) {
    next(err)
  }
});

userSchema.methods.comparePasswords = function (candidatePassword) {
  return bcrypt.compareAsync(candidatePassword, this.password);
};


export default mongoose.model('User', userSchema);
