(function() {
    
    angular
        .module('app')
        .controller('CollectionController', CollectionController);
        
    function CollectionController() {
        var vmCollection = this;  // vm = ViewModel
        vmCollection.name = 'my awesome basic collection';
        vmCollection.item = 'Awesome new item';
        vmCollection.counter = 0;

        vmCollection.addItem = addItem;
        vmCollection.viewCollection = viewCollection;

        vmCollection.items = [];

        function addItem() {
            vmCollection.items.push(vmCollection.item );
            vmCollection.counter++;
            vmCollection.item = '';
        }

        function viewCollection() {

        }
    
    }


})();

