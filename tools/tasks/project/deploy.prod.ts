import * as fs from 'fs';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
import {APP_DEST} from '../../config';

const plugins = <any>gulpLoadPlugins();

export = () => {
  fs.writeFileSync(join(APP_DEST, 'CNAME'), 'cheese.euans.space');
  return gulp.src(join(APP_DEST, '**/*'))
    .pipe(plugins.ghPages());
}
