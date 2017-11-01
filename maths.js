'use strict';
let o = 0;
const maths = function maths(x) {
	o = x;
	return {
		plus(y) {
			return maths(x + y);
		},
		minus(y) {
			return maths(x - y);
		},
		times(y) {
			return maths(x * y);
		},
		dividedby(y) {
			return maths(x / y);
		},
		equals(y) {
			return y === x;
		},
		roughly(y) {
			return o >= (y - 0.5) && o < (y + 0.5);
		},
		fin(y) {
			if (typeof y !== 'undefined' || !isNaN(y)) {
				return Math.trunc(x * Math.pow(10, y)) / Math.pow(10, y);
			}
			return x;
		}
	};
};

module.exports = maths;
