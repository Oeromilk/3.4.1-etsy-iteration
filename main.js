(function(){
  "use strict";

// Question one.
// The function to return the total price of the items.
var itemTotal = items.reduce(function(total, item){
  //console.log(item.price);
  return total + item.price;
}, 0);

// The log that will tell us the average price of items divided by the amount
// of items in the array.
console.log('The average price is: ' + (itemTotal/items.length).toFixed(2) );

// Question two. Pulling out the objects in the array that meet the parameters.
var filteredItems = items.filter(function(item){
  return item.price > 14 && item.price < 18;
});

// Only pulling the title out of the object.
filteredItems.map(function(item){
  console.log('Title: ' + item.title);
});

// Question 3.
// Filtering out the items that have a currency_code of GBP.
var currency = items.filter(function(item){
  return item.currency_code === 'GBP';
});

// Using map to pull the title and price out of the object.
currency.map(function(item){
  console.log(item.title + ' costs ' + item.price);
});

// Question 4.

var woodenItems = items.filter(function(item){
  return item.materials.includes('wood');
});

woodenItems.map(function(item){
  console.log(item.title + ' is made of wood');
});


})();
