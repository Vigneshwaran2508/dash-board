//sessionStorage.setItem("userId", "1");

var userId=sessionStorage.getItem("userId")

var app = angular.module('myApp', []);
app.controller('myController', function($scope,$http) {
$scope.idKey="tr"
    $scope.name=sessionStorage.getItem("name")
    var posts="https://jsonplaceholder.typicode.com/posts/?userId="+userId;
    $http.get(posts)
    .then(function(response) {
      $scope.noOfPosts = response.data.length;
      $scope.myPosts= response.data;
      console.log($scope.myPosts);
      
      $scope.noOfComments=0;
      for (var i = 0; i < $scope.myPosts.length; i++) {
         var postId = $scope.myPosts[i].id;
        var comments='https://jsonplaceholder.typicode.com/comments?postId='+postId;
        $http.get(comments)
        .then(function(res) {
          //console.log(res.data.length);
          $scope.noOfComments = $scope.noOfComments + res.data.length;
          //console.log($scope.noOfComments);
        });
      }
    });



    var todos="https://jsonplaceholder.typicode.com/todos/?userId="+userId;
    $http.get(todos)
    .then(function(response) {
      $scope.noOfToDo = response.data.length; 
      //console.log(response.data);
      $scope.myToDo=response.data;
      console.log($scope.myToDo)
   });
          
});

function storeId(){
  console.log(event.target.id);
  sessionStorage.setItem("selectedPostId",event.target.id);
  location.href="./post.html"
}

function deletePost(obj){
  console.log(obj.id);
  
  var url="https://jsonplaceholder.typicode.com/posts/"+obj.id;
  fetch(url, {
  method: 'DELETE',
  })
  .then(res=>{
    console.log(res)
    if(res.status==200)
    document.getElementById(obj.id+"tr").remove()
  }) 
  
}