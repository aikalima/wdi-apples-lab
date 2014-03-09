var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.orderProperty = 'title';

  $scope.cart = [];

  $scope.addToCart = function(aBook) {
    $scope.cart.push(aBook);
  }

  $scope.clearCart = function() {
    $scope.cart = [];
  }

  $scope.cartTotal = function() {
    var total = 0.0;
    angular.forEach($scope.cart, function(item, key){
      total += item.price;
    });
    return total;
  }

};
