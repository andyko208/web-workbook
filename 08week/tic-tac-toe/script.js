'use strict';

$(document).ready(function() {
  var turn = 'O';
  $('[data-cell]').on('click', function(){
    if ($(this).text() === ''){
      // checkwin();
      $(this).text(turn);
      if(turn === 'O'){
        turn = 'X';
      }
      else{
        turn = 'O';
      }
    }

  })
});
// function checkwin() {
//   if($('data-cell = "0"').text() === turn &&
//       $('data-cell = "1"').text() === turn &&
//       $('data-cell = "2"').text() === turn)
//     $('#announce-winner').text('X wins');
// }
//
// $('#clear'.click(function(){
//   $('[data-cell]').empty();
//   turn = "X";
//   $('#announce-winner').empty();
// })
