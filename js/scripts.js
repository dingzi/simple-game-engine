var win = $(window);
var doc = $(document);
var isWebkit = 'WebkitAppearance' in document.documentElement.style;
(function() {
	
	if(!isWebkit) {
		return;
	}
	window.Audio = function() {
		var that = this;
		that.init = function() {
			return that;
		};
		that.play = function() {
			return that;
		};
		that.stop = function() {
			return that;
		};
		that.pause = function() {
			return that;
		};
		that.restart = function() {
			return that;
		};
	};
})();


(function() {
	var data = [
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-swimming.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-swimming.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-riding.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-dancing.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-airship.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-girl.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-girl-dancing.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/shark.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/speed-boy.png',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/speed-girl.png',

		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/bird-after.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/bird-before.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/bird-roar.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/bird-shy.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/coin-ring.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/gailun.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/game-end.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/get-into-water.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/handclap.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/motobike-go.mp3',
		'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/motobike-start.mp3'

	];
	if(isWebkit) {
		data = [
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-swimming.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-swimming.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-riding.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-dancing.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-airship.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-girl.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-girl-dancing.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/shark.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/speed-boy.png',
			'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/speed-girl.png',

		];
	}
	for(var i = data.length; i--; ) {
		new Image().src = data[i];
	}
})();



var util = new Util();
var engine = new Engine().init({
	fps: 60
}).start();



var roleBoy = new Role();
roleBoy.init({
	wrapper: '#role-boy',
	width: 135,
	height: 200,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy.png',
	isTheFirstFrameStatic: false,
	frameLen: 2,
	fps: 10
}).addState('swimming', {
	width: 148,
	height: 200,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-swimming.png',
	isTheFirstFrameStatic: false,
	frameSize: 200,
	frameLen: 2,
	fps: 8
}).addState('motobikeRiding', {
	width: 168,
	height: 195,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-riding.png',
	isTheFirstFrameStatic: false,
	frameSize: 195,
	frameLen: 1,
	fps: 1
}).addState('dancing', {
	width: 135,
	height: 200,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-dancing.png',
	isTheFirstFrameStatic: false,
	frameLen: 2,
	fps: 10,
	initDirection: 'right',
	isDirectionLocked: true
}).addState('airship', {
	width: 350,
	height: 202,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-boy-airship.png',
	isTheFirstFrameStatic: false,
	frameLen: 2,
	fps: 10,
	initDirection: 'right',
	isDirectionLocked: true
});

var roleGirl = new Role();
roleGirl.init({
	wrapper: '#role-girl',
	width: 135,
	height: 200,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-girl.png',
	isTheFirstFrameStatic: false,
	frameLen: 2,
	fps: 10
}).addState('dancing', {
	width: 135,
	height: 200,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/role-girl-dancing.png',
	isTheFirstFrameStatic: false,
	frameLen: 2,
	fps: 10,
	initDirection: 'right',
	isDirectionLocked: true
});

var roleShark = new Role();
roleShark.init({
	wrapper: '#role-shark',
	width: 500,
	height: 500,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/shark.png',
	isTheFirstFrameStatic: false,
	frameLen: 7,
	fps: 12
});


var speedBoy = new Role();
speedBoy.init({
	wrapper: '#role-speed-boy',
	width: 180,
	height: 150,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/speed-boy.png',
	isTheFirstFrameStatic: false,
	frameLen: 3,
	fps: 10
});

var speedGirl = new Role();
speedGirl.init({
	wrapper: '#role-speed-girl',
	width: 180,
	height: 150,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/speed-girl.png',
	isTheFirstFrameStatic: false,
	frameLen: 3,
	fps: 10
});


var roleGailun = new Role();
roleGailun.init({
	wrapper: '#role-gailun',
	width: 426,
	height: 200,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/gailun.png',
	isTheFirstFrameStatic: true,
	frameLen: 5,
	fps: 15
});

