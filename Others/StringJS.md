========================================================
<!-- SearchMethod-->
========================================================

indexString.indexOf('i');

When it turns -1 is that it didnt find any matching.

as an example, having 'let school = "treehouse"' on a js file, if we then type on the console:

school.indexOf('tree')

It returns 0 since it does match

--

indexOf looks starting at the beggining and lastIndexof at the end, as an example using the school.indexOf('tree') above it'll give us

school.indexOf('e')

return would be 2

and if we do school.lastIndexOf('e')

return is 8

--

Another usage example: "let childrensStory = "Once upon a time not long ago ...the end"

If we do childrensStory.startsWith("Once upon a time") on console log it'll return true

ALso if we do  childrensStory.endsWith("the end") it'll return true too

========================================================
<!-- Mdoficiation Methods -->
========================================================

You may be familiar with methods like toUpperCase and toLowerCase that change strings. When working with user input we'll often need to edit data and change the format of given strings. String modification methods allow us to do things like break strings into smaller parts called substrings. You can also use methods to remove whitespace or combine different strings together.

Besides ways to search on strings there's also ways to modify them as in Separating, Combining, Converting and Removing characters

- trim() is a way to make sure that spaces not between strings, but at the beginning or end of a stream do not affect the outcome of a boolean value

example

var str = '        Hello World!        ";
alert(str.trim());

- The substr() method extracts a part of a string. Begins at a specified position, and returns a specified number of characters.

let fact = 'HTML is a programming language';

fact.substring(0,4)
'HTML'

- The slice() method extracts a part of a string. Method returns the extracted part in a new string. The slice() method does not change the original string.

-  replace method convers the first recurrance on a string, if we want to change all recurrances then we'd use replaceAll

fact.replace('HTML','css')
'css is a programming language'

- Strings cannot do arithmetics like you can do with numbers or iterate through them like on an array, luckily there are methods that allow changing them into both of these types

One would be the split() method

The split() method splits a string into an array of substrings.

The split() method returns the new array.

The split() method does not change the original string.

If (" ") is used as separator, the string is split between words.


Using split on a large quote would give an array of substrings such as:

paleBlueDot.split(' ')
(35) ['', 'Our', 'planet', 'is', 'a', 'lonely', 'speck', 'in', 'the', 'great', 'enveloping', 'cosmic', 'dark.', 'In', 'our', 'obscurity,', 'in', 'all', 'this', 'vastness,', 'there', 'is', 'no', 'hint', 'that', 'help', 'will', 'come', 'from', 'elsewhere', 'to', 'save', 'us', 'from', 'ourselves.']

we can use then join() to put them back together

- When it comes to numbers, if we were to do like '20' + 1 it'll give us '201' since '20' is a string.

if we had like var x = '20' and then we do parseInt(x) + 1 then we will have 21

using tostring method we can go back from numbers to strings




========================================================
<!-- using pseudoCode exercise-->
========================================================
========================================================
<!-- using pseudoCode exercise-->
========================================================
========================================================
<!-- using pseudoCode exercise-->
========================================================
========================================================
<!-- using pseudoCode exercise-->
========================================================
========================================================
<!-- using pseudoCode exercise-->
========================================================
========================================================
<!-- using pseudoCode exercise-->
========================================================
