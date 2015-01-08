var Role = function() {
	var that = this;
	that._doCfg = function(cfg) {
		var that = this;
		var settings = {
			//frameDirection: 'top',
			// isSprite: true,

			wrapper: '#role-boy',
			width: -1,
			height: -1,
			spriteUrl: '',
			isTheFirstFrameStatic: true,
			frameLen: -1,
			fps: 0,
			initDirection: 'right',

			curFrameIndex: 0,
			RoleId: 'Role' + new Date().getTime() + Math.round(Math.random() * 10000),
			isRunning: false,
			isLocked: false,
			isDirectionLocked: false,
			curDirection: 'right',
			bgPosition: [0, 0],
			state: {}
		};
		$.extend(settings, cfg);
		settings.wrapper = $(settings.wrapper);
		settings.state['default'] = {
			width: settings.width,
			height: settings.height,
			spriteUrl: settings.spriteUrl,
			frameLen: settings.frameLen,
			fps: settings.fps,
			initDirection: settings.initDirection
		};

 		that.engine = engine;
		// that.engine = new Engine().init({
		// 	fps: 60
		//}).start();

		that.settings = settings;
		return that;
	};
};
Role.prototype = {
	constructor: Role,
	addState: function(id, cfg) {
		var that = this;
		var settings = that.settings;
		if(typeof cfg.isLocked === 'undefined') {
			cfg.isLocked = false;
		}
		if(typeof cfg.isDirectionLocked === 'undefined') {
			cfg.isDirectionLocked = false;
		}
		settings.state[id] = cfg;

		return that;
	},
	removeState: function(id) {
		var that = this;
		var settings = that.settings;
		for(var i in settings.state) {
			if(i === id) {
				delete settings.state[i]
				break;
			}
		}
		return that;
	},
	changeState: function(id) {
		var that = this;
		var settings = that.settings;
		id = id || 'default';
		that._resetCfg(settings.state[id]);
		return that;
	},
	_resetCfg: function(cfg) {
		var that = this;
		var settings = that.settings;
		$.extend(settings, cfg);
		that._initDom();
		return that;
	},
	setDirection: function(direction) {
		var that = this;
		var settings = that.settings;
		if(settings.isDirectionLocked) {
			// console && console.log && console.log('The current animation\'s direction is locked yet.');
			return that;
		}
		if(direction === settings.curDirection) {
			return that;
		}
		if(direction === 'left') {
			settings.bgPosition[0] = -settings.width + 'px';
			settings.curDirection = 'left';
		} else if(direction === 'right'){
			settings.bgPosition[0] = 0;
			settings.curDirection = 'right';
		} else {
			return that;
		}

		that._setBgPosition();
		return that;
		
	},
	_setBgPosition: function() {
		var that = this;
		var settings = that.settings;

		settings.wrapper.css({
			'background-position': settings.bgPosition[0] + ' ' + settings.bgPosition[1]
		});
	},
	_initDom: function() {
		var that = this;
		var settings = that.settings;
		
		settings.wrapper.css({
			width: settings.width,
			height: settings.height,
			overflow: 'hidden',
			'background-image': 'url(' + settings.spriteUrl + ')',
			'background-position': '0 0',
			'background-repeat': 'no-repeat'
		});
		that.setDirection(settings.initDirection);
	},
	_goto: function(frameIndex) {
		var that = this;
		var settings = that.settings;
		settings.bgPosition[1] = -settings.height * frameIndex + 'px';
		that._setBgPosition();
	},
	// 开始动画播放
	start: function(loopTimes, callback) {
		var that = this;
		var settings = that.settings;

		if(settings.isLocked) {
			// console && console.log && console.log('The current animation is locked yet.');
			return that;
		}

		if(settings.isRunning) {
			// console && console.log && console.log('The current animation is running yet.');
			return that;
		}

		if(settings.fps === 0 || settings.fps === 1) {
			// console && console.log && console.log('The current animation\'s fps = ' + settings.fps + '.');
			return that;
		}

		var loopedTimes = 0; // 记录当前已经完成动画的次数（比如3帧动画算一个集合）
		var timer = 0;
		var targetTimer = that.engine.settings.fps / settings.fps;
		var animationFirstFrameIndex = settings.isTheFirstFrameStatic ? 1 : 0;
		var action = function() {
			var targetFrameIndex = -1;
			if(settings.curFrameIndex === settings.frameLen - 1) {
				loopedTimes += 1;
				if(loopedTimes === loopTimes) {
					that.pause();
					callback && callback();
					return that;
				}
				targetFrameIndex = animationFirstFrameIndex;
			} else  {
				targetFrameIndex = settings.curFrameIndex + 1;
			}

			that._goto(targetFrameIndex);
			settings.curFrameIndex = targetFrameIndex;
		};

		action(); // 初始化先执行一次
		that.engine.addTask(settings.RoleId, function() {
			// if(settings.isLocked) {
			// 	that.stop();
			// }
			timer++;
			if(timer >= targetTimer) {
				action();
				timer = 0;
			}
		});

		settings.isRunning = true;
		return that;
	},
	// 暂停动画播放
	pause: function() {
		var that = this;
		var settings = that.settings;

		if(settings.isLocked) {
			// console && console.log && console.log('current animation is locked yet');
			return that;
		}

		that.engine.removeTask(settings.RoleId);

		settings.isRunning = false;
		return that;
	},
	// 停止动画播放，并初始化到默认帧
	stop: function() {
		var that = this;
		var settings = that.settings;
		that.pause();
		that._goto(0);

		return that;
	},
	// 初始化
	init: function(cfg) {
		var that = this;
		that._doCfg(cfg);
		that._initDom();

		return that;
	}
};
// var me = new Role();
// me.init({
// 	wrapper: '#role-boy',
// 	width: 135,
// 	height: 200,
// 	spriteUrl: 'img/role/role-boy.png',
// 	isTheFirstFrameStatic: false,
// 	frameLen: 2,
// 	fps: 10
// });

// var me = new Animation();
// me.init({
// 	wrapper: '#me',
// 	width: 142,
// 	height: 190,
// 	isSprite: true,
// 	spriteUrl: 'img/spr-me-right.png',
// 	isTheFirstFrameStatic: false,
// 	frameDirection: 'top',
// 	frameSize: 190,
// 	frameLen: 2,
// 	fps: 8
// });

