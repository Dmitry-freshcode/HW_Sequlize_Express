"use strict";
const router = require('./routes');
// const cors = require('cors');
// const ErrorHandler = require('./middlewares/errorHandlers');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
// app.use(cors());
app.use(express.json());
app.use(router);
// app.use(ErrorHandler.applicationError);
// app.use(ErrorHandler.validationError);
// app.use(ErrorHandler.sequelizeError);
// app.use((err,req,res)=>{
//     res.status(500).send('Internal Server Error');
// })
app.listen(port, () =>console.log(`Example app listening on port ${port}!`));