var roleBirdRiding = new Role();
roleBirdRiding.init({
	wrapper: '#role-bird-doing .state-riding',
	width: 620,
	height: 500,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/bird-riding-right.png',
	isTheFirstFrameStatic: true,
	frameLen: 5,
	fps: 10,
	isDirectionLocked: true
});

var roleBirdRunning = new Role();
roleBirdRunning.init({
	wrapper: '#role-bird-doing .state-running',
	width: 620,
	height: 500,
	spriteUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/role/bird-running-right.png',
	isTheFirstFrameStatic: true,
	frameLen: 5,
	fps: 10,
	isDirectionLocked: true
});


var Game = function() {
	var that = this;
	that._doCfg = function() {
		var that = this;
		var settings = {
			scenes: $('#layer-dynamic'),
			me: $('#role-boy'),
			winSize: {
				width: util.getWinSize().width,
				height: util.getWinSize().height
			},
			path: [
				[0, 0],
				[4890, 0],
				[5010, 700],
				[6730, 700],
				[6910, 0],
				[8920, 0],
				[8921, 0]
			],
			stepSize: 6,
			curCoord: [0, 0],
			curDist: 0,
			pathInfo: null,
			curPathInfo: null,
			shouldCancelMoving: false,
			shouldCancelManualMoving: false,
			curDirection: 'right',
			totalDist: -1,
			isViewportLocked: false,
			viewportLockDist: -1,
			activatedRoles: []
		};
		settings.me2 = settings.me[0];
		settings.scenes2 = settings.scenes[0];

		settings.pathInfo = util.calcPathInfo(settings.path);
		settings.curPathInfo = util.getCurPathInfo(0, settings.pathInfo);
		settings.totalDist = (function() {
			var ret = 0;
			var i = settings.pathInfo.length;
			for(; i--; ) {
				ret += settings.pathInfo[i].dist;
			}
			return ret;
		})();
		settings.viewportLockDist = settings.winSize.width / 2;
		that.settings = settings;
	};
};
Game.prototype = {
	constructor: Game,
	_setCoord: (function() {		
		var supportStyle = util.supportStyle;
		var ret = function(dom, x, y) {
			if(supportStyle('transform')) {
				if(typeof x !== 'undefined') {
					dom.css({
						'-webkit-transform': 'translateX(' + x + 'px,' + y + 'px)',
						'-moz-transform': 'translate(' + x + 'px,' + y + 'px)',
						'-ms-transform': 'translate(' + x + 'px,' + y + 'px)',
						'transform': 'translate(' + x + 'px,' + y + 'px)'
					});	
				}
				
			} else {
				dom.css({
					top: y + 'px',
					left: x + 'px'
				});
			}
		};
		
		return ret;
	})(),
	_winResize: function() {
		var that = this;
		var settings = that.settings;
		var fn = function() {
			$('#role-bird-doing').css({
				left: settings.viewportLockDist - 250
			});
			$('#role-girl').css({
				left: settings.viewportLockDist + 155
			});	
		};
		fn();
		win.bind({
			resize: function() {
				that.settings.winSize = {
					width: util.getWinSize().width,
					height: util.getWinSize().height
				};
				that.viewportLockDist = that.settings.winSize.width / 2;
				fn();
			}
		});
	},
	_registEvent: function() {
		var that = this;
		var settings = that.settings;
		var isKeyDownFnExecuted = false;
		var isMousewheelGoing = false;
		// 鼠标滚轮事件
		$('body').bind({
			mousewheel: function(ev, delta) {
				if(delta > 0) {
					doc.trigger('moveBack');
				} else {
					doc.trigger('moveForward');
				}
				isMousewheelGoing = true;
				setTimeout(function() {
					isMousewheelGoing = false;
					doc.trigger('stopMove');	
				}, 150);
			}
		});
		// 键盘事件
		doc.bind({
			'keydown': function(ev) {
				if(!isKeyDownFnExecuted) {
					if(ev.keyCode == 39) { // right键
						doc.trigger('moveForward');	
					} else if(ev.keyCode == 37) { // left键
						doc.trigger('moveBack');
					} else if(ev.keyCode == 32) { // 空格键
						doc.trigger('spaceDown');
					}
					isKeyDownFnExecuted = true;
				}
			},
			keyup: function(ev) {
				if(ev.keyCode == 39 || ev.keyCode ==  37) {
					doc.trigger('stopMove');
				}
				isKeyDownFnExecuted = false;
			}
		});
	},
	_bgParallax: function() {
		//return;
		var that = this;
		var settings = that.settings;
		var container = $('#layer-dynamic');
		var bgLayerFar = container.find('.layer-scene-far');
		var fn = function() {
			if(!settings.isViewportLocked) {
				return;
			}
			var curCoord = settings.curCoord;
			var targetX = (curCoord[0] - settings.viewportLockDist) * 0.15;
			that._setCoord(bgLayerFar, targetX, 0);
			// bgLayerFar.css({
			// 	left:  targetX
			// });
		};
		
		//return
		doc.bind({
			moveForward: function() {
				engine.removeTask('bgProspect').addTask('bgProspect', function() {
					fn();
				});
			},
			moveBack: function() {
				engine.removeTask('bgProspect').addTask('bgProspect', function() {
					fn();
				});
			},
			stopMove: function() {
				engine.removeTask('bgProspect');
			}
		});
	},
	// 查询
	_checkeLocation: function() {
		var that = this;
		var settings = that.settings;
		var locationCache = '';

		var getCurLocation = function(index) {
			if(index === 0) {
				return 'land1';
			} else if(index === 4) {
				return 'land2';
			} else if(index === 1 || index === 2 || index === 3) {
				return 'sea';
			} else if(index === 5){
				return 'air';
			}

		};
		locationCache = getCurLocation(settings.curPathInfo.index);

		var action = function(location) {
			if(location === 'land1') {
				roleBoy.changeState();
			} else if(location === 'land2') {
				roleBoy.changeState('motobikeRiding');
			} else if(location === 'sea') {
				roleBoy.changeState('swimming');
			}
		};
		action(settings.curPathInfo.index);

		var indexCache = settings.curPathInfo.index;
		var meDom = $('#role-boy');
		
		var action2 = function(lastIndex, curIndex) {
			var initBottom = parseInt(meDom.css('bottom'), 10);
			var targetBottom = initBottom;
			var isMusic = false;
			if(lastIndex === 0 && curIndex === 1 || lastIndex === 2 && curIndex === 3) {
				engine.addTask('getDownSea', function() {
					settings.shouldCancelManualMoving = true;
					that._move('right', 40);
					roleBoy.setDirection('right');

					if(!isMusic && lastIndex === 0) {
						var audio = new Audio().init({
							wrapperId: 'audio_scene',
							audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/get-into-water.mp3',
							loop: false
						}).play();
						isMusic = true;
					}
					if(lastIndex === 0) {
						meDom.css({
							bottom: 350
						});

					} else {
						meDom.css({
							bottom: 150
						});
					}
					
					if(settings.curPathInfo.index !== 1 && settings.curPathInfo.index !== 3) {
						settings.shouldCancelManualMoving = false;
						engine.removeTask('getDownSea');
					}
				});
			} else if(lastIndex === 2 && curIndex === 1 || lastIndex === 4 || curIndex === 3) {
				engine.addTask('getDownSea', function() {
					settings.shouldCancelManualMoving = true;
					that._move('left', 40);
					roleBoy.setDirection('left');
					if(!isMusic && lastIndex === 4) {
						var audio = new Audio().init({
							wrapperId: 'audio_scene',
							audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/get-into-water.mp3',
							loop: false
						}).play();
						isMusic = true;
					}
					if(lastIndex === 4) {
						meDom.css({
							bottom: 350
						});
					} else {
						meDom.css({
							bottom: 150
						});
					}

					if(settings.curPathInfo.index !== 1 && settings.curPathInfo.index !== 3) {
						settings.shouldCancelManualMoving = false;
						engine.removeTask('getDownSea')
					}
				});
			}


		};
		

		engine.addTask('checkState', function() {
			var curPathIndex = settings.curPathInfo.index;
			var curLocation = getCurLocation(curPathIndex);
			if(locationCache !== curLocation) {
				action(curLocation);

				locationCache = curLocation;
			}
			if(indexCache !== curPathIndex) {
				action2(indexCache, curPathIndex);
				indexCache = curPathIndex;
			}

			if(curPathIndex === 5) {
				settings.shouldCancelManualMoving === true;
				settings.shouldCancelMoving = true;
			}
		});
	},

	_handleAcitivatedRoles: function(operation, id, role) {
		var that = this;
		var settings = that.settings;
		var targetArr = settings.activatedRoles;

		if(operation === 'add') {
			targetArr.push([id, role]);
		} else if(operation === 'remove') {
			for(var i = targetArr.length; i--; ) {
				if(targetArr[i][0] === id) {
					targetArr.splice(i, 1);
					break;
				}
			}
		}
	},
	_setActivatedRoles: function(cfg) {
		var that = this;
		var settings = that.settings;
		var activatedRoles = settings.activatedRoles;
		var i = activatedRoles.length;
		var cur = null;
		for(; i--; ) {
			cur = activatedRoles[i][1];
			if(cfg.operation) {
				cur[cfg.operation]();
			}
			if(cfg.direction) {
				cur.setDirection(cfg.direction);
			}
		}
		
	},

	_setAction: function() {
		var that = this;
		var settings = that.settings;
		var activatedRoles = settings.activatedRoles;

		that._handleAcitivatedRoles('add', 'roleBoy', roleBoy);

		doc.bind('moveForward', function() {
			if(settings.shouldCancelManualMoving) {
				return;
			}
			that._setActivatedRoles({
				direction: 'right',
				operation: 'start'
			});
			engine.removeTask('movingon').addTask('movingon', function() {
				that._move('right');
				if(settings.shouldCancelManualMoving) {
					that._setActivatedRoles({
						operation: 'stop'
					});
				}
			});
		});
		doc.bind('moveBack', function() {
			if(settings.shouldCancelManualMoving) {
				return;
			}
			that._setActivatedRoles({
				direction: 'left',
				operation: 'start'
			});
			engine.removeTask('movingon').addTask('movingon', function() {
				that._move('left');
				if(settings.shouldCancelManualMoving) {
					that._setActivatedRoles({
						operation: 'stop'
					});
				}
			});
		});
		doc.bind('stopMove', function() {
			that._setActivatedRoles({
				operation: 'stop'
			});
			engine.removeTask('movingon');
		});
	},
	_move: function(direction, stepSize) {
		var that = this;
		var settings = that.settings;

		if(settings.shouldCancelMoving) {
			return;
		}
		var curDist = settings.curDist;
		var pathInfo = settings.pathInfo;
		stepSize = stepSize || settings.stepSize;

		var targetDist = direction === 'right' ? curDist + stepSize : curDist - stepSize;
		var curPathInfo = util.getCurPathInfo(targetDist, pathInfo);

		if(targetDist < 0) {
			//console.log('到开头了');
			targetDist = 0;
			curPathInfo = util.getCurPathInfo(targetDist, pathInfo);
		}
		if(targetDist > settings.totalDist) {
			//console.log('到结尾了');
			targetDist = settings.totalDist;
			curPathInfo = util.getCurPathInfo(targetDist, pathInfo);
		}

		var targetCoord = util.getCoordinate(curPathInfo.index, curPathInfo.dist, pathInfo, settings.path);

		settings.isViewportLocked = true;
		if(curDist < settings.viewportLockDist) {
			settings.isViewportLocked = false;
			//that._setCoord(settings.me, targetCoord[0], targetCoord[1]);
			settings.me.css({
				left: targetCoord[0]
			});
		} else if(curDist > settings.totalDist - settings.viewportLockDist) {
			var cur = parseInt(settings.me.css('left'), 10);
			if(direction === 'right') {
				settings.me.css({
					left: cur + settings.stepSize
				});
			} else {
				settings.me.css({
					left: cur - settings.stepSize
				});
			}
		} else {
			settings.isViewportLocked = true;
			// settings.scenes.css({
			// 	left: -targetCoord[0] + settings.viewportLockDist,
			// 	top: -targetCoord[1]
			// });
			// settings.scenes.css({
			// 	transform: 'translateX(' + (-targetCoord[0] + settings.viewportLockDist) + 'px)'
			// });

			that._setCoord(settings.scenes, -targetCoord[0] + settings.viewportLockDist, -targetCoord[1]);
		}

		settings.curDist = targetDist;
		settings.curCoord = targetCoord;
		settings.curPathInfo = curPathInfo;
	},
	_bindIncident: function() {
		var that= this;
		var settings = that.settings;

		var showSceneTip = function(selector) {
			var elem = $(selector);
			elem.addClass('tip-scene-show');
			return ;
		};
		var taskList = [
			// 场景tips
			[1230 - 400, 'sceneTipLol', function() {
				showSceneTip('#tip-scene-lol');
			}],
			[1682 - 400, 'sceneTipTga', function() {
				showSceneTip('#tip-scene-tga');
			}],
			[2092 - 400, 'sceneTipMh', function() {
				showSceneTip('#tip-scene-mh');
			}],
			[3197 - 400, 'sceneTipQqgame', function() {
				showSceneTip('#tip-scene-qqgame');
			}],
			[3612 - 400, 'sceneTipX5', function() {
				showSceneTip('#tip-scene-x5');
			}],
			[4002 - 400, 'sceneTipSanxiao', function() {
				showSceneTip('#tip-scene-sanxiao');
			}],
			[4392 - 400, 'sceneTipFifa', function() {
				showSceneTip('#tip-scene-fifa');
			}],
			[6622 - 400, 'sceneTipDnf', function() {
				showSceneTip('#tip-scene-dnf');
			}],
			[7002 - 400, 'sceneTipSpeed', function() {
				showSceneTip('#tip-scene-speed');
			}],
			[7422 - 400, 'sceneTipKupao', function() {
				showSceneTip('#tip-scene-kupao');
			}],
			[7912 - 400, 'sceneTipCf', function() {
				showSceneTip('#tip-scene-cf');
			}],
			[8542 - 400, 'sceneTipPlane', function() {
				showSceneTip('#tip-scene-plane');
			}],

			[1490, 'tv', function() {
				var audio = new Audio().init({
					wrapperId: 'audio_scene',
					audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/handclap.mp3',
					loop: false
				}).play();
			}],
			[4440, 'fifaHandclap', function() {
				var audio = new Audio().init({
					wrapperId: 'audio_scene',
					audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/handclap.mp3',
					loop: false
				}).play();
			}],

			// 盖伦开始
			[800, 'gailunStart', function() {
			 	roleGailun.start();
			 	var audio = new Audio().init({
					wrapperId: 'audio_scene',
					audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/gailun.mp3',
					loop: true
				}).play();
			 	setTimeout(function() {
			 		roleGailun.stop();
			 		audio.stop();
			 	}, 3000);
			}],

			// 遇到鸟
			[1790, 'meetBird', function() {
				settings.shouldCancelMoving = true;

				var audio = new Audio().init({
					wrapperId: 'audio_scene',
					audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/bird-before.mp3',
					loop: false
				}).play();

				var tip = $('#tip-key-rescue');

				var timer = 0;
				var curState = 0;
				var loop = setInterval(function() {
					timer++;
					if(timer >= 10) {
						clearInterval(loop);
						tip.css({
							visibility: 'visible'
						});
					}
					if(curState === 0) {
						tip.css({
							visibility: 'hidden'
						});	
						curState = 1;
					} else {
						tip.css({
							visibility: 'visible'
						});
						curState = 0;
					}
				}, 80);
				var isSpaceDownExcuted = false;
				doc.unbind('spaceDown').bind({
					spaceDown: function() {
						if(!isSpaceDownExcuted) {
							isSpaceDownExcuted = true;
							var audio = new Audio().init({
								wrapperId: 'audio_scene',
								audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/bird-after.mp3',
								loop: false
							}).play();
							var bird = $('#role-bird-static');
							tip.hide();
							var stateShy = bird.find('.shy');
							stateShy.fadeIn(1000, function() {
								settings.shouldCancelMoving = false;
							});
						}
					}
				});
			}],

			// 上鸟背
			[2200, 'getOnBird', function() {
				var birdStatic = $('#role-bird-static');
				var birdDoing = $('#role-bird-doing');
				birdDoing.find('.state-riding').show().siblings().hide();
				settings.me.hide();
				birdStatic.hide();
				that._handleAcitivatedRoles('add', 'roleBirdRiding', roleBirdRiding);
				roleBirdRiding.start();
			}],

			// 下鸟背
			[3000, 'getDownFromBird', function() {
				var birdDoing = $('#role-bird-doing');
				birdDoing.find('.state-running').show().siblings().hide();
				settings.shouldCancelMoving = true;
				settings.shouldCancelManualMoving = true;
				roleBoy.stop();
				roleBoy.settings.isLocked = true;

				var birdCurPositionLeft = settings.viewportLockDist;
				roleBirdRunning.start();
				birdDoing.animate({
					left: 2500
				}, 2000, 'linear', function() {
					settings.shouldCancelMoving = false;
					settings.shouldCancelManualMoving = false;
					roleBoy.settings.isLocked = false;
					birdDoing.hide();
					
					that._handleAcitivatedRoles('remove', 'roleBirdRunning', roleBirdRunning);
				});
				
				settings.me.show();
				$('#role-girl').show();
				that._handleAcitivatedRoles('add', 'roleGirl', roleGirl);
			}],

			// 跳舞
			[3780, 'startDance', function() {
				settings.shouldCancelMoving = true;
				var tip = $('#tip-key-dance');

				var timer = 0;
				var curState = 0;
				var loop = setInterval(function() {
					timer++;
					if(timer >= 10) {
						clearInterval(loop);
						tip.css({
							visibility: 'visible'
						});
					}
					if(curState === 0) {
						tip.css({
							visibility: 'hidden'
						});	
						curState = 1;
					} else {
						tip.css({
							visibility: 'visible'
						});
						curState = 0;
					}
				}, 80);

				var girlDom = $('#role-girl');
				var girlStaticDom = $('#role-girl-static');
				
				var isSpaceDownExcuted = false;
				doc.unbind('spaceDown').bind('spaceDown', function() {
					if(!isSpaceDownExcuted) {
						isSpaceDownExcuted = true;
						that._handleAcitivatedRoles('remove', 'roleGirl', roleGirl);
						settings.shouldCancelManualMoving = true;
						tip.hide();
						roleBoy.changeState('dancing').start();
						roleBoy.settings.isLocked = true;
						setTimeout(function() {
							roleGirl.changeState('dancing').start();
						}, 0);
						roleGirl.settings.isLocked = true;
						setTimeout(function() {
							settings.shouldCancelMoving = false;
							settings.shouldCancelManualMoving = false;
							roleBoy.settings.isLocked = false;
							roleBoy.stop().changeState();
							roleGirl.stop();
							roleBoy.settings.isDirectionLocked = false;
							girlDom.hide();
							girlStaticDom.show();
							
						}, 3000);
					}
				});
			}],

			// 遭遇鲨鱼
			[5410, 'meetShark', function() {
				settings.shouldCancelManualMoving = true;
				settings.shouldCancelMoving = true;
				var tip = $('#tip-key-shoot');

				(function() {
					var timer = 0;
					var curState = 0;
					var loop = setInterval(function() {
						timer++;
						if(timer >= 10) {
							clearInterval(loop);
							tip.css({
								visibility: 'visible'
							});
						}
						if(curState === 0) {
							tip.css({
								visibility: 'hidden'
							});	
							curState = 1;
						} else {
							tip.css({
								visibility: 'visible'
							});
							curState = 0;
						}
					}, 80);
				})();

				var sharkDom = $('#role-shark');
				var isSpaceDownExcuted = false
				doc.unbind('spaceDown').bind('spaceDown', function() {
					if(!isSpaceDownExcuted) {
						isSpaceDownExcuted = true;
						tip.hide();

						roleShark.start(1);
						sharkDom.animate({
							top:-73,
							left: 500
						}, parseInt(1000 / roleShark.settings.fps * 7, 10), function() {
							var timer = 0;
							var curState = 0;
							var loopShark = setInterval(function() {
								timer++;
								if(timer >= 10) {
									clearInterval(loopShark);
									sharkDom.css({
										visibility: 'visible'
									});
									sharkDom.fadeOut(1000);
								}
								if(curState === 0) {
									sharkDom.css({
										visibility: 'hidden'
									});	
									curState = 1;
								} else {
									sharkDom.css({
										visibility: 'visible'
									});
									curState = 0;
								}
							}, 50);
						});
						settings.shouldCancelManualMoving = false;
						settings.shouldCancelMoving = false;
					}
				});
			}],

			[6910, 'rideMotobike', function() {
				settings.shouldCancelMoving = true;
				var audio = new Audio().init({
					wrapperId: 'audio_scene',
					audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/motobike-start.mp3',
					loop: false
				}).play();
				var tip = $('#tip-key-motobike');

				var timer = 0;
				var curState = 0;
				var loop = setInterval(function() {
					timer++;
					if(timer >= 10) {
						clearInterval(loop);
						tip.css({
							visibility: 'visible'
						});
					}
					if(curState === 0) {
						tip.css({
							visibility: 'hidden'
						});	
						curState = 1;
					} else {
						tip.css({
							visibility: 'visible'
						});
						curState = 0;
					}
				}, 80);
				var isSpaceDownExcuted = false;
				doc.unbind('spaceDown').bind('spaceDown', function() {
					if(!isSpaceDownExcuted) {
						isSpaceDownExcuted = true;
						var audio = new Audio().init({
							wrapperId: 'audio_scene',
							audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/motobike-go.mp3',
							loop: false
						}).play();
						tip.hide();
						speedBoy.start(1);
						speedGirl.start(1, function() {
							settings.shouldCancelMoving = false;

						});
					}
				});
				
			}],

			[6920, 'getCoin', function() {
				var coins = $('#gold-coins');
				var basic = parseInt(coins.css('left'), 10);
				var coin = coins.find('.elem');
				var coinW = coin.outerWidth(true);
				var val = basic - coinW - 168;
				var diffPosition = parseInt($('#layer-dynamic .chapter-3').css('left'), 10);
				var coords = (function() {
					var ret = [];
					var i = 0;
					var len = coin.length;
					for(; i < len; i++) {
						val += coinW;
						ret.push(val);
					}
				
					return ret.sort(function(a, b) {return a - b});
				})();
				var len = coords.length;
				var startIndex = 0;
				var i = startIndex;
				var handle = function(curCoordX) {
					for(i = startIndex; i < len; i++) {
						if(coords[i] + diffPosition < curCoordX) {
							coin.eq(i).css({
								visibility: 'hidden'
							});
							startIndex = i;
							// var audio = new Audio().init({
							// 	wrapperId: 'audio_scene',
							// 	audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/coin-ring.mp3',
							// 	loop: false
							// }).play();
						}
					}
				};
				engine.addTask('getCoining', function() {
					handle(settings.curCoord[0]);
				});
				
			}],

			[8227, 'getDownMotobike', function() {
				$('#role-motobike').show();
				roleBoy.changeState();
			}],

			[8440, 'leave', function() {
				settings.shouldCancelManualMoving = true;
				settings.shouldCancelMoving = true;


				$('#role-airship').hide();
				var tip = $('#tip-key-airship');

				roleBoy.changeState('airship').start();
				roleBoy.settings.isLocked = true;
				roleBoy.settings.isDirectionLocked = true;

				var timer = 0;
				var curState = 0;
				var loop = setInterval(function() {
					timer++;
					if(timer >= 10) {
						clearInterval(loop);
						tip.css({
							visibility: 'visible'
						});
					}
					if(curState === 0) {
						tip.css({
							visibility: 'hidden'
						});	
						curState = 1;
					} else {
						tip.css({
							visibility: 'visible'
						});
						curState = 0;
					}
				}, 80);

				var isSpaceDownExcuted = false;
				doc.unbind('spaceDown').bind('spaceDown', function() {
					if(!isSpaceDownExcuted) {
						isSpaceDownExcuted = true;
						var meDom = $('#role-boy');
						var startPositionBottom = parseInt(meDom.css('bottom'), 10);
						var curWinHeight = win.height();
						var targetBottom = startPositionBottom;
						var audio = new Audio().init({
							wrapperId: 'audio_scene',
							audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/game-end.mp3',
							loop: false
						}).play();
						setTimeout(function() {
							engine.addTask('autoLeave', function() {
								targetBottom += 35;
								meDom.css({
									bottom: targetBottom
								});
								if(targetBottom > curWinHeight) {
									window.location.href = 'skycity.html'
								}
								tip.hide();
							});
						}, 1000);
					}
				});
				
			}]
		];

		// 快速排序
		var quickSort = function(arr) {
			if (arr.length <= 1) { return arr; }
			var pivotIndex = Math.floor(arr.length / 2);
		　　var pivot = arr.splice(pivotIndex, 1)[0];
		　　var left = [];
		　　var right = [];
		　　for (var i = 0; i < arr.length; i++){
		　　　　if (arr[i][0] < pivot[0]) {
		　　　　　　left.push(arr[i]);
		　　　　} else {
		　　　　　　right.push(arr[i]);
		　　　　}
		　　}
		　　return quickSort(left).concat([pivot], quickSort(right));
		};

		var sortedTaskList = quickSort(taskList);
		//var sortedTaskList = [];
		var sortedTaskListLen = sortedTaskList.length;
		var targetExecuteIndex = 0;
		
		engine.addTask('incidents', function() {
			if(targetExecuteIndex > sortedTaskListLen - 1) {
				engine.removeTask('incidents');
				return;
			}
			var curCoord = settings.curCoord;
			var cur = sortedTaskList[targetExecuteIndex];
			if(curCoord[0] > cur[0]) {
				cur[2]();
				targetExecuteIndex++;
			}			
		});
	},
	_paintCloud: function() {
		var that = this;
		var settings = that.settings;
		var container = $('#clouds');
		var range = {
			bottom: [500, 1000],
			left: [0, 8500],
			width: [50, 150]
		};
		var getRandom = function(range) {
			var ret = -1;
			ret = range[0] + Math.floor(Math.random() * (range[1] - range[0]) + 1);
			return ret;
		};
		var generateClouds = function(num) {
			var ret = '';
			var bottom;
			var left;
			var width;
			while(num--) {
				bottom = getRandom(range.bottom);
				left = getRandom(range.left);
				width = getRandom(range.width);
				ret += '<div class="cloud" style="bottom:' + bottom + 'px;left:' + left + 'px;width:' + width + 'px;"><img src="http://ossweb-img.qq.com/images/game/happy2014/v2/games/img/cloud.png" alt="" title="" /></div>';	
			}
			
			return ret;
		};
		var html = generateClouds(15);
		container.html(html);
	},
	_playBgMusic: function() {
		var that = this;
		var settings = that.settings;
		new Audio().init({
			wrapperId: 'audio_background',
			audioUrl: 'http://ossweb-img.qq.com/images/game/happy2014/v2/games/audio/background.mp3',
			loop: true
		}).play();
	},

	init: function() {
		var that = this;
		that._doCfg();
		that._winResize();
		that._registEvent();
		that._bgParallax();
		that._setAction();
		that._bindIncident();
		that._checkeLocation();
		that._paintCloud();
		that._playBgMusic();

		return that;
	}


};
var game = new Game().init();





/*  |xGv00|df23d78b07689cf5b760f569640de277 */