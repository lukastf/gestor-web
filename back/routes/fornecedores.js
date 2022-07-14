const express = require('express');
const router = express.Router();
const Fornecedor = require('../principais/Fornecedor');
const getsSearch = require('./getsSearch');

const getPages = async (req, res) => {

  const getPages = await Fornecedor.getPages(req.params);
  res.status(200).send(getPages);
}

const get = async (req, res) => {

  const get = await Fornecedor.get(req.params);
  res.status(200).send(get);
}

router.get('/:idAllow/:itensPage' + getsSearch("s i e1 e2 e3 e4 e5"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s i e1 e2 e3 e4 e5"), async (req, res) => { await get(req, res); });

router.get('/:idAllow/:itensPage' + getsSearch("s i e1 e2 e3 e4"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s i e1 e2 e3 e4"), async (req, res) => { await get(req, res); });

router.get('/:idAllow/:itensPage' + getsSearch("s i e1 e2 e3"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s i e1 e2 e3"), async (req, res) => { await get(req, res); });

router.get('/:idAllow/:itensPage' + getsSearch("s i e1 e2"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s i e1 e2"), async (req, res) => { await get(req, res); });

router.get('/:idAllow/:itensPage' + getsSearch("s i e1"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s i e1"), async (req, res) => { await get(req, res); });

router.get('/:idAllow/:itensPage' + getsSearch("s i"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s i"), async (req, res) => { await get(req, res); });

router.get('/:idAllow/:itensPage' + getsSearch("s"), async (req, res) => { await getPages(req, res); });
router.get('/:idAllow/:itensPage/pageId/:pageId'+ getsSearch("s"), async (req, res) => { await get(req, res); });

router.post('/:idAllow', async (req, res, next) => {

  const fornecedor = new Fornecedor(req.body, req.params);
  const post = await fornecedor.post();

  if (post) res.sendStatus(200);
  else res.sendStatus(400);

});

router.put('/:idAllow', async (req, res, next) => {

  const fornecedor = new Fornecedor(req.body, req.params);
  const put = await fornecedor.put();

  if (put) res.sendStatus(200);
  else res.sendStatus(400);

});

router.delete('/:idAllow/:_id', async (req, res, next) => {

  const fornecedor = new Fornecedor(req.params, req.params);
  const del = await fornecedor.delete();

  if (del) res.sendStatus(200);
  else res.sendStatus(400);

});

module.exports = router;
