const express = require('express');
const router = express.Router();

const Usuario = require('../principais/Usuario');

const getsSearch = require('./getsSearch');

const getPages = async (req, res) => {

  const getPages = await Usuario.getPages(req.params);
  res.status(200).send(getPages);
}

const get = async (req, res) => {

  const get = await Usuario.get(req.params);
  res.status(200).send(get);
}

//fodaSe = [];

/*
for (let i = 0; i < 7; i++) {

  fodaSe.push('/:idAllow/:itensPage' + getsSearch(i));
  fodaSe.push('/:idAllow/:itensPage/:pageId'+ getsSearch(i));

  router.get('/:idAllow/:itensPage' + getsSearch(i), async (req, res) => { await getPages(req, res); });
  router.get('/:idAllow/:itensPage/:pageId'+ getsSearch(i), async (req, res) => { await get(req, res); });

  for (let j = 0; j < 7; j++) {

    fodaSe.push('/:idAllow/:itensPage' + getsSearch(i));
  fodaSe.push('/:idAllow/:itensPage/:pageId'+ getsSearch(i));

    router.get('/:idAllow/:itensPage' + getsSearch(i) + getsSearch(j), async (req, res) => { await getPages(req, res); });
    router.get('/:idAllow/:itensPage/:pageId'+ getsSearch(i) + getsSearch(j), async (req, res) => { await get(req, res); });
  }

}*/

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

//console.log(fodaSe);

/*router.get('/:idAllow/:itensPage' + getPages(''), async (req, res) => { getPages(req, res); });
router.get('/:idAllow/:itensPage/:pageId'+ getPages(''), async (req, res) => { get(req, res); });

router.get('/:idAllow/:itensPage' + getPages('s'), async (req, res) => { getPages(req, res); });
router.get('/:idAllow/:itensPage/:pageId'+ getPages('s'), async (req, res) => { get(req, res); });

router.get('/:idAllow/:itensPage' + getPages('i'), async (req, res) => { getPages(req, res); });
router.get('/:idAllow/:itensPage/:pageId'+ getPages('i'), async (req, res) => { get(req, res); });

router.get('/:idAllow/:itensPage' + getPages(''), async (req, res) => { getPages(req, res); });
router.get('/:idAllow/:itensPage/:pageId'+ getPages(''), async (req, res) => { get(req, res); });*/

router.post('/:idAllow', async (req, res, next) => {

  const usuarios = new Usuario(req.body, req.params);
  const post = await usuarios.post();

  if (post) res.sendStatus(200);
  else res.sendStatus(400);
  
});

router.put('/:idAllow', async (req, res, next) => {

  const usuarios = new Usuario(req.body, req.params);
  const put = await usuarios.put();

  if (put) res.sendStatus(200);
  else res.sendStatus(400);

});

router.delete('/:idAllow/:_id', async (req, res, next) => {

  const usuarios = new Usuario(req.params, req.params);
  const del = await usuarios.delete();

  if (del) res.sendStatus(200);
  else res.sendStatus(400);
  
});

module.exports = router;
