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
    alert('You have ' + count.length + ' items in your shopping cart!');
    insertAddItem();
    AddItem();
    DeleteItem();
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
    let cart = document.getElementsByTagName('ul');
    cart[0].after(newInput);
    newInput.setAttribute("id", "input-text")
  }
  function AddItem() {
    var button = document.createElement('input');
    button.setAttribute("type", "button");
    button.setAttribute("value", "Add");
    button.setAttribute("id", "add");
    let cart = document.getElementById('input-text');
    cart.after(button);
    var a = document.getElementById('input-text').value;
    button.onclick = function(event){
      create();
    }
  }
  function DeleteItem() {
    var button2 = document.createElement('input');
    button2.setAttribute("type", "button");
    button2.setAttribute("value", "Delete");
    button2.setAttribute("id", "delete");
    let cart = document.getElementById('add');
    cart.after(button2);
    button2.onclick = function(event){
      deletea();
    }
  }
    // button2.onclick = document.removeChild(document.getElementsByTagName('ul').lastChild);
  function create() {
    let ls = document.createElement('li');
    let cart = document.getElementsByTagName('ul');
    cart[0].appendChild(ls);
  }
  function deletea() {
    var dl = document.getElementsByTagName('ul');
    dl.removeChild(dl.lastChild);
  }
