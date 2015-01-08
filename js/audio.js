var Audio = function() {
	var that = this;
	that._doCfg = function(cfg) {
		var settings = {
			wrapperId: '',
			audioUrl: '',
			uiWidth: 1,
			uiHeight: 1,
			autoplay: true,
			loop: false
		};
		$.extend(settings, cfg);

		settings.wrapper = $('#' + settings.wrapperId);
		that.settings = settings;
	};

};
Audio.prototype = {
	constructor: Audio,
	init: function(cfg) {
		var that = this;
		that._doCfg(cfg);
		return that;
	},
	_initDom: function() {
		var that = this;
		var settings = that.settings;
		insertSwfV2(settings.wrapperId, 'http://ossweb-img.qq.com/images/audio/audiotgv2.swf?v=' + Math.random(), settings.uiWidth, settings.uiHeight, {autoplay: settings.autoplay, loop: settings.loop, audio: settings.audioUrl}, {}, '10.0');
	},
	play: function(param) {
		var that = this;
		var settings = that.settings;
		that._initDom();
		
		
		return that;
	},
	stop: function() {
		var that = this;
		var settings = that.settings;
		settings.wrapper.html('');
		return that;
	},
	pause: function() {
		var that = this;
		var settings = that.settings;
		getSwfObj(settings.wrapperId).pauseAudio();
		return that;
	},
	replay: function() {
		var that = this;
		var settings = that.settings;
		that.stop();
		that.play();
		return that;
	}
};



