var NotesNoteController = Ember.ObjectController.extend({
  actions: {
    updateNote: function() {
      var content = this.get('content');
      console.log(content);
      if (content) { content.save(); }
    }
  }
});

export default NotesNoteController;
