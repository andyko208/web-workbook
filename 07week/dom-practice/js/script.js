'use strict';

  window.onload = function(){
    insertAddItem();
    AddItem();
    DeleteItem();
    var count = document.querySelectorAll('li');
    console.log(count.length);
    document.querySelector('h1').insertAdjacentHTML("afterEnd",
    "<h2> You have " + count.length + " items in your shopping cart </h2>");
    alert('You have ' + count.length + ' items in your shopping cart!');
  }
  function insertAddItem() {
    var newInput = document.createElement('input');
    newInput.setAttribute("placeholder", "Type to add");
    let cart = document.getElementsByTagName('ul');
    cart[0].after(newInput);
    newInput.setAttribute("id", "input-text");
  }
  function AddItem() {
    var button = document.createElement('input');
    button.setAttribute("type", "button");
    button.setAttribute("value", "Add");
    button.setAttribute("id", "add");
    let cart = document.getElementById('input-text');
    cart.after(button);
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
  function create() {
    let ad = document.getElementById('input-text').value;
    document.querySelector('ul').insertAdjacentHTML("beforeend",
    "<li>" + ad + "</li>")
    let count = document.querySelectorAll('li');
    console.log(count.length);
    document.querySelector('h1').insertAdjacentHTML("afterEnd",
    "<h2> You have " + count.length + " items in your shopping cart </h2>");
    let key = document.getElementById('key');
    key.removeChild(key.childNodes[3]);
  }
  function deletea() {
    var dl = document.getElementById('dec');
    dl.removeChild(dl.lastChild);
    let count = document.querySelectorAll('li');
    console.log(count.length);
    document.querySelector('h1').insertAdjacentHTML("afterEnd",
    "<h2> You have " + count.length + " items in your shopping cart </h2>");
    let key = document.getElementById('key');
    key.removeChild(key.childNodes[3]);
  }
