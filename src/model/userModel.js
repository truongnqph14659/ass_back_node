import mongoose from 'mongoose'
import { createHmac, randomBytes } from 'crypto'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
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
  encryptpass: (password) => {
    const salt = randomBytes(10).toString('hex')
    if (!password || !salt) return false
    return {
      saltHex: salt,
      passencode: createHmac('sha256', salt).update(password).digest('hex'),
    }
  },
  authenticate: (password, secretkey) => {
    if (!password || !secretkey) return false
    return createHmac('sha256', secretkey).update(password).digest('hex')
  },
}
export default mongoose.model('user', userSchema)
