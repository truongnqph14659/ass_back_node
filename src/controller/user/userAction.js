import userModel from '../../model/userModel'
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
export const signin = async (req, res) => {
  try {
    const data = req.body
    console.log(data)
  } catch (error) {}
}
