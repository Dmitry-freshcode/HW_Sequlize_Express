const { Site , Product, Category , SiteCategory} = require('./../db/models');
// const AppErrors = require('./../utils/applicationErrors');
async function addSite(req,res,next) {
    try{
        const newSite = await Site.create(req.body,{returning:false});
        if (newSite){
            const userData = newSite.get();
            return res.status(201).send(userData);
        }
        next();

    } catch (e) {next(e);}
}

async function updateSiteByPk(req,res,next) {
    try{
        const [RowsCount, Rows] = await Site.update(req.body,{
            returning:false,
            where: {
                id: req.params.siteId,
            },
        });

        if(RowsCount){
            const foundSite = await Site.findByPk(req.params.siteId,{});
            return res.send(foundSite);
        }
        next();
    }catch(e){ next(e);}
}

async function getSiteByPk(req,res,next) {
    try{
        const foundSite = await Site.findByPk(req.params.siteId,{
            returning:false
        });
        if(foundSite) {
            return res.send(foundSite);
        }
        next();
    }catch(e){ next(e);}
}

async function deleteSiteByPk(req,res,next) {
    try{
        const deletedRowsCount = await Site.destroy({
            returning:false,
            where: { id: req.params.siteId }
        } );
        if(deletedRowsCount) {
            return res.send(`site with id=${req.params.siteId} was deleted`)
        }
        next();
    }catch(e){ next(e);}
}
module.exports = {addSite, updateSiteByPk,getSiteByPk,deleteSiteByPk};

