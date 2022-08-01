import userModel from '../../model/userModel'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { json } from 'express'
export const register = async (req, res) => {
  try {
    const exitEmail = await userModel.findOne({ email: req.body.email })
    if (exitEmail) {
      return res.status(401).json('email already exit!')
    }
    const userPass = new userModel()
    const passObj = userPass.encryptpass(req.body.password)
    if (passObj) {
      const User = await new userModel({
        password: passObj.passencode,
        salt: passObj.saltHex,
        name: req.body.name,
        email: req.body.email,
      }).save()
      res.status(200).json({
        user: {
          email: User.email,
          name: User.name,
          message: 'Đăng ký thành công',
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
export const signin = async (req, res, next) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    })
    if (!user)
      return res.status(404).json({
        message: 'không tìm thấy tài khoản',
      })
    const passObj = new userModel()
    const encode = passObj.authenticate(req.body.password, user.salt)
    if (!(user.password === encode)) {
      return res.status(400).json({
        message: 'mật khẩu bạn nhập không chính xác!',
      })
    }
    const key = user.role == 1 ? process.env.KEYADMIN : process.env.KEYUSER
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email, role: user.role },
      key,
      {
        expiresIn: '2p',
      }
    )
    if (user.role == 0) {
      return res.status(200).json({
        token: token,
        id: user.id,
        name: user.name,
        role: user.role,
      })
    }
    user.password = undefined
    user.token = token
    req.admin = user
    next()
  } catch (error) {
    res.status(404).json({
      message: 'đăng nhập thất bại!',
    })
  }
}
