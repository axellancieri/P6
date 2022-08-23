========================================================
<!-- Registering names-->
========================================================

Making function to grab input on form and append it on child ul then clear form value 

const form = document.getElementById('registrar');
const input = form.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = ' ';
  const ul = document.getElementById('invitedList');
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
});

- 

<body>
  <div class="wrapper">
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <form id="registrar">
        <input type="text" name="name" placeholder="Invite Someone">
        <button type="submit" name="submit" value="submit">Submit</button>
      </form>
    </header>
		
    <div class="main">	
      <h2>Invitees</h2>
      <ul id="invitedList"></ul>	
    </div>
  </div>

========================================================
<!-- Creating a checkbox on the function also on each invitee list-->
========================================================

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = ' ';
  const ul = document.getElementById('invitedList');
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);
});

========================================================
<!-- adding a class when checkbox gets chosne and taking it away when its not
also making it so we use traverse to have better site performance-->
========================================================

ul.addEventListener('change', (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  
  if (checked) {
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
});

========================================================
<!-- added remove button and also eventhandler to make it behave as a remove button-->
========================================================

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = ' ';
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  const button = document.createElement('button');
  button.textContent = 'remove';
  li.appendChild(button);
  ul.appendChild(li);
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
  }
});

========================================================
<!-- made a separate funciton for li elements to make it more readable -->
========================================================

function createLI(text) {
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  const button = document.createElement('button');
  button.textContent = 'remove';
  li.appendChild(button);
  return li;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = ' ';
  const li = createLI(text);
  ul.appendChild(li);
});

========================================================
<!-- adding edit button and also making eventHandler behave as intended when its an edit Button-->
========================================================

function createLI(text) {
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  li.appendChild(editButton);
  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  li.appendChild(removeButton);
  return li;
}

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.textContent === 'remove') {
      const li = e.target.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    } else if ( e.target.textContent === 'edit' ) {
        console.log('edit');
    }
  }
});

--

MAKING CODE MORE READABLE ON THE BUTTON FUNCTInoi

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === 'remove') {
      ul.removeChild(li);
    } else if ( button.textContent === 'edit' ) {
        console.log('edit');
    }
  }
});

========================================================
<!-- Making edit section -->
========================================================

function createLI(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.textContent = text;
  li.appendChild(span)
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  const editButton = document.createElement('button');
  editButton.textContent = 'edit';
  li.appendChild(editButton);
  const removeButton = document.createElement('button');
  removeButton.textContent = 'remove';
  li.appendChild(removeButton);
  return li;
}

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    const span = li.firstElementChild;
    let input = document.createElement('input');
    if (button.textContent === 'remove') {
      ul.removeChild(li);
    } if ( button.textContent === 'edit' ) {
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
    } 
  }
});  

========================================================
<!-- making edit go through and keep changes on string-->
========================================================

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    const span = li.firstElementChild;
    let input = document.createElement('input');
    if (button.textContent === 'remove') {
      ul.removeChild(li);
    } if ( button.textContent === 'edit' ) {
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
    } else if (button.textContent === 'save') {
        input = li.firstElementChild;
        const newSpan = document.createElement('span');
        newSpan.textContent = input.value
        li.insertBefore(newSpan, input);
        li.removeChild(input);
        button.textContent = 'edit';
    }
  }
});  

========================================================
<!-- In case we cant put Jscript at the end of the body we can endent the whole code -->
========================================================

using:

document.addEventListener('DOMContentLoaded', () => {});

========================================================
<!-- filter checkbox -->
========================================================

  const mainDiv = document.querySelector('.main');
  const div = document.createElement('div');
  const filterLabel = document.createElement('label');
  const filterCheckBox = document.createElement('input');
  
  filterLabel.textContent = "Hide those who haven't responded";
  filterCheckBox.type = 'checkbox';
  div.appendChild(filterLabel);
  div.appendChild(filterCheckBox);
  mainDiv.insertBefore(div, ul);
  
  filterCheckBox.addEventListener('change', (e) => {
    const isChecked = e.target.checked; // if checked will be true if not flase
    const lis = ul.children;
    if (isChecked) {
      for (let i = 0; i < lis.length; i+= 1) {
        let li = lis[i];
        if (li.className === 'responded') {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }
      }
    } else {
      for (let i = 0; i < lis.length; i+= 1) {
        let li = lis[i];
        li.style.display = '';
      }
    }
  });

