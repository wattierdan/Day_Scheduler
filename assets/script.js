//global vars

var currentMonth = dayjs().format('MM')
var curentHour = dayjs().format('H')
var toDos = []

//gets elements
var header = $('header')
var body = $('body')
var container = $('.container')
var timeBlocks = $('.time_block')
var fade = $('.fade')
var textInput =$('.text_input')

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

//function to determine what color a time_block should be
function whatColor(){
  for (i = 0; i < timeBlocks.length; i++) {
    //console.log(timeBlocks[i].id, curentHour)
    if (parseInt(timeBlocks[i].id) == curentHour) {
      document.getElementById([i]).style.backgroundColor = "	#ff2e2e";
      document.getElementById([i]).className += " scroll";
    }
    if (parseInt(timeBlocks[i].id) > curentHour) {
      document.getElementById([i]).style.backgroundColor = "#90EE90"
    }  
  }
}

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
if (currentMonth >=3 && currentMonth <=5) {
  fade.css("background-image", 'url("https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80")')
  body.css("background-image", 'url("https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80")')
  }
//if summer
if (currentMonth >=6 && currentMonth <=8) {
  fade.css("background-image", 'url("https://images.pexels.com/photos/189848/pexels-photo-189848.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")')
  body.css("background-image", 'url("https://images.pexels.com/photos/189848/pexels-photo-189848.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")')
  }
//if fall
if (currentMonth >=9 && currentMonth <=11) {
  fade.css("background-image", 'url("https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2116&q=80")')
  body.css("background-image", 'url("https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2116&q=80")')
}
//if winter
if (currentMonth ==12 || currentMonth <=2) {
  fade.css("background-image", 'url("https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")')
  body.css("background-image", 'url("https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")')
  }







