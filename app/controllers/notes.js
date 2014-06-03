var NotesController = Ember.ArrayController.extend({
  newNoteName: null,

  actions: {
    createNewNote: function() {
      var content = this.get('content');
      var newNoteName = this.get('newNoteName');
      var unique = newNoteName != null && newNoteName.length > 1;

      content.forEach(function(note) {
        if(newNoteName === note.get('name')) {
          unique = false;
          return;
        }
      });

      if (unique) {
        var newNote = this.store.createRecord('note');
        newNote.set('id', newNoteName);
        newNote.set('name', newNoteName);
        newNote.save();
        this.set('newNoteName', null);
      } else {
        alert('Note must have a unique name of at least 2 characters');
      }
    }
  }

});

export default NotesController;
