'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('bible-text-picker')
      .service('myService')
      .getWelcomeMessage();
  },
});
