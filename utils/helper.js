const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const helpers = {
  // JWT token oluştur
  generateToken: (user) => {
    return jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
  },

  // Hata mesajını belirli bir formatta döndür
  errorResponse: (res, statusCode, message) => {
    return res.status(statusCode).json({
      error: true,
      message: message
    });
  },

  // Şifreyi şifrele
  hashPassword: async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  },

  // Şifreyi karşılaştır
  comparePassword: async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  },

  // Gerekli alanların varlığını kontrol et
  validateFields: (fields, reqBody) => {
    const missingFields = fields.filter(field => !reqBody[field]);
    return missingFields.length === 0
      ? null
      : `Missing fields: ${missingFields.join(', ')}`;
  }
};

module.exports = helpers;
