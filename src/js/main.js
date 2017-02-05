$(document).ready(function() {
	$("nav#mainMenu ul").removeClass("visibleMenu");

	$("nav#mainMenu h2").click(function () {
		$("nav#mainMenu ul").toggleClass("visibleMenu");
	});
});
