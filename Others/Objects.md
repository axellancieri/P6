========================================================
<!-- Objects example -->
========================================================
const person = {
  name: 'Edward',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

<!-- // You can access it through person.name as an example to get Edward or person['name'] -->

person.nickname = 'Duke';
const message = `Hi, I'm ${person.name}.I live in ${person.city}. Most know me as ${person.nickname = 'Duke'}. My age is ${person.age + 1}. I have ${person.skills.length} skills: ${person.skills.join(', ')}`;
console.log(message);
Hi, I'm Edward.I live in New York. Most know me as Duke. My age is 38. I have 3 skills: JavaScript, HTML, CSS
========================================================
<!-- For..in example -->
========================================================
const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

for ( let prop in person ) {
  console.log(`${prop}: ${person[prop]}`); // if we only use prop it'll say the keys but if we include objecet (on this case would be 'person')[key] then it'll give a list of the values inside each property
} 
name: Edward
nickname: Duke
city: New York
age: 37
isStudent: true
skills: JavaScript,HTML,CSS
========================================================
<!-- Useful JavaScript Object Methods -->
========================================================
The Object.keys() method returns an array containing the property names (or keys) of an object. Consider the following code:

const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the keys of the `person` object in `personProps`
const personProps = Object.keys(person); 
console.log(personProps);

> (4) ["name", "role", "skills", "isTeacher"]

-----

Check the length of an object

You learned that you use the length property to get the number of characters inside a string and return the number of elements inside an array. Object literals, however, do not have a length property. So if you wanted to check the length of an object (the number of properties inside it), calling person.length, for example, would return undefined.

Since Object.keys() stores an object's keys inside a new array, you can use it for checking the length of an object. For example:

const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

console.log( Object.keys(person).length );  // 4

-----

Object.values()

The Object.values() method returns an array of a given object's property values, in the same order as provided by a for...in loop. For example:

const person = {
  name: 'Reggie',
  role: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// Store the `person` object's property values in `personVals`
const personVals = Object.values(person); 
console.log(personVals);

> (4)
[
  "Reggie",
  "Software developer",
  ["JavaScript","HTML","CSS"],
  true
]

The array returned by Object.values(person) lists the property values of the person object

------

The handy spread operator

In a previous course on JavaScript arrays, you learned how to copy and combine arrays with the spread operator (...).

You can use the spread operator to copy key/value pairs from one object to another. Evaluate the following objects:

const name = {
  firstName: 'Reggie',
  lastName: 'Williams',
};

const role = {
  title: 'Software developer',
  skills: ['JavaScript', 'HTML', 'CSS'],
  isTeacher: true
};

// merge `name` and `role` into a `person` object
const person = {  
  ...name,
  ...role
};
console.log(person);

{
  firstName: "Reggie",
  lastName: "Williams",
  title: "Software developer",
  skills: ["JavaScript", "HTML", "CSS"],
  isTeacher: true
}

In this case, the spread operator produces the same results as with arrays -- it merges the name and role objects into one person object.
========================================================
<!-- Storing objects in Arrays -->
========================================================
const questions = [
  { question: 'How many planets are in the Solar System?',
    answer: '8' 
  },
  { question: 'How many continents are there?',
    answer: '7'
  },
  { question: 'How many legs does an insect have?', 
    answer: '6'
  },
  { question: 'What year was JavaScript created?', answer: '1995'}
];

Then to loop through the arrays and their objects you'd use .question and .answer instead of another [].

for ( let i = 0; i < questions.length; i++ ) {
  let question = questions[i].question;
  let answer = questions[i].answer;
========================================================
<!-- insertAdjacentHTML(position, text)-->
========================================================
Cool thing instead of .innerHTML
========================================================
<!-- using pseudoCode exercise-->
========================================================

// function calculate_gpa
  // pass in student_grades
  function calculate_gpa(student_grades) {
    // set grade_total to 0
    let grade_total = 0;
    // for each grade in student_grades
    let num_of_grades = student_grades.length;
    for (let i = 0; i<num_of_grades; i++) {
      let grade = student_grades[i];
        // if grade is not a 1, 2, 3, or 4
      if (grade < 1 || grade > 4) {
        // print "invalid grade" with grade
        console.log("invalid grade: " + grade);
        // exit function with "can't complete calculation" message
        return "Can't complete calculation";
      } else {
        // else add grade to grade_total
        grade_total += student_grades[i];
      }

    }
     // set gpa to grade_total / number of grades
    const gpa = grade_total / num_of_grades;
     // return gpa
    return gpa;
  // end function
  }

  // set reggie_grades to 4, 4, 3, 4
  let reggie_grades = [4,4,3,4];
  // print the results of calling calculate_gpa with reggie_grades
  console.log(calculate_gpa(reggie_grades));

  // set dave_grades to 1, 2, 3, 2
  let dave_grades = [1,2,3,2]
  // print the results of calling calculate_gpa with dave_grades
  console.log(calculate_gpa(dave_grades));

