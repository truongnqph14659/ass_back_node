const { expressjwt: expressJwt } = require('express-jwt')
import 'dotenv/config'
export const requireSignin = expressJwt({
  algorithms: ['HS256'],
  secret: process.env.KEYADMIN,
  requestProperty: 'auth', // req.auth
})

export const checkJwt = async (req, res) => {
  if (req.auth.role == req.admin.role) {
    return res.status(200).json({
      name: req.admin.name,
      role: req.admin.role,
      token: req.admin.token,
    })
  }
  res.status(404).json({
    messege: 'không thể truy cập vào trang dasboard',
  })
}
