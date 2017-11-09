'use strict';

const maths = function maths(x) {
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
			return x >= (y - 0.5) && x < (y + 0.5);
		},
		greater: {
			than(y) {
				return x > y;
			}
		},
		less: {
			than(y) {
				return x < y;
			}
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
