
var app = angular.module("bookStore", [])
           
app.controller('indexController', function myFunction($scope, $http) {
   $http.get('bookService.json')
   .then(function(result) {
      
       $scope.bookList = angular.fromJson(result.data);
     
   });
   
  $scope.addToCart = function (item) {
        alert("book name: "+ item.bookName +"\n"+ "price: " + item.price +"\n"+"Author: "+ item.author+ "\n Press 'OK' to buy");
    };
});