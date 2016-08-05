var bignumJSON = require('./lib');

var testDecimal = '{"normal":-922337203.234,"big":-9223372036854775807.4237482374983253298159}';
console.log('\ntestDecimal:                   ' + testDecimal);
console.log('JSON.parse(testDecimal):       ' + JSON.stringify(JSON.parse(testDecimal)));
console.log('bignumJSON.parse(testDecimal): ' + bignumJSON.stringify(bignumJSON.parse(testDecimal)));

var testInteger = '{"normal":-922337203,"big":-92233720368547758074237482374983253298159}';
console.log('\ntestInteger:                   ' + testInteger);
console.log('JSON.parse(testInteger):       ' + JSON.stringify(JSON.parse(testInteger)));
console.log('bignumJSON.parse(testInteger): ' + bignumJSON.stringify(bignumJSON.parse(testInteger)));

var testBogusInt = '{"hello":8.}';
console.log('\ntestBogusInt:                  ' + testBogusInt);

var s;
try {
  s = JSON.stringify(JSON.parse(testBogusInt));
} catch (e) {
  console.log(e);
  s = e.toString();
}
console.log('JSON.parse(testBogusInt):       ' +  s);

try {
  s = bignumJSON.stringify(bignumJSON.parse(testBogusInt, undefined, true, true));
} catch (e) {
  console.log(e);
  s = e.toString();
}
console.log('bignumJSON.parse(testBogusInt): ' + s);

s = bignumJSON.parse('{"test-NaN":NaN}');
console.log('bignumJSON.parse(nan): ', s);

var test0Padding = '{"hello":00}';
console.log('\ntest0Padding:                  ' + test0Padding);

try {
  s = JSON.stringify(JSON.parse(test0Padding));
} catch (e) {
  console.log(e);
  s = e.toString();
}
console.log('JSON.parse(test0Padding):       ' +  s);

try {
  s = bignumJSON.stringify(bignumJSON.parse(test0Padding, undefined, true, true));
} catch (e) {
  console.log(e);
  s = e.toString();
}
console.log('bignumJSON.parse(test0Padding):       ' +  s);
