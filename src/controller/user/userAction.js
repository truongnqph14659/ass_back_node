import userModel from '../../model/userModel'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { json } from 'express'
export const register = async (req, res) => {
  console.log(req.body)
  try {
    const exitEmail = await userModel.findOne({ email: req.body.email })
    if (exitEmail) {
      return res.status(401).json({ message: 'email already exit!' })
    }
    const userPass = new userModel()
    const passObj = userPass.encryptpass(req.body.password)
    if (passObj) {
      const User = await new userModel({
        password: passObj.passencode,
        salt: passObj.saltHex,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      }).save()
      res.status(200).json({
        message: 'Đăng ký thành công',
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
    console.log(user)
    const key = user.role == 1 ? process.env.KEYADMIN : process.env.KEYUSER
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email, role: user.role },
      key,
      {
        expiresIn: '1h',
      }
    )

    return res.status(200).json({
      token: token,
      id: user.id,
      name: user.name,
      role: user.role,
    })
  } catch (error) {
    res.status(404).json({
      message: 'đăng nhập thất bại!',
    })
  }
}
