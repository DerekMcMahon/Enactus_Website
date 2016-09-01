//Will hide the navbar whenever scrolling down, show again when scrolling up
var didScroll;
var lastScrollTop = 0;
var navbarHeight = 90;
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  	var st = $(this).scrollTop();
  	if(st > lastScrollTop && st > navbarHeight){
  		//They scrolled down
      $(".navbar-collapse").collapse('hide');
  		$('header').removeClass('nav-down').addClass('nav-up');
  	} else {
  		if(st + $(window).height() < $(document).height()) { 
    		$('header').removeClass('nav-up').addClass('nav-down');
  		}
  	}
  	lastScrollTop = st;
}