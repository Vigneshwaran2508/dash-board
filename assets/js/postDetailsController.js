var app = angular.module('myApp', []);
app.controller('myController', function($scope,$http) {
  $scope.name=sessionStorage.getItem("name")  
  var id=sessionStorage.getItem("selectedPostId")
    var url="https://jsonplaceholder.typicode.com/posts/"+id
    $http.get(url)
    .then(function(response) {
      $scope.post = response.data;
    });

});

function update(){
  var updateId=sessionStorage.getItem("selectedPostId")
  var updatetext=document.getElementById('textbody').value
  console.log(updatetext)  
  fetch('https://jsonplaceholder.typicode.com/posts/'+updateId, {
    method: 'PUT',
    body: JSON.stringify({
      id: updateId,
      body: updatetext
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {
    if(json!=null){
      document.getElementById('save').innerHTML="Post updated successfully"
    }
    else{
      document.getElementById('save').innerHTML="Post updated failed"
    }
   
  })

}