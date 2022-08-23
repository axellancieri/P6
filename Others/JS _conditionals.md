========================================================
<!-- If else-->
========================================================

var isTrue = true;

if(isTrue) {
	console.log('yes');
} else {
	console.log('no');
}

========================================================
<!-- Switch statement -->
========================================================

var day = 0;

switch (day) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    default:
      console.log('Invalid Day');
      break;
}

========================================================
<!-- Ternary Operator-->
========================================================

Used on simple cases

<boolean> ? <expression if true> : <expression if false>

var isTrue = true;

one example isTrue ? console.log('yes') : console.log('no');

outcoume would be true, otherwise if var is false then false

another example using variablevar yesOrNo = isTrue ? 'yes' : 'no';

========================================================
<!-- Short Circuit Evaluation-->
========================================================

Its a way to optimize code by stopping the evaluation of an expression  as soon as n outcome is known.

Its used to quickly assign a value or execute code

reads left to right, and will stop once it finds a falsy value and return it

Example where this might be good is using a funciton:

function isAdult ( age ) {
    if (age && age >= 18) {
        return true;
    } else {
        return false;
    }

} 

Now more abbreviated now..

function isAdult ( age ) {
   return age && age >= 18; 
} 

console.log(17); // that would return true


common use it to assign a default value

function countToFive(start) {
    for(let i = start; i<= 5; i +=)
        console.log(i);
}

if we give it countToFive(2); the console would show 2,3,4,5
with no arguments prints nothing. Because start is undefined and then loop condition is false at the beggining.

If we want the function to start lets say on 1 even if it gets called withou an argument, best way to do it would be using a short circuit

function countToFive(start) {
    start = start || 1;
    for(let i = start; i<= 5; i +=)
        console.log(i);
}

We could also do like  (start = 1) on the first line of the function


Example of using short circuiut on an example

function greet(name) {
    name && console.log('Hi, ' + name + '!');
}

greet('Sam');

Pretty much this is good when its very easy to tell what your code wants to accomplish.