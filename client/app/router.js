var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('notes', { path: '/' }, function() {
    this.route('note', { path: '/note/:note_id' });
  });
});

export default Router;
