// Variables

var boxes = $('.box')
var $empty = $('#empty')
var $shuffle = $('#shuffle')
var $original = []

// Functions

function move(e){
  var emptyOrder = $($empty).css('order')
  console.log($(e.target).css('order'))
  isNearEmpty(e.target, emptyOrder)
  checkWin()
}

function isNearEmpty(clickedOn, emptyOrder){
  distance = $(clickedOn).css('order') - emptyOrder
  if (distance === -1 || distance === -3 || distance === 1 || distance === 3){
    moveBox(clickedOn, emptyOrder)
  } else {
    console.log('I can not be moved')
  }
}

function moveBox(clickedOn, emptyOrder){
  tempOrder = $(clickedOn).css('order')
  $(clickedOn).css('order', emptyOrder)
  $($empty).css('order', tempOrder)
}

function shuffle(e){
  numbers = [1,2,3,4,5,6,7,8]
  for (i = 0; i < boxes.length; i++){
    randomIndex = Math.floor(Math.random() * numbers.length)
    item = numbers[randomIndex]
    numbers.splice(randomIndex, 1)
    $(boxes[i]).css('order', item)
    $(boxes[i]).html($original[i])
  }
}

function checkWin(){
  currentPos = []
  for (i = 0; i < boxes.length; i++){
    currentPos += $(boxes[i]).css('order')
  }
  if ($original === currentPos){
    $('.grid').html('You WIN!')
  } 
}

// Listeners

for (i = 0; i < boxes.length; i++){
  $original += $(boxes[i]).css('order')
  $(boxes[i]).on('click', move)
}

$($shuffle).on('click', shuffle)