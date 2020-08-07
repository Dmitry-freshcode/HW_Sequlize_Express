const express = require('express');
const {addSite, updateSiteByPk, deleteSiteByPk, getSiteByPk}  = require('./../controllers/site');
// const createValidationMW = require( "./../middlewares/validation/createValidationMW");
// const schemas = require('./../utils/validation');
// const checkPermission = require('./../middlewares/permission/chekPermission');
// const { ACTION, ENTITY } = require("./../constrains");
const siteRouter = express.Router();
// const checkUserP = checkPermission(ENTITY.USER);

siteRouter.post('/',addSite);
siteRouter.patch('/:siteId',updateSiteByPk);
siteRouter.get('/:siteId',getSiteByPk);
siteRouter.delete('/:siteId',deleteSiteByPk);
module.exports = siteRouter;