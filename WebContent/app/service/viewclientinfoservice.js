define(['angularAMD'], function (angularAMD) {
	angularAMD.factory('ViewClientInfo', function ($http,$q) {
        
		var viewClientInfo = {}; 
		viewClientInfo.response = {};
		 
		viewClientInfo.getClientList = function(){

			var deferred = $q.defer();
			
			$http.get("app/mock-json/clientList.json").success(function(response) {
				viewClientInfo.response = response;
				deferred.resolve();
			}).error(function (){
				deferred.reject("No data found corresponding to the request"); 
			});
			
			// Once you have your Rest Service up, please use the below code to access the same
			/*
			var request = {
				method : 'POST',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : queryData,
				url : '/services/clientList'
			}
    		$http(request).success(function(response){
    			viewClientInfo.response = response;
    			deferred.resolve();
    		}).error(function(){
    			deferred.reject("No data found corresponding to the request");
    		});*/
			
    		return deferred.promise;
		};
		
		return viewClientInfo;
});

});
