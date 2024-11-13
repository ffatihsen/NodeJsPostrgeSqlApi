const express = require('express');
const db = require('./models');

const routes = require("./routes"); // Tüm rotaları içe aktarıyoruz

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));




// Tek bir çağrı ile tüm rotaları dahil ediyoruz
app.use("/api", routes);



db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server is running on port 3000'));
});
