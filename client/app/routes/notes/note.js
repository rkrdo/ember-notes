var NotesNoteRoute = Ember.Route.extend({
  model: function(note) {
    return this.store.find('note', note.note_id);
  }
});

export default NotesNoteRoute;
