var blog = angular.module("blog", ["ngRoute"]);

blog.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "ListController",
      templateUrl: "list.html"
    })
    .when("/post/:postId", {
      controller: "PostController",
      templateUrl: "post.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});

blog.controller("ListController", ["$http", "$scope", function($http, $scope) {
  $http({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts"
  }).then(function(response) {
    $scope.articles = response.data.slice(0,14);
  });
}]);

blog.controller("PostController", ["$http", "$scope", "$routeParams", function($http, $scope, $routeParams) {
  $http({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/" + $routeParams.postId
  }).then(function(response) {
    $scope.article = response.data;
  });
}]);
