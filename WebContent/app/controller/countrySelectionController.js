define(['app'], function (app) {
	app.controller('countrySelectionController', ['$scope', '$http', function($scope, $http) {
		
		initInformation();
	
		$scope.countryselection = {};
				
		function initInformation(){
			
			//Load the Country selection
			$http.get("app/mock-json/country.json").success(function(response) {
				$scope.countryselection = response;
				}).error(function (errorMessage){
					$scope.errorMessage = errorMessage; 
				});
			
    	}
		
	}]);
});