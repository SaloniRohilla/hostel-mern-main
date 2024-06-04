const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const Token = 'abcdefghijkl12345'

exports.generateToken = (userId, isAdmin) => {
  return jwt.sign({ userId, isAdmin }, Token, {
    expiresIn: '1h',
  })
}

exports.verifyToken = (token) => {
  return jwt.verify(token, Token)
}
