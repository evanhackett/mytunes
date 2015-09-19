// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function(model) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(model) {
      console.log(this);
       if (this.at(0) === model) {
        var wasFirst = true;
       }
      this.remove(model);
      if (wasFirst) {
        this.playFirst();
      }

    }, this);

  },

  playFirst: function() {
    if (this.length > 0) {
      this.at(0).play();
    }
  },


});