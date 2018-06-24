// When the button is pressed 
$('.spoiler').on('click', 'button', function(){
  //Show the spoiler text
  $(this).prev().show();
  //Hide the "Reveal Spoiler" button
  $(this).hide();
});

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);

//Hide the spoiler text
$('.spoiler span').hide();




