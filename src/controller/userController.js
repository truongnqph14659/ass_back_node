import userModel from '../model/userModel'
import 'dotenv/config'
export const signup = async (req, res) => {
  try {
    const existEmail = await userModel.findOne({ email: req.body.email }).exec()
    if (existEmail) {
      return res.status(400).json({
        message: 'Email đã tồn tại',
      })
    }
    const kity = new userModel()
    const pass = kity.encrytPassword(req.body.password)
    if (pass) {
      const User = await new userModel({
        password: pass.codeHex,
        salt: pass.randomSalt,
        name: req.body.name,
        email: req.body.email,
      }).save()
      res.status(200).json({
        user: {
          email: User.email,
          name: User.name,
        },
      })
    }
  } catch (error) {
    res.status(400).json({
      message: 'Dang ky khong thanh cong',
      error,
    })
  }
}
export const signin = async (req, res) => {
  try {
    const User = await userModel.findOne({ email: req.body.email }).exec()
    if (!User) {
      return res.status(400).json({
        message: 'Email không tồn tại',
      })
    }

    const UserAuth = new userModel()
    const test = UserAuth.authenticate(req.body.password, User.salt)
    if (!(test === User.password)) {
      return res.status(400).json({
        message: 'Sai mat khau khong co quyen truy cap',
      })
    }
    const token = jwt.sign(
      { name: User.name, email: User.email },
      process.env.admin,
      {
        expiresIn: 60 * 60 * 60,
      }
    )
    return res.status(200).json({
      token,
      user: {
        email: User.email,
        message: 'dang nhap thanh thong',
      },
    })
  } catch (error) {
    res.status(404).json('loi roi')
  }
}
