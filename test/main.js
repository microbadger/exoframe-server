/* eslint global-require: 0 */
import {waitForConfig} from '../src/config';

waitForConfig()
.then(() => {
  require('./login');
  require('./error');
  require('./docker-pull');
  require('./docker-build');
  require('./docker-images');
  require('./docker-deploy');
  require('./docker-services');
  require('./docker-stop');
  require('./docker-start');
  require('./docker-inspect');
  require('./docker-logs');
  require('./docker-remove');
  require('./docker-remove-image');
  require('./docker-clean');
});
