const express = require('express');
const router = express.Router();
const Tecnologia = require('../principais/Tecnologia');
const getsSearch = require('./getsSearch');

const getPages = async (req, res) => {

  const getPages = await Tecnologia.getPages(req.params);
  res.status(200).send(getPages);
}

const get = async (req, res) => {

  const get = await Tecnologia.get(req.params);
  res.status(200).send(get);
}

router.get('/:idAllow/:itensPage' + getsSearch("s"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s"), async (req, res) => { await get(req, res); });

router.post('/:idAllow', async (req, res, next) => {

  const tec = new Tecnologia(req.body, req.params);
  const post = await tec.post();

  if (post) res.sendStatus(200);
  else res.sendStatus(400);
  
});

router.put('/:idAllow', async (req, res, next) => {

  const tec = new Tecnologia(req.body, req.params);
  const put = await tec.put();

  if (put) res.sendStatus(200);
  else res.sendStatus(400);

});

router.delete('/:idAllow/:_id', async (req, res, next) => {

  const tec = new Tecnologia(req.params, req.params);
  const del = await tec.delete();

  if (del) res.sendStatus(200);
  else res.sendStatus(400);
  
});

module.exports = router;
