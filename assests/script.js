// function to display current day and time in the banner of the website 
var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.html(rightNow);
  }
  
  
  // Make a function to reference the hour of the day 
  // if the time is after 12 am but before 9 am, all time blocks on page should be green
  // if the hour is between 9am and 5 pm, all hours that have passed should be grayed out, and current hour should be red, hours yet to pass should be green
  // if time is between 6 pm and 12 am,  all time blocks should be gray
  // make a function to color each time block according to the time of day
  console.log(moment().format('HH'))
// var timeBlock9 = $('#9am') 
// var timeBlock10 = $('#10am')    
// var timeBlock11 = $('#11am')    
// var timeBlock12 = $('#12am')    
// var timeBlock1 = $('#1pm')    
// var timeBlock2 = $('#2pm')    
// var timeBlock3 = $('#3pm')    
// var timeBlock4 = $('#4pm')    
// var timeBlock5 = $('#5pm')    

$('.saveBtn').on('click', function(){
  var time = $(this).parent().attr('id');
  var value = $(this).siblings('.description').val();
  localStorage.setItem(time, value)
})

  
function colorCode(){
  var currentHour = moment().hours();
  $('.hour-block').each(function(){
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    if(blockHour < currentHour){
      $(this).addClass('past')
    }else if(blockHour === currentHour){
      $(this).removeClass('past');
      $(this).addClass('present');
    }else{
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })
};

colorCode();
var interval = setInterval(colorCode, 60000)

// make a function that takes the text input in the description and saves it to that area when save button is clicked 
// store description with a timestamp so it knows if its relevant to current day (if date = to current date, show/populate with the info, else delete stored info)

function loadText(){
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
};

loadText();

setInterval(displayTime, 1000);