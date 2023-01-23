'use strict';

/**
 * fileinfo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fileinfo.fileinfo');
