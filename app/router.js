'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // vue-router
  const fn = controller.home.index;
  router.get('/', fn);
  router.get('/about', fn);
  router.get('/search', fn);

  router.get('/in_theaters', fn);
  router.get('/coming_soon', fn);
  router.get('/top250', fn);
  router.get('/us_box', fn);

  router.get('/subject/:id', fn);
  router.get('/celebrity/:id', fn);
};
