const router     = require('express').Router();
const controller = require('./controller');
const views      = require('./viewsController');
// slamsRouter knows by default to look in index.js



  router.get('/', controller.index);










  module.exports = router;
