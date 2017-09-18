define([ 'angularAMD' ], function(angularAMD) {
	angularAMD.directive('countrySelect', function() {
		var directive = {};

		directive.restrict = 'E'; /* restrict this directive to elements */
		directive.templateUrl = "app/view/countrySelection.html";

		return directive;
	})
});