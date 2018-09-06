let dieChar = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").innerHTML += `<span class="die" data-roll="${roll}">${dieChar[roll - 1]}</span>`;
  }
  report();
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll('.die'); // this puts all the individual die HTML elements in diceHtml
  for (let dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    let doub = 0;
    let trip = 0;
    for (let i = 0; i < 5; i++) {  // we create the inner loop that cycles through the rolled dice
      if (dieVal === Number(diceHtml[i].getAttribute('data-roll'))) {  // we check if the rolled die is equal to the one's we're counting
        // console.log(Number(diceHtml[i].getAttribute('data-roll')));
        howManyDice++; // if so, we add one to the count
        if (howManyDice === 2){
          doub+= 1;
          console.log("this is # of doubles " + doub);
        }
        if (doub === 2) {
          document.querySelector("#report").innerHTML += `There is a two-pair<br>`;
        }
      }
    }
    if (howManyDice === 2) { // we check after the counting is done if it is equal to '2'
      document.querySelector("#report").innerHTML += `There are a pair of ${dieVal}s<br>`;  // if yes, we report a pair
    }
    if (howManyDice === 3) { // we check after the counting is done if it is equal to '3'
      document.querySelector("#report").innerHTML += `There are a three of ${dieVal}s<br>`;  // if yes, we report a three
    }
    if (howManyDice === 4) { // we check after the counting is done if it is equal to '4'
      document.querySelector("#report").innerHTML += `There are a four of ${dieVal}s<br>`;  // if yes, we report a four
    }
    if (howManyDice === 5) { // we check after the counting is done if it is equal to '5'
      document.querySelector("#report").innerHTML += `There are a yacht of ${dieVal}s<br>`;  // if yes, we report a yacht
    }
  }

// two pairs at once, like 3 6 5 3 5 - called two-pairs;
// pair and three at once, like 1 6 6 1 6 - called full-house;
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.
}

//
// report the results in the div with the ID 'report'.
report();
