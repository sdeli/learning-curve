$('.spoiler').on('click', 'button', function(event){
  console.log(event.target);
  //Show the spoiler text
  $('.spoiler span').show();
  //Hide the "Reveal Spoiler" button
  $(event.target).hide();
});

// Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);

//Hide the spoiler text
$('.spoiler span').hide();




