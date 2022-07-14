const express = require('express');
const router = express.Router();
const TipoDocumento = require('../auxiliares/TipoDocumento');
const getsSearch = require('./getsSearch');

const getPages = async (req, res) => {

  const getPages = await TipoDocumento.getPages(req.params);
  res.status(200).send(getPages);
}

const get = async (req, res) => {

  const get = await TipoDocumento.get(req.params);
  res.status(200).send(get);
}

router.get('/:idAllow/:itensPage' + getsSearch("s"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s"), async (req, res) => { await get(req, res); });

router.post('/:idAllow', async (req, res, next) => {

  const tipoDocumento = new TipoDocumento(req.body, req.params);
  const post = await tipoDocumento.post();

  if (post) res.sendStatus(200);
  else res.sendStatus(400);

});

router.put('/:idAllow', async (req, res, next) => {

  const tipoDocumento = new TipoDocumento(req.body, req.params);
  const put = await tipoDocumento.put();

  if (put) res.sendStatus(200);
  else res.sendStatus(400);

});

router.delete('/:idAllow/:_id', async (req, res, next) => {

  const tipoDocumento = new TipoDocumento(req.params, req.params);
  const del = await tipoDocumento.delete();

  if (del) res.sendStatus(200);
  else res.sendStatus(400);

});

module.exports = router;