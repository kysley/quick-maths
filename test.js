import test from 'ava';
import m from './';

test('single addition', t => {
	t.is(m(4).plus(2).fin(), 6);
});

test('double addition', t => {
	t.is(m(4).plus(2).plus(6).fin(), 12);
});

test('addition from negative val', t => {
	t.is(m(-1).plus(2).plus(6).fin(), 7);
});

test('negative addition', t => {
	t.is(m(-1).plus(-2).plus(6).fin(), 3);
});

test('single subtraction', t => {
	t.is(m(6).minus(5).fin(), 1);
});

test('double subtraction', t => {
	t.is(m(6).minus(4).minus(1).fin(), 1);
});

test('subtraction from negative val', t => {
	t.is(m(-4).minus(4).minus(1).fin(), -9);
});

test('negative subtraction from negative val', t => {
	t.is(m(-4).minus(-4).minus(1).fin(), -1);
});

test('single multiplication', t => {
	t.is(m(1).times(10).fin(), 10);
});

test('double multiplication', t => {
	t.is(m(1).times(10).times(10).fin(), 100);
});

test('negative multiplication', t => {
	t.is(m(5).times(-5).fin(), -25);
});

test('negative negative multiplication', t => {
	t.is(m(-5).times(-5).fin(), 25);
});

test('single division', t => {
	t.is(m(5).dividedby(5).fin(), 1);
});

test('double division', t => {
	t.is(m(10).dividedby(2).dividedby(2).fin(), 2.5);
});

test('roughly', t => {
	t.is(m(10).roughly(10.3), true);
});

test('equals', t => {
	t.is(m(10).equals(10), true);
});

test('doesnt equals', t => {
	t.is(m(10).equals(20), false);
});

test('everything lol', t => {
	t.is(m(1).times(-5).dividedby(3).minus(1).plus(5).times(2).fin(2), 4.66);
});
