/*
looping Triangle
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
*/

var output = "";

for (var i = 0; i>7; i++;){
  content = output + "#";
  console.log(output);
};

/*
Fizzbuzz Assignment
*/

for (i=1; i<=100; i++) {
  if ( !(i%5) && !(i%3) ) {
    console.log('FizzBuzz');
  }
  else if ( !(i%5) && !(i%3) ) {
    console.log('Buzz');
  }
  else if ( !(i%3) ) {
    console.log('Fizz');
  }
  else {
    console.log(i);
  }
};

/*
Chess Board Assignment
*/
var size = 8;
var space = ' ';
var block = '#';

for (i=1; i<=8; i++) {
  var line = '';

  for (var a=1; a<=size; a++) {
    if (i%2) {
      if (a%2) {
        line = line + space;
      } else {
        line = line + block;
      } else {
        if (a%2) {
          line = line + block;
        } else {
          line = block + line;
        }
      }
    }
  } console.log(line)
}
