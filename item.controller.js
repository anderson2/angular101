(function() {

  angular
    .module('app')
    .controller('ItemController', ItemController);

  function ItemController() {
    var vmItem = this;  // vm = ViewModel
    vmItem.name = 'the first item';
  }


})();

