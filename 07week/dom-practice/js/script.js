'use strict';

  window.onload = function(){
    // listCount();
    // itemAlert();
    // insertItemCounter();
    // insertAddItem();
    // insertRemoveItemExistingItems();
    // var counts = document.getElementsByTagName('ul');
    // console.log(counts[0].children.length);
    var count = document.querySelectorAll('li')
      console.log(count.length);

      document.querySelector('h1').insertAdjacentHTML("afterEnd",
    "<h2> You have " + count.length + " items in your shopping cart </h2>");
  }
  // function listCount() {
  //   let list = document.getElementByTagName("ul");
  //   return list[0].children.length;
  // }
  // function itemAlert() {
  //   let list = document.getElementByTagName("ul");
  //   alert("there are " + listCount() + "items in your shopping cart");
  // }
  // function insertAddItem() {
  //   var newInput = document.createElement('input');
  //   newInput.setAttribute("placeholder", "Type to add");
  //   let cart = document.getElementByTagName("ul");
  //   cart[0].after(newInput);
  //   newInput.setAttribute("id", "input-text")
