'use strict';

  window.onload = function(){
    // listCount();
    // itemAlert();
    // insertItemCounter();
    // insertAddItem();
    // insertRemoveItemExistingItems();
    // var counts = document.getElementsByTagName('ul');
    // console.log(counts[0].children.length);
    var count = document.querySelectorAll('li');
      console.log(count.length);
      document.querySelector('h1').insertAdjacentHTML("afterEnd",
    "<h2> You have " + count.length + " items in your shopping cart </h2>");
    alert("There are " + count.length + " items in your shopping cart!");
    insertAddItem();
  }
  // add list item
  // function changeText1() {
  //   var element = document.getElementById('addl');
  //   var cont = document.createElement('li');
  //   cont.appendChild(document.createTextNode("placeholder"));
  //   element.appendChild(cont);
  // }
  // // delete last item
  // function changeText2() {
  //   var element = document.getElementById('addl');
  //   var last = element.lastChild;
  //   element.removeChild(last);
  // }
// button.onclick = methodName;
  function insertAddItem() {
    var newInput = document.createElement('input');
    newInput.setAttribute("placeholder", "Type to add");
    let cart = document.getElementByTagName("ul");
    cart[0].after(newInput);
    newInput.setAttribute("id", "input-text")
  }
  function AddItem() {
    var button = document.createElement('input');
    button.setAttribute("input")
  }
