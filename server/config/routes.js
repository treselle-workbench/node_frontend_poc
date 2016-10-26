/**
 * Dependencies.
 */
var requireDirectory = require('require-directory');

module.exports = function(server) {

    var controller = requireDirectory(module, '../controllers');
    // Array of routes for Hapi
    var routeTable = [{
        method: 'GET',
        path: '/',
        config: controller.base.index
    }, {
        method: 'GET',
        path: '/images/{path*}',
        config: controller.assets.images
    }, {
        method: 'GET',
        path: '/css/{path*}',
        config: controller.assets.css
    }, {
        method: 'GET',
        path: '/search',
        config: controller.base.search
    }, {
        method: 'GET',
        path: '/js/{path*}',
        config: controller.assets.js
    }, {
        method: 'GET',
        path: '/others',
        config: controller.base.others
    }, {
      method: 'GET',
      path: '/aap_api/{name}',
      config: controller.api.api
    }];

    return routeTable;
}
