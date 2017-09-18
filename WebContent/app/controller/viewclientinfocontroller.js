define(['app','service/viewclientinfoservice'], function (app) {
	app.controller('viewclientinfocontroller', ['$scope', '$http','ViewClientInfo', function($scope, $http,ViewClientInfo) {
		
		initclientInformation();
		$scope.viewRecords = false; 
		$scope.countryselection = {};
		$scope.clientList = {};
		
		function initclientInformation(){
			
			//Load the client data - Service will be called to get the client Information
			ViewClientInfo.getClientList().then(function(response) {
				 $scope.clientList = ViewClientInfo.response;
				});
			
    	}
		
		//Client Data on the basis of the country selection
		$scope.ctrySelected = function(ctrySelected){
			$scope.viewRecords = true;
			if(ctrySelected.code == 'CA'){
				$scope.showClientDataList = $scope.clientList.CA;
			}else
				{
				$scope.showClientDataList = $scope.clientList.US;
			}
		}

		
	}]);
});