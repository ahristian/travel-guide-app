import EmberRouter from '@ember/routing/router';
import config from 'travel-guide-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('traditions');
  this.route('foods');
  this.route('profile', { path: '/profile/:profile_id' }, function () {});
  this.route(
    'destinations',
    { path: '/destinations/:destination_id' },
    function () {}
  );
});
