========================================================
<!-- Arrays example -->
========================================================
const planets = [ 
  'Mercury',
  'Venus',
  'Earth',
  'Mars'
];

console.log(planets[0]);
console.log(planets[1]);
console.log(planets[2]);
console.log(planets[3]);

========================================================
<!-- add and remove items, also count how many there are -->
========================================================
const instruments = ['piano', 'drums', 'trumpet'];

instruments.push( 'guitar', 'violin' ); \\ With push we add on the start of the list
instruments.unshift( 'cowbell', 'tube'); \\ With unshift we add iteems at the end of the list
-

instruments.length; \\ This would show a number counting amount of items stored in var.

-
if we use instruments.pop; it'll state the last item on the console and then delete it
if we use instruments.shift; it'll state the first item on the console and then delete it

========================================================
<!-- Spread -->
========================================================
One of the main benefits of copying an array is that you preserve the values of the original array. For example, the original mathStudents and scienceStudents arrays remain unchanged (won't be mutated) if you decide to push or pop elements in and out of the copies of those arrays.

const mathStudents = [
  'Marty',
  'Jennifer',
  'Lorraine',
  'Goldie'
];

const scienceStudents = [
  'Emmett', 
  'Clara', 
  'Needles',
  'Strickland'
];

const mathStudentsCopy = [...mathStudents];
const scienceStudentsCopy = [...scienceStudents];

// This affects the copied arrays only
//  The original arrays remain unchanged
mathStudentsCopy.pop();
scienceStudentsCopy.push('Marvin');

Can also use it to stack different students names

const students = [...mathStudentsCopy, ...scienceStudentsCopy];
========================================================
<!-- loops -->
========================================================

const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight'
];

function createListItems(arr) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li> ${arr[i]} </li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;



const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;


if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search.toLowerCase()) ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLowerCase()) + 1 } on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;

========================================================
<!-- Nesting arrays or multi dimensional arrays -->
========================================================

const playlist = [
  ['So What', 'Miles David', '9:04'],
  ['Respect', 'Aretha Franklin', '2:45'],
  ['What a Wonderful World', 'Louis Armstrong', '2:21'],
  ['At Last', 'Ella Fitzgerald', '4:18'],
  ['Three Little Birds', 'Bob Marley and the Wailers', '3:01'],
  ['The Way You Look Tonight', 'Frank Sinatra', '3:21']
];

const myArtists = `${playlist[0][1]}, ${playlist[1][1]}, ${playlist[5][1]}`;
console.log(myArtists);

It would give on the console log<!-- Miles David, Aretha Franklin, Frank Sinatra -->

function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i][0] }, by ${ arr[i][1] } - ${ arr[i][2] }</li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;