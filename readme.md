# Quick Maths

[![Quick Maths](https://media.tenor.com/images/15a9b17a454aec563d124e287d4fdf5f/tenor.gif)](https://nodesource.com/products/nsolid)

> A chain-able, small, quick maths+utils lib `qm(4).plus(1).dividedby(2).fin()` -> `2.5`


## Usage (coming to an npm repo near you soon)

```
$ yarn add quick-maths
```

```js
const qm = require('quick-maths');
// or
import qm from 'quick-maths';

qm(1).times(-5).dividedby(3).minus(1).plus(5).times(2).fin(2)
//=> 4.66

qm(5).times(-5).fin()
//=> -25

qm(10).roughly(10.3)
//=> true

qm(10).equals(1850)
//=> false
```


## API

### qm(input)

#### input

Type: `int/float`

The initial that quick maths will evaluate with.
_Used as the beginning chain component._

### .plus(input)
#### input

Type: `int/float`

Value that will be added to the current number.

### .minus(input)
#### input

Type: `int/float`

Value that current number will be subtracted by.

### .times(input)
#### input

Type: `int/float`

Value that the current number will be multiplied by.

### .dividedby(input)
#### input

Type: `int/float`

Value that the current number will be divided by.

### .equals(input)
#### input, returns boolean

Type: `int/float`

Value that is checked to see if it equal to the current number.
_Used as an ending chain component, nothing after will be calculated._

### .roughly(input)
#### input, returns boolean

Type: `int/float`

Value that is checked to see if it is within 0.5 of the current number.
_Used as an ending chain component, nothing after will be calculated._

### .fin(input)
#### input, optional

Type: `int`

Value that will **truncate** decimal places, not round.
_Used as THE ending chain component, not to be used after **.roughly** or **.equals**._


## License

MIT © [Evan Kysley](http://kysley.com)