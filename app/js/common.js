var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
	forEach(hamburgers, function(hamburger) {
		hamburger.addEventListener("click", function() {
			this.classList.toggle("is-active");
			$('.main-menu').toggleClass('mobile-menu');
		}, false);
	});
};

$('[data-fancybox]').fancybox();

$('.first-section__slider').owlCarousel(({
    loop:true,
    margin:10,
    nav:false,
    items: 1
})
);

$('.video-slider').owlCarousel(({
    loop:true,
    margin:10,
    nav:false,
    animateOut: 'slideOutDown',
    animateIn: 'fadeIn',
    smartSpeed:750,
    items: 1
})
);

$('.section-account__slider').owlCarousel(({
	loop: true,
	margin: 0,
	nav: true,
	items: 1,
	dots: true,
	navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>']
})
);

$('#section-partner').owlCarousel(({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
);

//Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
	var owl=$(".owl-carousel");
	owl.owlCarousel();
	//$(".next") - находим нашу кнопку
	$(".myNext").click(function(){
		owl.trigger("next.owl.carousel");
	});
	$(".myPrev").click(function(){
		owl.trigger("prev.owl.carousel");
	});



$('.section-acord__item').click(function() {
	 $(this).find('.section-acord__description').find('.section-acord__hidden').toggleClass('section-acord__open');
	 	 $(this).find('.section-acord__span').toggleClass('active');
});




wow = new WOW(
{
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
    )
wow.init();

$(window).on('load', function () {
    var $preloader = $('.l-wrap'),
        $svg_anm   = $preloader.find('.loader');
    $svg_anm.fadeOut();
    $('body').removeClass('full-screen');
    $preloader.delay(500).fadeOut('slow');
});