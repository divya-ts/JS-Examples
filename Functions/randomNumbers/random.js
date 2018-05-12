function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}
/*
console.log( getRandomNumber(6) );
console.log( getRandomNumber(100) );
console.log( getRandomNumber(1000) );
console.log( getRandomNumber(2) );
*/
function getArea(width, length, unit) {
 var area = width * length;
  return area + " " + unit;
}
console.log(getArea(10, 20,'sq ft'));



// JS Random numbers challenge solution 
function getRandomNumber1( lower, upper) {
  if ( isNaN(lower) || isNaN(upper)) {
    throw new Error('Both arguments must be numbers');
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
console.log( getRandomNumber1(1,100));
console.log( getRandomNumber1(1,'thousand'));
console.log( getRandomNumber1(1,400));
console.log( getRandomNumber1('nine',24));

