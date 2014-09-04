import Ember from 'ember';

var Router = Ember.Router.extend({
  location: NotesENV.locationType
});

Router.map(function() {
  this.resource('notes', { path: '/' }, function() {
    this.route('note', { path: '/note/:note_id' });
  });
});

export default Router;
