var Engine = function() {
	var that = this;
	that._doCfg = function(cfg) {
		var that = this;
		var settings = {
			task: []
		};
		$.extend(settings, cfg);
		that.settings = settings;
		that.animation = new Animation({
			fps: settings.fps || 60
		});
	};
};
Engine.prototype = {
	constructor: Engine,
	init: function(cfg) {
		var that = this;
		that._doCfg(cfg);

		return that;
	},
	_handleTask: function(operation, targetArr, id, fn) {
		if(operation === 'add') {
			targetArr.push([id, fn]);
		} else if(operation === 'remove') {
			for(var i = targetArr.length; i--; ) {
				if(targetArr[i][0] === id) {
					targetArr.splice(i, 1);
					break;
				}
			}
		}
	},
	_run: function() {
		var that = this;
		var settings = that.settings;
		that.animation.request(function() {
			var task = settings.task;
			var i = 0;
			var len = task.length;
			for(; i < len; i++) {
				task[i] && task[i][1]();
			}
		});
	},
	addTask: function(id, fn) {
		var that = this;
		var settings = that.settings;
		that._handleTask('add', settings.task, id, fn);
		return that;
	},
	removeTask: function(id) {
		var that = this;
		var settings = that.settings;
		that._handleTask('remove', settings.task, id);
		return that;
	},
	start: function(cfg) {
		var that = this;
		that._run();

		return that;
	},
	stop: function(cfg) {
		var that = this;
		var settings = that.settings;
		that.animation.cancel();

		return that;
	}
};