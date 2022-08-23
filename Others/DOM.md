========================================================
<!-- Browser Events-->
========================================================

const body = document.body;

document.body.addEventListener('click', () => { // This would be like a method that sends a signal to the browser and requests it to do something in repsonse of on thi case a clicking witih the body.
                               
body.innerHTML = '<h1>Hello, world!</h1>';
                                 
});

========================================================
<!-- Select an Element by ID-->
========================================================

const headline = document.getElementById('headline');

headline.style.border = 'solid 2px red';

//You can assign like a variable for the 'document.getElementById('btn-main')' part like we did above

document.getElementById('btn-main').addEventListener('click', () => {
  console.log('pressed da button');                                                     
});

========================================================
<!-- grabbing html elments by ID, class, tagname-->
========================================================

const headline = document.getElementById('headline');
const button = document.getElementById('btn-main');
const items = document.getElementsByTagName('li');
const highlights = document.getElementsByClassName('highlights');

for ( const highlight of highlights ) {
  highlight.style.backgroundColor = 'cornsilk';
}

for (let i=0;i < items.length; i++) {
  items[i].style.color = 'Orchid';
}

button.addEventListener('click', () => {
  headline.style.border = 'solid 2px red';
  headline.style.fontSize = '60px';
});

--

      <div class="list-container">
        <ul aria-live="polite">
          <li>Make coffee</li>
          <li class="highlights">Practice JavaScript</li>
          <li>Walk the cat</li>
          <li>Watch a Treehouse video</li>
          <li class="highlights">Go swimming</li>
          <li class="highlights">Play my guitar</li>
        </ul>
        <button class="btn-remove">Remove Last Task</button>
      </div>
    </div>

========================================================
<!-- adding query selectors-->
========================================================
/* getElementsByClassName() returns a live HTMLCollection representing an array-like object of all child elements which have all of the given class name(s).

querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
*/


const headline = document.getElementById('headline');
const button = document.querySelector('#btn-main');
const items = document.querySelectorAll('li');
const highlights = document.querySelectorAll('.highlights');

for ( const highlight of highlights ) {
  highlight.style.backgroundColor = 'cornsilk';
}

for (let i=0;i < items.length; i++) {
  items[i].style.color = 'Orchid';
}

button.addEventListener('click', () => {
  headline.style.border = 'solid 2px red';
  headline.style.fontSize = '60px';
});
========================================================
<!-- text content and html-->
========================================================
button.addEventListener('click', () => {
                        
  const headline = document.getElementById('headline');                 
  const input = document.querySelector('.input-main');

  headline.textContent = input.value;
  input.value = '';
});

--

document.querySelector('ul').innerHTML = '<li>How to read a book</li>'

========================================================
<!-- Change Element Attributes-->
========================================================

You can change the form type by typing liike 

const myInput = document.querySelector('input');

then you type

myInput.type = 'checkbox';

can also add a class but keep in mind gotta use className or it won work since class is used on something else

like myInput.className = 'grow'

========================================================
<!-- Set Inline Styles with the style Property -->
========================================================

btnUpdate.style.borderBottom = '5px solid black';
'5px solid black'
btnUpdate.style.borderBottom = '5px solid deeppink';
'5px solid deeppink'
btnUpdate.style.backgroundColor = 'mediumvioletred';
'mediumvioletred'

List Show / Hide toggle

btnToggle.addEventListener('click', () => {
   const listContainer = document.querySelector('.list-container');

   if (listContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style'); // He had before this line '    listContainer.style.display = 'block';', just showing another way of doing it but it looks more clean with remove on live html
   } else {
    listContainer.style.display = 'none';
    btnToggle.textContent = 'Show List';
   }

  
});

========================================================
<!-- Create Element, using append and prepend -->
========================================================
const btnCreate = document.querySelector('#btn-main'); 
const btnToggle = document.querySelector('.btn-toggle');


btnCreate.addEventListener('click', () => {
                                        
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');
  const item = document.createElement('li');
  item.textContent = input.value;
  input.value = '';
  list.append(item);
});

btnToggle.addEventListener('click', () => {
   const listContainer = document.querySelector('.list-container');

   if (listContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style');
   } else {
    listContainer.style.display = 'none';
    btnToggle.textContent = 'Show List';
   }

  
});

append or prepend alone would go to parent elements, if we use a () it'll go to the specified child

========================================================
<!-- Insert HTML at Specified Positions-->
========================================================

He said this is one of the most efficient ways to add new content

const btnCreate = document.querySelector('#btn-main'); 
const btnToggle = document.querySelector('.btn-toggle');


btnCreate.addEventListener('click', () => {
                                        
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');
  
  list.insertAdjacentHTML(
    'afterbegin', //This would make it be the first child of the element
    `<li>${input.value}</li>`
  );
  input.value = '';
});

btnToggle.addEventListener('click', () => {
   const listContainer = document.querySelector('.list-container');

   if (listContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style');
   } else {
    listContainer.style.display = 'none';
    btnToggle.textContent = 'Show List';
   }

  
});

========================================================
<!--Remove-->
========================================================
const btnRemove = document.querySelector('.btn-remove');


});

btnRemove. addEventListener('click', () => {
   const lastItem = document.querySelector('li:last-child');
   lastItem.remove();
});



