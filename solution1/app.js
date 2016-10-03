(function () {
  'use strict'

  angular.module ("LunchCheck", [])

  .controller ('LunchCheckController', function ($scope){

    $scope.name ="";
    $scope.message= "";
 
    $scope.pressedButton = function()
    {
      $scope.array= $scope.name.split(',');
      console.log ($scope.array.length);

      if (($scope.array.length <=3 ) )
      {
         if($scope.array == "")
          { 
            $scope.message="Please insert data first";
          }
          else
          {

            $scope.message="Enjoy it";
          }
      }
      else
      {
       
        $scope.message= "Too Much!";
      
      }
    }


  });

})();