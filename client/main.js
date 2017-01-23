import angular from 'angular';
import angularMeteor from 'angular-meteor';
import dynastyDraft from '../imports/components/dynastyDraft/dynastyDraft';
import '../imports/startup/accounts-config.js';

angular.module('dynasty-draft', [
  angularMeteor,
  dynastyDraft.name,
  'accounts.ui'
]);