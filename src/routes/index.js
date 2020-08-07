const express = require('express');
const siteRouter = require('./site.router');

// const checkUserAuth = require("../middlewares/authorization/checkUserAuth");
//const errorheandler = require('./../middlewares/errorHeandler');
const router = express.Router();
// router.use(checkUserAuth);
router.use('/site',siteRouter);
// router.use('/task',taskRouter);
// router.use('/*',function (req,res,next) {
//     next(new AppErrors.NotFoundError());
//
// });
//router.use(errorheandler);
module.exports = router;