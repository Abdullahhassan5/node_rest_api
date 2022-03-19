const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
app.use(express.json());
var employees = require('./routes/routes')

app.use('/user',employees)

//local host server
  const port = process.env.Port||3000;
  app.listen(3000,()=>console.log(`listenig to port ${port}`));