const router     = require('express').Router();
const controller = require('./controller');
const views      = require('./viewsController');
// slamsRouter knows by default to look in index.js


  // GET / => index
  // GET /:id => show
  // POST / => create
  // PUT /:id => update
  // DELETE /:id => destroy


  router.get('/', controller.index);


  router.get('/:id', controller.show);

  router.get('')







  module.exports = router;
