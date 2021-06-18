$(document).ready(function(){
	$('#product-arrow').click(function(){
		$(this).toggleClass('rotation-down');
		$(this).toggleClass('rotation-up');

		$('.sub-menu').toggleClass('swing-out-top-bck');
		$('.sub-menu').toggleClass('swing-in-top-fwd');
	});
});