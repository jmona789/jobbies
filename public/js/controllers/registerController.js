angular.module("jobbiesApp").controller('RegisterController', ['$scope', '$http', function($scope, $http) {

  $scope.register = function () {
        $http.post('/register', {
            email: $scope.email,
            password: $scope.password
        })
            .then(function successCallback(response) {
                console.log("success");
                console.log(response.data);
                $scope.email = '';
                $scope.password = '';
            }, function errorCallback(response) {
            console.log('failed');
            $scope.email = '';
            $scope.password = '';
          });
  }

  $scope.login = function () {
    $http.post('/login', {
        email: $scope.email,
        password: $scope.password
      })
      .then(function successCallback(response) {
        console.log("success");
        console.log(response.data);
        $scope.email = '';
        $scope.password = '';
        $scope.username = response.data.username;
      }, function errorCallback(response) {
        console.log('failed');
        $scope.email = '';
        $scope.password = '';
      });
  }

}]);
