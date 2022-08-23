========================================================
<!-- Code normal-->
========================================================

function createLI(text) {
  const li = document.createElement('li');
  
  const span = document.createElement('span');
  span.textContent = text;
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

========================================================
<!-- Refactor 1-->
========================================================

function createLI(text) {
  function createElement(elementName, property, value) {
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
  }
  const li = createElement('li');
  
  const span = createElement('span', 'textContent', text);  
  li.appendChild(span)
  
  const label = createElement('label', 'textContent', 'Confirmed');
  
  const checkbox = createElement('input', 'type', 'checkbox');
  label.appendChild(checkbox);
  
  li.appendChild(label);
  
  const editButton = createElement('button', 'textContent', 'edit');
  
  li.appendChild(editButton);
  
  const removeButton = createElement('button', 'textContent', 'remove');
  li.appendChild(removeButton);
  
  return li;
}

========================================================
<!-- Refactor 2 -->
========================================================

function createLI(text) {
  function createElement(elementName, property, value) {
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
  }
  
  function appendToLI(elementName, property, value) {
    const element = createElement(elementName, property, value);  
    li.appendChild(element)
    return element;
  }
  
  const li = document.createElement('li');
  
  appendToLI('span', 'textContent', text);  
  appendToLI('label', 'textContent', 'Confirmed')
    .appendChild(createElement('input', 'type', 'checkbox'));
  appendToLI('button', 'textContent', 'edit');
  appendToLI('button', 'textContent', 'remove');
  
  return li;
}

========================================================
<!-- Code normal example 2 -->
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
<!-- Refactor 1 example 2 -->
========================================================

  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      const span = li.firstElementChild;
      let input = document.createElement('input');
      function removeName() {
        ul.removeChild(li);
      }
      function editName() {
          input.type = 'text';
          input.value = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.textContent = 'save';
      }
      function saveName() {
          input = li.firstElementChild;
          const newSpan = document.createElement('span');
          newSpan.textContent = input.value
          li.insertBefore(newSpan, input);
          li.removeChild(input);
          button.textContent = 'edit';
      }
      if (button.textContent === 'remove') {
        removeName();
      } else if ( button.textContent === 'edit' ) {
          editName();
      } else if (button.textContent === 'save') {
          saveName();
      }
    }
  });  

========================================================
<!-- Refactor 2 example 2 -->
========================================================

  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      const span = li.firstElementChild;
      let input = document.createElement('input');
      const nameActions = {
        remove: function removeName() {
                  ul.removeChild(li);
                },
        edit: function editName() {
                input.type = 'text';
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                button.textContent = 'save';
              },
        save: function saveName() {
                input = li.firstElementChild;
                const newSpan = document.createElement('span');
                newSpan.textContent = input.value
                li.insertBefore(newSpan, input);
                li.removeChild(input);
                button.textContent = 'edit';
              }
      };
      if (button.textContent === 'remove') {
        nameActions.remove();
      } else if ( button.textContent === 'edit' ) {
        nameActions.edit();
      } else if (button.textContent === 'save') {
        nameActions.save();
      }
    }
  });  


- 

Now with arrows

- 

  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      const span = li.firstElementChild;
      let input = document.createElement('input');
      const nameActions = {
        remove: () => {
                  ul.removeChild(li);
                },
        edit: () => {
                input.type = 'text';
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                button.textContent = 'save';
              },
        save: () => {
                input = li.firstElementChild;
                const newSpan = document.createElement('span');
                newSpan.textContent = input.value
                li.insertBefore(newSpan, input);
                li.removeChild(input);
                button.textContent = 'edit';
              }
      };
      if (button.textContent === 'remove') {
        nameActions.remove();
      } else if ( button.textContent === 'edit' ) {
        nameActions.edit();
      } else if (button.textContent === 'save') {
        nameActions.save();
      }
    }
  });  
========================================================
<!-- Refactor 1 example 3 -->
========================================================
        // prior he had like if button.textContent instead of action
        // this works because the name of the buttons match the name of the action properties
        
        const action = button.textContent;
      if (action === 'remove') {
        nameActions.remove();
      } else if ( action === 'edit' ) {
        nameActions.edit();
      } else if (action === 'save') {
        nameActions.save();
      }
========================================================
<!-- Refactor 2 example 3 . Accessing dynamically-->
========================================================

      const action = button.textContent;
      nameActions[action]();