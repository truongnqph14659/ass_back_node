import mongoose from 'mongoose'
import { createHmac, randomBytes } from 'crypto'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
  },
  salt: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
})
userSchema.methods = {
  encrytPassword: (password) => {
    const salt = randomBytes(10).toString('hex')
    console.log(salt)
    if (!password || !salt) return false
    return {
      codeHex: createHmac('sha256', salt).update(password).digest('hex'),
      randomSalt: salt,
    }
  },
  authenticate: (password, secretKey) => {
    if ((!password, !secretKey)) return false
    return createHmac('sha256', secretKey).update(password).digest('hex')
  },
}

export default mongoose.model('user', userSchema)
