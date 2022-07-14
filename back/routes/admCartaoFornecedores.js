const express = require('express');
const router = express.Router();

const Adm = require('../principais/AdmCartaoFornecedor');

const getsSearch = require('./getsSearch');

const getPages = async (req, res) => {

  const getPages = await Adm.getPages(req.params);
  res.status(200).send(getPages);
}

const get = async (req, res) => {

  const get = await Adm.get(req.params);
  res.status(200).send(get);
}

router.get('/:idAllow/:itensPage' + getsSearch("s"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s"), async (req, res) => { await get(req, res); });

router.post('/:idAllow', (req, res, next) => {

  const adm = new Adm(req.body, req.params);

  if (adm.post()) res.sendStatus(200);
  else res.sendStatus(400);
  
});

router.put('/:idAllow', (req, res, next) => {

  const adm = new Adm(req.body, req.params);

  if (adm.put()) res.sendStatus(200);
  else res.sendStatus(400);

});

router.delete('/:idAllow/:_id', (req, res, next) => {

  const adm = new Adm(req.params, req.params);

  if (adm.delete()) res.sendStatus(200);
  else res.sendStatus(400);
  
});

module.exports = router;
