import {join} from 'path';
import {APP_DEST} from '../../config';

export = (callback: any) => {
  let swPrecache = require('sw-precache');

  swPrecache.write(join(APP_DEST, 'sw.js'), {
    staticFileGlobs: [join(APP_DEST, '**/*.{js,html,css,png,jpg,gif}')],
    stripPrefix: APP_DEST,
    navigateFallback: '/index.html'
  }, callback);
};
