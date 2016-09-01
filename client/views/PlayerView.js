// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events : {
    'ended': function() {
      this.model.ended();
      $('#bitdance').hide();
    },
    'play': function() {
      $('#bitdance').show();
    },
    'pause': function() {
      $('#bitdance').hide();
    }
  },

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;
    // hide the dance gif if there is no song
    if (this.model === '') {
      $('#bitdance').hide();
    }
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});