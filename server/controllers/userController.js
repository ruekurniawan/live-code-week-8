const User = require('../models/user')
const { compare } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')

class UserController {
  static register(req, res) {
    User
      .create({
        email: req.body.email,
        password: req.body.password
      })
      .then(newUser => {
        res.status(201).json({
          newUser,
          msg: `Success Register`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static login(req, res) {
    User
      .findOne({
        email: req.body.email
      })
      .then(user => { 
        if(user) {
          if(compare(req.body.password, user.password)) {
            let payload = {
               id: user._id
            }
            let token = sign(payload)
            res.status(200).json({
              access_token: token
            })
          } else {
            res.status(400).json({
              msg: `Invalid Password / Email`
            })
          }
        } else {
          res.status(400).json({
            msg: `Invalid Email / Password`
          })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = UserController