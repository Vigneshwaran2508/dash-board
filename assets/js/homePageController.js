//console.log(sessionStorage.getItem("loggedIn"))
if(sessionStorage.getItem("loggedIn")==null)
sessionStorage.setItem("loggedIn",false)

var app = angular.module('myApp', []);
app.controller('myController', function($scope,$http) {
    $scope.loggedIn=sessionStorage.getItem("loggedIn")
    $scope.name=sessionStorage.getItem("name")
    console.log(typeof $scope.loggedIn)
    $scope.login=function name(userName,emailAddress) {
        var url="http://jsonplaceholder.typicode.com/users/?username="+userName+"&email="+emailAddress
        $http.get(url)
        .then(response=>{
            if(response.data.length==1)
            {
                sessionStorage.setItem("loggedIn",true)
                sessionStorage.setItem("userId", response.data[0].id);
                sessionStorage.setItem("name", response.data[0].name);
                $scope.name=sessionStorage.getItem("name")
                
                location.href='./dashboard.html'
                
            }
            else{
                console.log("login unsucessful")
                document.getElementById('login').innerHTML='Login Unsuccessful'

            }
        })
    }
    
    $scope.logout=function name() {
        sessionStorage.clear()
        location.reload()
    }
    
})