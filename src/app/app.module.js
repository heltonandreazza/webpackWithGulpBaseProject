import '../assets/sass/style.scss';
import core from './core/core.module';
import common from './common/common.module';
import processes from './modules/processes/processes.module';

function requireAll(r) { r.keys().forEach(r); };

requireAll(require.context('ng-cache!./', true, /\.html$/));

angular
  .module('app', [
    core,
    common,
    processes
  ])