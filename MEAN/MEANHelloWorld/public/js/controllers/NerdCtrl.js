// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdController', function($scope,Nerd) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    // Nerd.get().success(function(data){
    //   alert(data);
    // }).error(function(){
    //   alert(data);
    // })

});
