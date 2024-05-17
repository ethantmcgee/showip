const express = require("express");
const getIP = require("ipware")().get_ip;

// Set up the express app
const app = express();

// Return ip address
app.get("/", (req, res) => {
  var ipInfo = getIP(req);
  res.status(200).json(ipInfo);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
