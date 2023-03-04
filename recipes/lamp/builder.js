'use strict';

// Modules
const _ = require('lodash');

/*
 * Build LOMP
 */
module.exports = {
  name: 'lomp',
  parent: '_lomp',
  config: {
    confSrc: __dirname,
    database: 'mariadb',
    php: '7.4',
    via: 'openlitespeed',
    webroot: '.',
    xdebug: false,
  },
  builder: (parent, config) => class LandoLomp extends parent {
    constructor(id, options = {}) {
      super(id, _.merge({}, config, options));
    };
  },
};
