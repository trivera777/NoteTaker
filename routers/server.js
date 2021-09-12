const express = require('express');
const path = require('path');

const app = express();
const POST = process.env.PORT || 3001;

//
app.use(express.urlencoded({ entended: true}));
app.use(express.json());

//HTML Routes
require('./API/apiroute');
require('./API/htmlrouter');

app.use(express.static('public'));

//listening at PORT 3001
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);