const express = require('express');
const app = express();

app.use(express.json()); 

const customerRoutes = require('./Routes/customerRoutes/customerRoutes');

app.use('/', customerRoutes);

app.listen(5500, () => {
  console.log('Server running on port 5500');
});
