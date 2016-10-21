$(function() {
	$('.contact-support').click(function(){
	  Intercom('showNewMessage', 'My message');
	  return false; 
	});
});
