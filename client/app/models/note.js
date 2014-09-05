var Note = DS.Model.extend({
  name: DS.attr('string'),
  value: DS.attr('string'),
  introduction: function() {
    var intro = "";
    if(this.get('value')) {
      intro = this.get('value').substring(0, 20);
    }
    return intro;
  }.property('value')
});

export default Note;
