(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];

	for(var i = 0, len = vendors.length; i < len && !window.requestAnimationFrame; i++) {
		window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] ||        // webkit中此
									  window[vendors[i] + 'CancelRequestAnimationFrame'];
	}
	if(!window.requestAnimationFrame || !window.cancelAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var curTime = new Date().getTime();
			var timeToCall = Math.max(0, 16.7 - (curTime - lastTime));
			var id = window.setTimeout(function() {
				callback(curTime + timeToCall);
			}, timeToCall);
			lastTime = curTime + timeToCall;
			return id;
		};
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
})();

var Animation = function(cfg) {
	var that = this;
	var settings = {
		fps: cfg.fps || 60,
		isAnimationFrameCanceled: false,
		duration: -1
	};
	settings.duration = 1000 / settings.fps;
	that.settings = settings;
};
Animation.prototype = {
	constructor: Animation,
	request: function(callback) {
		var that = this;
		var settings = that.settings;
		settings.isAnimationFrameCanceled = false;

		if(settings.fps === 0) {
			callback && callback();
			return;
		}

		var startTime = 0;
		var draw = function(timestamp) {
			if(settings.isAnimationFrameCanceled) {
				return;
			}

			var diff = timestamp - startTime;
			if(diff >= settings.duration) {
				callback && callback();
				startTime = timestamp;
			}
			requestAnimationFrame(draw);
		};
		requestAnimationFrame(draw);
	},
	cancel: function() {
		var that = this;
		var settings = that.settings;
		settings.isAnimationFrameCanceled = true;
	}
};