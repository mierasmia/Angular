(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController (ShoppingListCheckOffService)
{
	var FromList =this;
	FromList.items = ShoppingListCheckOffService.toBuy;
	FromList.moveItem = function (itemIndex ) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };


}

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService)
{
	var ToList =this;
	ToList.items = ShoppingListCheckOffService.bought;

}
function ShoppingListCheckOffService()
{
	var service=this;
	var toBuy= [{name: 'cookies', quantity:10},
	            {name: 'Chocolate', quantity:5},
	            {name: 'yogurt', quantity:3},
	            {name: 'apples', quantity: 4},
	            {name: 'oranges', quantity: 6}];

	 var bought=[];
	 service.toBuy=toBuy;
     service.bought=bought;

	 service.moveItem = function (itemIndex) {
	
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex, 1);
     };

 }


})();