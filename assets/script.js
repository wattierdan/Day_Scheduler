
  //[Luxon](https://moment.github.io/luxon/)

  //[Day.js](https://day.js.org/)

  //[date-fns](https://date-fns.org/)

  //[js-Joda](https://js-joda.github.io/js-joda/)


//AS AN employee with a busy schedule
//I WANT to add important events to a daily planner
//SO THAT I can manage my time effectively
//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event

//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist


//when app loads it loads with current hour at top of screen
//display tabs for days of the week
//when a day of the week is clicked it loads events for that day



//global vars
var currentMonth = dayjs().format('MM')
var curentHour = dayjs().format('H')
var toDos = []



//gets elements
var header = $('header')
var body = $('body')
var container = $('.container')
var timeBlocks = $('.time_block')

getToDos()


//prints saved todos to correct timeblock

for (var i = 0; i < timeBlocks.length; i++) {
  for (var j = 0; j < toDos.length; j++) {
    if  (toDos[j].id === timeBlocks[i].id){
      timeBlocks[i].childNodes[3].value = toDos[j].text
    }
  }
}  


whatColor()
$('#currentDay').text(dayjs().format('ddd MMM DD YYYY h:mm A')) 

//different backgrounds for the seasons
//if spring
/*if (currentMonth >=3 || currentMonth <=5) {
  body.css("background-image", 'url("https://images.pexels.com/photos/1038508/blossom-tree-sky-nature-1038508.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")')
  }
//if summer
if (currentMonth >=6 || currentMonth <=8) {
  body.css("background-image", 'url("https://images.pexels.com/photos/189848/pexels-photo-189848.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")')
  }
//if fall
if (currentMonth >=9 || currentMonth <=11) {
  header.css("background-image", 'url("https://images.pexels.com/photos/1545345/pexels-photo-1545345.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")')
  body.css("background-image", 'url("https://images.pexels.com/photos/1545345/pexels-photo-1545345.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")')
}
//if winter
if (currentMonth >=12 || currentMonth <=2) {
  body.css("background-image", 'url("https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")')
  }*/

//function to determine what color a time_block should be
function whatColor(){
  for (i = 0; i < timeBlocks.length; i++) {
    //console.log(timeBlocks[i].id, curentHour)
    if (parseInt(timeBlocks[i].id) == curentHour) {
      document.getElementById([i]).style.backgroundColor = "#d17976";
      document.getElementById([i]).className += " scroll";
    }
    if (parseInt(timeBlocks[i].id) > curentHour) {
      document.getElementById([i]).style.backgroundColor = "#233c5d"
    }  
  }
}




//scrolls to current time_block hour
//fix where it scrolls to
$(document).ready(function () {
  $('html').animate({
      scrollTop: $('.scroll').offset().top - 300
  }, 1200);
});



//save button
$('button').on("click", function(){
  var text = $(this).siblings("textarea").val()
  var id = $(this).parent().attr('id')
  var aToDo = new Object()
  aToDo.id = id
  aToDo.text = text
  toDos.push(aToDo)
  saveText()

})

//saves to local storage 
function saveText() {
  var str = JSON.stringify(toDos)
  localStorage.setItem("textContent", str)
}

//gets textContent from local storage 
function getToDos() {
 var str = localStorage.getItem('textContent')
 toDos = JSON.parse(str)
 if (!toDos) {
   toDos = []
 }
}



