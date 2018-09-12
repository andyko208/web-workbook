'use strict';

$(document).ready(function() {
  var turn = 'O';
  var count = 0;
  $('[data-cell]').on('click', function() {
    if ($(this).text() === ''){
      $(this).text(turn);
      if(turn === 'O'){
        turn = 'X';
      }
      else{
        turn = 'O';
      }
      count++;
      checkwin();
    }
    if (count === 9) {
      $('#announce-winner').text('Tie');
    }
    $("#clear").click(function() {
      // 'O'always starts 1st
      $('[data-cell]').empty();
        turn = "O";
      $('#announce-winner').empty();
    });
  })
  function checkwin() {
    // X
    // rows
    if($('[data-cell = "0"]').text() === 'X' &&
        $('[data-cell = "1"]').text() === 'X' &&
        $('[data-cell = "2"]').text() === 'X')
      $('#announce-winner').text('X wins');
    else if($('[data-cell = "3"]').text() === 'X' &&
        $('[data-cell = "4"]').text() === 'X' &&
        $('[data-cell = "5"]').text() === 'X')
      $('#announce-winner').text('X wins');
    else if($('[data-cell = "6"]').text() === 'X' &&
        $('[data-cell = "7"]').text() === 'X' &&
        $('[data-cell = "8"]').text() === 'X')
      $('#announce-winner').text('X wins');
    // cols
    else if($('[data-cell = "0"]').text() === 'X' &&
        $('[data-cell = "3"]').text() === 'X' &&
        $('[data-cell = "6"]').text() === 'X')
      $('#announce-winner').text('X wins');
    else if($('[data-cell = "1"]').text() === 'X' &&
        $('[data-cell = "4"]').text() === 'X' &&
        $('[data-cell = "7"]').text() === 'X')
      $('#announce-winner').text('X wins');
    else if($('[data-cell = "2"]').text() === 'X' &&
        $('[data-cell = "5"]').text() === 'X' &&
        $('[data-cell = "8"]').text() === 'X')
      $('#announce-winner').text('X wins');
    // diag
    else if($('[data-cell = "0"]').text() === 'X' &&
        $('[data-cell = "4"]').text() === 'X' &&
        $('[data-cell = "8"]').text() === 'X')
      $('#announce-winner').text('X wins');
    else if($('[data-cell = "2"]').text() === 'X' &&
        $('[data-cell = "4"]').text() === 'X' &&
        $('[data-cell = "6"]').text() === 'X')
      $('#announce-winner').text('X wins');
    // 'O'
    // 'rows'
    else if($('[data-cell = "0"]').text() === 'O' &&
        $('[data-cell = "1"]').text() === 'O' &&
        $('[data-cell = "2"]').text() === 'O')
      $('#announce-winner').text('O wins');
    else if($('[data-cell = "3"]').text() === 'O' &&
        $('[data-cell = "4"]').text() === 'O' &&
        $('[data-cell = "5"]').text() === 'O')
      $('#announce-winner').text('O wins');
    else if($('[data-cell = "6"]').text() === 'O' &&
        $('[data-cell = "7"]').text() === 'O' &&
        $('[data-cell = "8"]').text() === 'O')
      $('#announce-winner').text('O wins');
    // cols
    else if($('[data-cell = "0"]').text() === 'O' &&
        $('[data-cell = "3"]').text() === 'O' &&
        $('[data-cell = "6"]').text() === 'O')
      $('#announce-winner').text('O wins');
    else if($('[data-cell = "1"]').text() === 'O' &&
        $('[data-cell = "4"]').text() === 'O' &&
        $('[data-cell = "7"]').text() === 'O')
      $('#announce-winner').text('O wins');
    else if($('[data-cell = "2"]').text() === 'O' &&
        $('[data-cell = "5"]').text() === 'O' &&
        $('[data-cell = "8"]').text() === 'O')
      $('#announce-winner').text('O wins');
    // diag
    else if($('[data-cell = "0"]').text() === 'O' &&
        $('[data-cell = "4"]').text() === 'O' &&
        $('[data-cell = "8"]').text() === 'O')
      $('#announce-winner').text('O wins');
    else if($('[data-cell = "2"]').text() === 'O' &&
        $('[data-cell = "4"]').text() === 'O' &&
        $('[data-cell = "6"]').text() === 'O')
      $('#announce-winner').text('O wins');
    }
});
