// $(window).load(function () {
// 	// will first fade out the loading animation
// 	$('#loader').fadeOut('slow', function () {
// 		// will fade out the whole DIV that covers the website.
// 		$('#preloader').delay(300).fadeOut('slow');
// 		$('body').delay(350).css({ overflow: 'visible' });
// 	});
// 	$('body').delay(350).css({ overflow: 'visible' });
// });

$(window).on('load', function () {
	// makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({ overflow: 'visible' });
});
var $headline = $('.headline'),
	$inner = $('.inner'),
	$nav = $('nav'),
	navHeight = 75;

// $(window).scroll(function () {
// 	var scrollTop = $(this).scrollTop(),
// 		headlineHeight = $headline.outerHeight() - navHeight,
// 		navOffset = $nav.offset().top;

// 	$headline.css({
// 		opacity: 1 - scrollTop / headlineHeight,
// 	});
// 	$inner.children().css({
// 		transform: 'translateY(' + scrollTop * 0.4 + 'px)',
// 	});
// 	if (navOffset > headlineHeight) {
// 		$nav.addClass('scrolled');
// 	} else {
// 		$nav.removeClass('scrolled');
// 	}
// });

const ps = document.querySelectorAll('p');
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
  }
});

ps.forEach(p => {
  observer.observe(p);
});

