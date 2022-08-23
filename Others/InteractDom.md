========================================================
<!-- Calling functions within functions-->
========================================================
function sayHi(){
	console.log("Hello")
}

function HiandBye(func) {
  func()
  console.log('Bye')
}

HiandBye(sayHi);

--

WE can even do aswell

function HiandBye(func) {
  func()
  console.log('Bye')
}

HiandBye(function sayHi(){
	console.log("Hello")
}
);

--

Can even do an anonimous function

function HiandBye(func) {
  func()
  console.log('Bye')
}

HiandBye( () => {
	console.log("Hello")
}
);
========================================================
<!-- for loop with an event listener-->
========================================================

const listItems = document.getElementsByName('li');

for(let i=0;i<listItems.length; i++) {
 listItems.addEventListener('mouseover', ()=>{
  listItems[i].textContent = listItems[i].textContent.toUpperCase();                        
 });
}

========================================================
<!-- The event object -->
========================================================

document.addEventListener('click', (event)=>{
  console.log(event)
})

========================================================
<!-- Event Bubbling and Delegation-->
========================================================

const taskList = document.querySelector('.list-container ul');


 taskList.addEventListener('mouseover', ()=>{
    if(event.target.tagName === 'LI'){
       event.target.textContent = event.target.textContent.toUpperCase();                     }
 });



const listItems = taskList.children;



function attachRemoveButton(li){
  let remove = document.createElement('button')
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove)
}

for (let i=0; i< listItems.length; i++){
  attachRemoveButton(listItems[i]);
}

========================================================
<!-- Traversing up the DOM with parentNode -->
========================================================

taskList.addEventListener('click', (event) => {
	if(event.target.tagName === 'BUTTON'){
		const button = event.target;
    const li = button.parentNode;
    li.remove()
	}
});

btnCreate.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  const input = document.querySelector('.input-main');
  let li = document.createElement('li');
  li.textContent = input.value;
  attachRemoveButton(li)
  ul.appendChild(li);
  input.value = '';
});

========================================================
<!-- Exercises Manipulating the DOM-->
========================================================


// 1: Set the text of the <h1> element

const settingH1Text = document.querySelector('h1');
settingH1Text.innerText = 'My Activities List';

// 2: Set the color of the <h1> to a different color
settingH1Text.style.color = 'skyblue';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

const settingPDesc = document.querySelector('.desc');
settingPDesc.innerHTML = '<p>A list of <i>fun</i> things I want to do today!</p>';

// 4: Set the class of the <ul> to 'list'

const addUlListClass = document.querySelector('ul');
addUlListClass.className = 'list';

// 5: Create a new list item and add it to the <ul>
const liItem = document.createElement('li');
liItem.innerHTML = '<input> Sleep';
addUlListClass.append(liItem);
// 6: Change all <input> elements from text fields to checkboxes

const liTypeBox = document.querySelectorAll('li input');
for ( i = 0; i < liTypeBox.length; i++ ){
  liTypeBox[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>

const button = document.createElement('button');
const extra = document.querySelector('.extra');

button.innerText = 'Delete';
extra.append(button);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

button.addEventListener('click', () => {
   const extras = button.parentNode;
   extras.remove()                        
});

// could have gone the opposite route too
const container = document.querySelector('.container');
button.addEventListener('click', () => {
   container.removeChild(extra);                        
});

========================================================
<!-- Traversing the DOM -->
========================================================

// STARTING POINT
const list = document.querySelector('.list');

// 1: Store the first child of the `ul` in the variable `firstItem`
const firstItem = list.firstElementChild;
firstItem.style.backgroundColor = '#04c5e6';

// 2: Using traversal, store the second list item in a variable named `nextItem`
const nextItem = firstItem.nextElementSibling;
nextItem.style.backgroundColor = '#b7c7d0';

// 3: Store the last child of the `ul` in a variable named `lastItem`
const lastItem = list.lastElementChild;
lastItem.style.backgroundColor = '#57d6ab';

// 4: Using traversal, store the second-to-last list item in a variable named `prevItem`
const prevItem = lastItem.previousElementSibling;
prevItem.style.backgroundColor = '#f36f49';

// 5: Store the nested div in a variable named `banner`
const banner = list.previousElementSibling;
banner.className = 'banner';

// 6: Using traversal, store the wrapper div in a variable named `wrapper`
const wrapper = banner.parentElement;
wrapper.style.backgroundColor = '#fcfcfc';

// 7: Using traversal, store the body in a variable named `body`
const body = wrapper.closest(body); // he used parentNode
body.style.backgroundColor = '#f8fdf3';






