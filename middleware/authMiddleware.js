const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
  // Başlıkta token'i al
  const token = req.headers['authorization']?.split(' ')[1]; // 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    // Token doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // decoded içindeki kullanıcı bilgilerini isteğe ekle
    next();               // doğrulama başarılı ise devam et
  } catch (err) {
    res.status(403).json({ error: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
