var Main = function() {
	var member = null;

	function init() {
		$(document).ready(myPrivateMethod);
	}

	function myPrivateMethod() {
		console.log("jQuery says document is ready.");
	}

	return {
		init:init
	};
}();

Main.init();