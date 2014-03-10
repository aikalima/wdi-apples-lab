var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.orderProperty = 'title';

  $scope.cart = [];

  $scope.addToCart = function(aBook) {
    var itemInCart = _.findWhere($scope.cart, {book: aBook});
    if (itemInCart != undefined){
      var index = _.indexOf($scope.cart, itemInCart);
      $scope.cart[index].count = $scope.cart[index].count + 1;
    } else {
      var cart_item = {
        book: aBook,
        count: 1
      };
      $scope.cart.push(cart_item);
    }
  };

  $scope.clearCart = function() {
    $scope.cart = [];
  };

  $scope.cartTotal = function() {
    var total = 0.0;
    _.each($scope.cart, function(cart_item, key){
      total += cart_item.book.price * cart_item.count;
    });
    return total;
  };

  $scope.itemCount = function() {
    var total = 0;
    _.each($scope.cart, function(cart_item, key){
      total += cart_item.count;
    });
    return total;
  };

};
