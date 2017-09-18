Client Inventory is project that can utilisied by the companies requiring to maintain the crutial data of there client's and require a user friendly GUI that can be effectively used by there worker's. The Project is being created over AngularJS following the MVC Model to ease the development and maintenance of the project.This demo project will also show the usage of filters,directives and service call in angularjs framework. The data sent and retrieved will be in the form of JSON(Java Script Object Notation) and will be helpful to handle Restful services.

Also used the "tinymce" plugin to incorporate the features of rich text editor which enhances the performance of the application too to handle the information user wants to save for future reference. For sending mails, service is being added that can be useful to the one's requiring this feature in there application.

This is a single page application where on the basis of the selection made by the user the panel will get displayed.

The application is being divided into three section maintain the client inventory information.

    View client data -> We can search the data on the basic of the country being selected in the dropdown section. -> Countries are coming from the JSON file , using the below mentioned code. We can put the service call here to access the data from database when required.

         $http.get("app/mock-json/country.json").success(function(response) {
     		$scope.countryselection = response;
     		}).error(function (errorMessage){
     			$scope.errorMessage = errorMessage; 
     		});

-> The screen also provides user the facility to search over the table records depending upon the search keyword entered in the filter text area. (It has been done by using filter directive of angular. Ref. : viewclientinfo.html)

    Add client data -> This section is being used to add the client data and save it in database. -> TinyMCE is being used for rich text editor over the section for saving comments for the client by the user.

TinyMCE is a JavaScript library for platform independent 'WYSIWYG' or rich text editing. It is released as open source under the LGPL. https://www.tinymce.com/

    Mail Client -> This section will be used to email the client and TinyMCE is again used to have the rich text editing feature over the section.

    Controller's will hold the controlling logic for each view(html) in the application.
    
I have created custom directive to use country selection template in View Client and Add Client screen.Custom directives are used in AngularJS to extend the functionality of HTML. Custom directives are defined using "directive" function. A custom directive simply replaces the element for which it is activated. 

AngularJS application during bootstrap finds the matching elements and do one time activity using its compile() method of the custom directive then process the element using link() method of the custom directive based on the scope of the directive. 

directive.js

define([ 'angularAMD' ], function(angularAMD) {
	angularAMD.directive('countrySelect', function() {
		var directive = {};

		directive.restrict = 'E'; /* restrict this directive to elements */
		directive.templateUrl = "app/view/countrySelection.html";

		return directive;
	})
});

To use the country selection template we need to add the following statement in the corresponding html wherever its being required.

<country-Select></country-Select>

This will help us add the directive inside the view and can be reused in different screens.

Concept of Dependency Injection Using services

Dependency injection is a technique whereby one object supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it. AngularJS services are substitutable objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app. AngularJS services are: Lazily instantiated – AngularJS only instantiates a service when an application component depends on it.

I have created one service as "ViewClientInfo" where i have written the implementation to get the client data.This service can be used in any page wherever its being required and can be injected within it.

Below its being shown how i have injected the service"ViewClientInfo" in the controller "viewclientinfocontroller" :

define(['app','service/viewclientinfoservice'], function (app) {
	app.controller('viewclientinfocontroller', ['$scope', '$http','ViewClientInfo', function($scope, $http,ViewClientInfo) { 
	....
	}
}

In AngularJS, services are reusable singleton objects that are used to organize and share code across our app. 
They can be injected into controllers, filters, directives. AngularJS provides us three ways : service, factory and provider to create a service. I have used factory to create my service as shown below :

define(['angularAMD'], function (angularAMD) {
	angularAMD.factory('ViewClientInfo', function ($http,$q) {
	....
	}
}




