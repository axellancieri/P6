========================================================
<!-- Jquery examples-->
========================================================

    const box = document.querySelector('.box');
    box.style.display = 'none'; // both lines above show how to use and grab classes on html to do things

    jQuery('.box').hide();
    $('.box').hide();
    $('.box').show(); //3 lines above pretty much show how can you do the box.style.display = 'none'; using JQuery instead of plain js and the .show() would be an example of the opposito of show

    box.addEventListener('click', function(){
    alert('You clicked me!');
    });

    $('.box').click( function(){
    alert('You clicked me!');
    });

    //The 2 examples above show using first plain js and then jQuery how to make the green box be dynamic.



========================================================
<!-- Animating Elements-->
========================================================
$('#flashMessage').hide().slideDown(1000).delay(3000).slideUp(); // This would be chaining, can also do:

$('#flashMessage')
    .hide(
    .slideDown(1000) //operates on miliseconds always, default is 400s
    .delay(3000)
    .slideUp();
========================================================
<!-- Changing Content Inside Elements-->
========================================================
    $('#element').html();//getter because it'll get what you chose and show the html syntax
    $('#element').html('<p>I am setting this HTML!</p>'); // setter



    $('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();

    const title = "My First Blog Post";
    const content = "This is my <strong>first</strong> post!";

    $('#blogTitlePreview').text(title);
    $('#blogContentPreview').html(content);
========================================================
<!--blog exercise -->
========================================================

$('#flashMessage').hide();
$('#previewButton').click(function(){
  const title = $('#blogTitleInput').val();
  const content = $("#blogContentInput").val();
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);
  
  $('#flashMessage').slideDown(1000).delay(3000).slideUp();


});

========================================================
<!-- append and prepend, star wars spoiler exercize -->
========================================================

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>'); // can use $ before variable to let myself see clearly that the variable is associated to JQuery
//Append to web page
$('.spoiler').append($button);
// hide the spoiler text
$('.spoiler span').hide();
// When the button is pressed
$('.spoiler button').click(function(){
    //Show the spoiler text
  $('.spoiler span').show();
    //Hide the "Reveal Spoiler" button
  $('.spoiler button').hide();
})



========================================================
<!-- On method and also event delegation-->
========================================================
     $('.spoiler').on('click', 'button', function(){     <!--// by using the .on after the main element we tell the browser to look for any changes might happen there even if it's after js has run through this top part -->
        //Show the spoiler text
    $('.spoiler span').show();
    //Hide the "Reveal Spoiler" button
    $('.spoiler button').hide();
    });
    // Create the "Reveal Spoiler" button
    const $button = $('<button>Reveal Spoiler</button>');
    //Append to web page
    $('.spoiler').append($button);
    // hide the spoiler text
    $('.spoiler span').hide();
========================================================
<!-- passing an event to a function  -->
========================================================
To specifically target an element with pass a function together with the .on as shown on example

$('.spoiler').on('click', 'button', function(event){
      //Show the spoiler text
  $('.spoiler span').show();
  //Hide the "Reveal Spoiler" button
  $(event.target).hide();
});
========================================================
<!-- Traversal -->
========================================================
    Traversal is when you're targeting a specific element and use js to move around its siblings

    ex on a  ul list with several li nested, we can open the console and do

    $('li').eq(1).prev().css({color: 'green'});

    We can also use .next instead of .prev to pick on the opposite order

    You can chain .next() or .prev() like this:

        $('li').eq(1).prev().prev.css({color: 'green'});


========================================================
<!-- jQuery-Specific Selectors -->
========================================================
    Can use css selectors, jsQuery specific selectors too!

    const $odd = $('a:odd');
    const $secureLinks = $('a[href^="https://"]'); // ^ means starts with
    const $pdfs = $('a[href$="pdf"]'); // $ means end of attribute value

    $pdfs.hide();
========================================================
<!-- Changing Element Properties-->
========================================================
$('#my-image').attr("alt") // Getter
$('#my-image').attr("alt", "Sunset in Barcelona") // Setter

const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]'); // ^ means starts with
const $pdfs = $('a[href$="pdf"]'); // $ means end of attribute value
const $pdfsCheckbox = ("<label><input type='checkbox'> Allow PDF downloads</label>");


// The attribute .attr allows to use an attribute type then select theproperty.

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$odd.css('backgroundColor', 'lightgrey')

// can use addClass, removeClass or toggleClass to change classes on elements :D

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
  event.preventDefault();
  //check if checkbox has been checked
  //if zero checkboxes are checked
  if ($(':checked').length === 0){
    //prevent download of document
    event.preventDefault();
    // alert the user
    alert('Please check the box to allow PDF donloads.');
  }    
});

$('#links').append($pdfsCheckbox);




========================================================
<!-- each to loop and this showcase-->
========================================================

$('#links').append($pdfsCheckbox);

$('a').each(function(index, link){
  const url = $(link).attr('href');
  $(link).parent().append(`(${url})`);
});

// this would log all of the hrefs that are links into the url variable and then on the link parent tahts the li it'll show as html right next to the title of the a the actual link it'll take you to. 

// Also using This we can take the names we pass to the function since we're only using link:

$('a').each(function(){
  const url = $(this).attr('href');
  $(this).parent().append(`(${url})`);
});
========================================================
<!-- script to use JQuery-->
========================================================
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
