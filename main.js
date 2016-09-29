(function(){
  "use strict";

// The function to return the total price of the items.
var itemTotal = items.reduce(function(total, item){
  console.log(item.price);
  return total + item.price;
}, 0);

// The log that will tell us the average price of items divided by the amount
// of items in the array.
console.log('The average price is: ' + (itemTotal/items.length).toFixed(2) );

// Question two.
var distance = items.map(function(list, index){
  //console.log(list.title);
  return list.title;
});
console.log(distance);
})();
