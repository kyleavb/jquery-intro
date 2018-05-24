var turnNumber = 0
var currentPlayer = 'Player 2 turn'
var oLoc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1200px-Letter_o.svg.png'
var xLoc = 'https://static1.squarespace.com/static/55ece940e4b048d1ed401c11/t/566f52c1bfe873371e44551b/1450136257817/X%3A++The+Unknown'
var cardBackLoc = 'https://i.pinimg.com/236x/8b/87/4a/8b874ac3b63e483339cbdb05a15fb716--blue-backgrounds-playing-cards.jpg'

var reset = function(){
    console.log('test')
    $('.square').css('background-image', 'url(' + cardBackLoc + ')')
}
var flipCard = function(e){
    if(turnNumber % 2 === 0){
        $('.current-player-display').html(currentPlayer)
        $(e.target).css('background-image', 'url(' + xLoc + ')')
        currentPlayer = 'Player 1 turn'
    }else{
        $('.current-player-display').html(currentPlayer);
        $(e.target).css('background-image', 'url(' + oLoc + ')')
        currentPlayer = 'Player 2 turn'
    } 
    turnNumber += 1;
}

$(document).ready(function (){
    $('.square').click(flipCard);
    $('.reset').click(reset);
})

