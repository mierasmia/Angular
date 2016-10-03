(function () {
  'use strict'

  angular.module ("LunchCheck", [])

  .controller ('LunchCheckController', function ($scope){

    $scope.name ="";
    $scope.message= "";
    $scope.array = "";
    $scope.pressedButton = function()
    {
      $scope.array= $scope.name.split(',');
      if ($scope.array.length <=3)
      {
        $scope.message="Enjoy it";
      }
      else
        { $scope.message= "Too Much!";
      
      }
    }


  });

})();