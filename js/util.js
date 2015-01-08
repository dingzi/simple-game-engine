var Util = function() {};
Util.prototype = {
	constructor: Util,
	getWinSize: function() {
		return {
			width: win.width(),
			height: win.height()
		};
	},
	flashEffect: function(selector) {
		var dom = $(selector);
		var loop = setInterval(function() {
			timer++;
			if(timer >= 10) {
				clearInterval(loop);
				dom.css({
					visibility: 'visible'
				});
			}
			if(curState === 0) {
				dom.css({
					visibility: 'hidden'
				});	
				curState = 1;
			} else {
				dom.css({
					visibility: 'visible'
				});
				curState = 0;
			}
		}, 80);
	},
	// 计算向量
	calcVector: function(arr1, arr2) {
		var ret = [];
		var i = 0;
		var len = arr1.length;
		for(; i < len; i++) {
			ret.push(arr2[i] -  arr1[i]);
		}
		return ret;
	},
	// 计算目标path的向量、位移
	calcPathInfo: function(path) {
		var that = this;
		var ret = [];
		var temp = {};
		var i = 0;
		var len = path.length - 1;

		for(; i < len; i++) {
			temp.vector = this.calcVector(path[i], path[i + 1]);
			temp.dist = Math.round(Math.sqrt(Math.pow(temp.vector[0], 2) + Math.pow(temp.vector[1], 2)));
			ret.push(temp);
			temp = {};
		}
		return ret;
	},
	// 根据输入的距离，和pathInfo，计算当前所属路径的索引值，以及在该路径上的位移
	getCurPathInfo: function(dist, pathInfo) {
		var i = 0;
		var len = pathInfo.length;
		if(dist < 0) {
			return {
				index: -1,
				dist: -1
			};
		}
		for(; i < len; i++) {
			dist -= pathInfo[i].dist;
			if(dist <= 0) {
				return {
					index: i,
					dist: pathInfo[i].dist + dist
				};
			}
		}
		return {
			index: len,
			dist: -1
		};
	},
	getCoordinate: function(pathIndex, pathDist, pathInfo, path) {
		var ret = [];
		
		var curPathVector = [];
		var angle = -1;
		//
		if(pathIndex < 0) {
			// return false;
			return path[0];
		}
		//
		if(pathIndex > pathInfo.length - 1) {
			// return false;
			return path[path.length - 1];
		}

		curPathVector = pathInfo[pathIndex].vector;
		angle = Math.atan(curPathVector[1] / curPathVector[0]);
		angle = curPathVector[0] < 0 ? angle + Math.PI : angle;

		ret[0] = Math.round(pathDist * Math.cos(angle)) + path[pathIndex][0];
		ret[1] = Math.round(pathDist * Math.sin(angle)) + path[pathIndex][1];
		return ret;
	},
	supportStyle: (function () {

		var div = document.createElement('div'),
			vendors = 'Khtml O Moz Webkit'.split(' '),
			len = vendors.length;
		return function (prop) {

			if (prop in div.style) return true;

			if ('-ms-' + prop in div.style) return true;

			prop = prop.replace(/^[a-z]/, function (val) {

				return val.toUpperCase();

			});

			while (len--) {

				if (vendors[len] + prop in div.style) {

					return true;

				}

			}

			return false;

		};

	})()
};