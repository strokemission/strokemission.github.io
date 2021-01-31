
// Set the date we're counting up to
var countDownDate = new Date("jun 11, 2019 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = now - countDownDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Create elements that display day,hours,minutes,seconds
  document.getElementById("day").innerHTML = days 
  document.getElementById("hour").innerHTML = hours 
  document.getElementById("minute").innerHTML = minutes 
  document.getElementById("second").innerHTML = seconds
}, 1000);
