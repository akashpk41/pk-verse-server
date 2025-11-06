const express = require("express");
require("dotenv").config()

// configure
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Is Running🔥 ${PORT} `);
});
