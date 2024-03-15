jQuery(function ($) {
	'use strict';

	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.top-bar').outerHeight();
			var headerOneTopSpace = $('.header-one .logo-area').outerHeight();

			var headerOneELement = $('.header-one .site-navigation');
			var headerTwoELement = $('.header-two .site-navigation');

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass('navbar-fixed');
				$('.header-one').css('margin-bottom', headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass('navbar-fixed');
				$('.header-one').css('margin-bottom', 0);
			}
			if ($(window).scrollTop() > headerTopBar) {
				$(headerTwoELement).addClass('navbar-fixed');
				$('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
			} else {
				$(headerTwoELement).removeClass('navbar-fixed');
				$('.header-two').css('margin-bottom', 0);
			}
		}
		fixedHeader();


		// Count Up
		function counter() {
			var oTop;
			if ($('.counterUp').length !== 0) {
				oTop = $('.counterUp').offset().top - window.innerHeight;
			}
			if ($(window).scrollTop() > oTop) {
				$('.counterUp').each(function () {
					$('.member-block-1').addClass('circle-member1')
					$('.member-block-2').addClass('circle-member2')
					$('.member-block-3').addClass('circle-member3')
					$('.member-block-4').addClass('circle-member4')
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 1000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
			}
		}
		counter();


		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 50) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});


	$(document).ready(function () {
		
		function counter(){
			$('.counterUp').each(function () {
				$('.member-block-1').addClass('circle-member1')
				$('.member-block-2').addClass('circle-member2')
				$('.member-block-3').addClass('circle-member3')
				$('.member-block-4').addClass('circle-member4')
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
		counter()

		// navSearch show/hide
		function navSearch() {
			$('.nav-search').on('click', function () {
				$('.search-block').fadeIn(350);
			});
			$('.search-close').on('click', function () {
				$('.search-block').fadeOut(350);
			});
		}
		navSearch();

		// navbarDropdown
		function navbarDropdown() {
			if ($(window).width() < 992) {
				$('.site-navigation .dropdown-toggle').on('click', function () {
					$(this).siblings('.dropdown-menu').animate({
						height: 'toggle'
					}, 300);
				});
				var navbarHeight = $('.site-navigation').outerHeight();
				$('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
			}
		}
		navbarDropdown();


		function nvabarClick(){
			$('button#navbarMenu').click(function(){
				if( $(this).attr("aria-expanded") === "false"){
					$('div.logo-main').fadeOut()
					$('div.login-logo').fadeIn()
				}else{
					$('div.logo-main').fadeIn()
					$('div.login-logo').fadeOut()
				}
			})
		}
		nvabarClick()

		// back to top
		function backToTop() {
			$('#back-to-top').on('click', function () {
				$('#back-to-top').tooltip('hide');
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		}
		backToTop();


		// banner-carousel
		function bannerCarouselOne() {
			$('.banner-carousel.banner-carousel-1').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				fade:true,
				autoplaySpeed:5000,
				speed: 600,
				arrows: false,
				cssEase: 'ease-in-out',
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fa fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fa fa-chevron-right"></i></button>'
			});
			$('.banner-carousel.banner-carousel-1').slickAnimation();
		}
		bannerCarouselOne();

		// banner Carousel Two
		function bannerCarouselTwo() {
			$('.banner-carousel.banner-carousel-2').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fa fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fa fa-chevron-right"></i></button>'
			});
		}
		bannerCarouselTwo();


		// pageSlider
		function pageSlider() {
			$('.page-slider').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fa fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fa fa-chevron-right"></i></button>'
			});
		}
		pageSlider();

		function TimelineSlider() {
			$('.timeline-slider').slick({
				rows: 1,
				dots: false,
				autoplay: false,
				infinite: false,
				speed: 1000,
				autoplaySpeed: 0,
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				draggable:false,
				pauseOnHover:false,
				cssEase: 'linear',
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fa fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fa fa-chevron-right"></i></button>',
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			});
		}
		TimelineSlider();

		// Shuffle js filter and masonry
		function projectShuffle() {
			if ($('.shuffle-wrapper').length !== 0) {
				var Shuffle = window.Shuffle;
				var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
					itemSelector: '.shuffle-item',
					sizer: '.shuffle-sizer',
					buffer: 1
				});
				$('input[name="shuffle-filter"]').on('change', function (evt) {
					var input = evt.currentTarget;
					if (input.checked) {
						myShuffle.filter(input.value);
					}
				});
				$('.shuffle-btn-group label').on('click', function () {
					$('.shuffle-btn-group label').removeClass('active');
					$(this).addClass('active');
				});
			}
		}
		projectShuffle();


		// testimonial carousel
		function testimonialCarousel() {
			$('.testimonial-slide').slick({
				slidesToShow: 2,
				slidesToScroll: 2,
				autoplay: true,
				dots: true,
				fade: false,
				autoplaySpeed: 5000,
				speed: 1000,
				pauseOnHover: true,
				draggable: true,
				arrows: true,
				prevArrow: '<button type="button" class="slick-nav-testimo carousel-control left" aria-label="carousel-control"><i class="fa-solid fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="slick-nav-testimo carousel-control right" aria-label="carousel-control"><i class="fa-solid fa-chevron-right"></i></button>',
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			}).slickAnimation()

		}
		testimonialCarousel();

		// team carousel
		function teamCarousel() {
			$('.team-slide').slick({
				rows: 3,
				dots: true,
				autoplay: true,
				infinite: true,
				speed: 1000,
				slidesToShow: 6,
				slidesToScroll: 6,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fa fa-arrow-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fa fa-arrow-right"></i></button>',
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
				]
			});
		}
		teamCarousel();

		// media popup
		function mediaPopup() {
			$('.gallery-popup').colorbox({
				rel: 'gallery-popup',
				transition: 'slideshow',
				innerHeight: '500'
			});
			$('.popup').colorbox({
				iframe: true,
				innerWidth: 600,
				innerHeight: 400
			});
		}
		mediaPopup();

		/** Media time zone */
		var addtime = [
			{ type: "ny", zone: "America/New_York" }, 
			{ type: "sp", zone: "America/Sao_Paulo" }, 
			{ type: "ld", zone: "Europe/London" }, 
			{ type: "db", zone: "Asia/Dubai" }, 
			{ type: "bk", zone: "Asia/Bangkok" }, 
			{ type: "hk", zone: "Asia/Hong_Kong" }, 
			{ type: "tk", zone: "Asia/Tokyo" }, 
			{ type: "sy", zone: "Australia/Sydney" }
		]
		gettime();
		function gettime() {
			for (var i = 0; i < addtime.length; i++) {
				var time = updateTime(addtime[i]['zone']);
				$(".clock_" + addtime[i]['type']).text(time);
			}
		}
		function addZero(i) {
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}
		function updateTime(tz) {
			var aestTime = new Date().toLocaleString("en-US", { timeZone: tz });
			let now = new Date(aestTime);
			var h = now.getHours("H");
			var m = addZero(now.getMinutes());
			return h + ":" + m;
		}
		setInterval(gettime, (1000 * 60))
		/** Media time zone */


		$('a.toggle-area').click(function(){
			var value = $(this).data("value")
			$('div.ourteam-set-'+value+' .no-mask').hide()
			$('div.ourteam-set-'+value).addClass("col-lg-12 col-md-12")
			$('div.ourteam-set-'+value).removeClass("col-lg-6")
			$('div.ourteam-set-'+value+' .ourteam-avatar').addClass("col-lg-2")
			$('div.ourteam-set-'+value+' .ourteam-avatar').removeClass("col-lg-4")
			$('div.ourteam-set-'+value+' .thumbnail').addClass("col-lg-10")			
			$('div.ourteam-set-'+value+' .thumbnail').removeClass("col-lg-8")			
			$('div.ourteam-set-'+value+' .thumbnail .mask').css({
				top: 0,
				display: "block"
			})
		})

		$('a.toggle-area-up').click(function(){
			var value = $(this).data("value")
			$('div.ourteam-set-'+value+' .no-mask').show()
			$('div.ourteam-set-'+value).removeClass("col-lg-12 col-md-12")
			$('div.ourteam-set-'+value).addClass("col-lg-6")
			$('div.ourteam-set-'+value+' .ourteam-avatar').removeClass("col-lg-2")
			$('div.ourteam-set-'+value+' .ourteam-avatar').addClass("col-lg-4")
			$('div.ourteam-set-'+value+' .thumbnail').removeClass("col-lg-10")			
			$('div.ourteam-set-'+value+' .thumbnail').addClass("col-lg-8")			
			$('div.ourteam-set-'+value+' .thumbnail .mask').css({
				top: "100%",
				display: "none"
			})
		})
		
	});


	/** Chart js */
	var time = [10,12,15,4,8,7,6,10,9,11,35,40];
	var ctx = document.getElementById("myLineChart");
		ctx.height = 80;
  
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
		labels: [ "Jan-5", "Feb-5", "March-5", "April-5", "May-5", "Jun-5", "July-5", "Aug-5", "Sep-5", "Otc-5", "Nov-5", "Dec-5"],
		datasets: [{
		  label:'',
		  data: time,
		  borderWidth: 1,
		  lineTension:0,
		  borderColor:['#00bd6d']
		}]
	  },
	  options: {
		legend:{display:false},
		scales: {
		  yAxes: [{
			ticks: {
			  beginAtZero:true
			}
		  }]
		}
	  }
	});
  

	/** Chart js */
	var ctx = document.getElementById("myFreightChart");
		ctx.height = 250;

	var myPieChart = new Chart(ctx,{
		type: 'doughnut',
		data: {
		datasets: [{
			label:'lo',
			data: [40, 90, 10],
			borderWidth: 1,
			lineTension:0,
			borderColor:['rgba(255, 255, 255, 0.5)','#00bd6d', ''],
			backgroundColor:['rgba(255, 255, 255, 0.5)','#00bd6d', '']
		}]
		},
		options: {
		tooltips: {
			mode: false,
			intersect :false 
		},
		hover: {
			mode: false,
			intersect: false
		},
		cutoutPercentage:75,
		legend:{display:false},
		scales: {
			yAxes: [{ display:false,
			ticks: {
				beginAtZero:true
			}
			}]
		}
		}
	});


	/** Chart js */
	var ctx = document.getElementById("myFreightChart2");
	ctx.height = 250;
	var myPieChart = new Chart(ctx,{
		type: 'doughnut',
		data: {
		datasets: [{
			label:'lo',
			data: [20,60],
			borderWidth: 1,
			lineTension:0,
			borderColor:['rgba(255, 255, 255, 0.5)','#00bd6d', ''],
			backgroundColor:['rgba(255, 255, 255, 0.5)','#00bd6d', '']
		}]
		},
		options: {
		tooltips: {
			mode: false,
			intersect :false 
		},
		hover: {
			mode: false,
			intersect: false
		},
		cutoutPercentage:75,
		legend:{display:false},
		scales: {
			yAxes: [{ display:false,
			ticks: {
				beginAtZero:true
			}
			}]
		}
		}
	});

  
	/** Chart js */
	var counties = [{
	values: {
		TH: '#1c9f59',
	/*
		AF: '#ffc959',
		US: '#ffc959',
		TH: '#ffc959',
	*/
	}
	}]

	$(function(){
		$('#jvectormap').vectorMap({
			map: 'world_mill',
			zoomOnScroll: false,
			hoverOpacity: 0.7,
			panOnDrag: true,
			markerStyle: {
				initial: {
					fill: '#FFD700',
					stroke: '#383f47'
				}
			},  
			series: {
			regions: counties
			},
			onRegionClick:function(event, code){
				var map = $('#jvectormap').vectorMap('get', 'mapObject');
				var name = map.getRegionName(code);
				window.location='show_member_search.html?region='+name
			},
		});

	});

});

$(window).on('load', function() {
	$('.msg-popup').modal('show');
});

/** disabled scroll */
/*
$('.timeline-slider').on('mouseover',function(){
  $('.timeline-slider').slick('slickPlay')
})
*/
$(".timeline-slider").on('wheel', (function(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY > 0) {
    $(this).slick('slickNext');
  }
}));

$('.timeline-slider').on('afterChange', function(e, s, currentIndex) {
  let index = currentIndex - 1;
  if(index === 1){
	$('.timeline-slider').lockscroll(false);
  }
});

$('.timeline-slider').on('beforeChange',function(e, s, currentIndex){
	let index = currentIndex - 1;
	if(index < 0){
		$('.timeline-slider').lockscroll(true, 'vertical');
	}else{
		$('.timeline-slider').lockscroll(false);
		$('.timeline-slider').css('z-index','-1')
	}
})


function scrollTo(target) {
    var offset;
    var scrollSpeed = 600;
        var wheight = $(window).height();
        //var targetname = target;
        //var windowheight = $(window).height();
        //var pagecenterH = windowheight/2;
        //var targetheight = document.getElementById(targetname).offsetHeight;

    if (viewport()["width"] > 767 && !jQuery.browser.mobile) {
        // Offset anchor location and offset navigation bar if navigation is fixed
        //offset = $(target).offset().top - document.getElementById('navigation').clientHeight;
                offset = $(target).offset().top - $(window).height() / 2 + document.getElementById('navigation').clientHeight + document.getElementById('footer').clientHeight;
    } else {
        // Offset anchor location only since navigation bar is now static
        offset = $(target).offset().top;
    }

    $('html, body').animate({scrollTop:offset}, scrollSpeed);
}

/*
  const triggers = [
	{ name: "timeline", from: 0, to: 2500 },
  ];
  
  function animationPercentage(trigger, scrollY) {
	if (scrollY < trigger.from) return 0;
	//if (scrollY > trigger.to) return 1;
	return (scrollY - trigger.from) / (trigger.to - trigger.from);
  }
  
  function updateTriggers(e) {
	$('section.historytimeline .timeline-slider .slick-track').css({
		transform: "translateX(250px)"
	})

	triggers.forEach(trigger => {
	  const property = `--${trigger.name}-animation`;
	  document.documentElement.style.setProperty(
		property,
		animationPercentage(trigger, window.scrollY)
	  );
		console.log(window.scrollY);
	  if( window.scrollY >= 1000){
		$('section.historytimeline .timeline-slider .slick-track').css({
			transform: "translateX(" + (980 - animationPercentage(trigger, window.scrollY) * 980) + "px)"
		})
	  }

	});
  }

  window.addEventListener("scroll", updateTriggers);
  updateTriggers();
*/
/** disabled scroll */


/** parallax */
/*
const parallaxElements = document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  parallaxElements.forEach((el) => {
    const top = el.offsetTop;
    el.style.transform = `translateY(-${ (y > top) ? y / 5 : 0 }px)`;
  });
});

const agnles = document.querySelectorAll('[data-agnles]');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  agnles.forEach((el) => {
    const top = el.offsetTop-700;
	if(screen.width > 768){
    	el.style.transform = `translateY(-${ (y > top) ? y / 6 : 0 }px)`;
	}
  });
});
/** parallax */

$('.tv-blog').mouseover(function() {
  $(this).find('.title-pre').css("display","block").addClass('text-blue animated');
});

$('.tv-blog').mouseleave(function() {
  $(this).find('.title-pre').css("display","none").removeClass('text-blue animated');
});


/*
var slickOptions = {
	autoplay: true,
},
$slick = $('.banner-carousel-1');
$slick.slick(slickOptions);
$slick.on('swipe', function(event, slick, direction) {
reinitSlick();
});
$('.slick-prev, .slick-next').on('click', function(){
	reinitSlick();
});
var reinitSlick = function() {    
	$slick.slick('slickSetOption', {
	'autoplay': false
	}, false);
}
*/

$('#login-click').click(function() {
    $('.login-nav-top').css("display", "block");
});
$('.close-icon').click(function() {
    $('.login-nav-top').css("display", "none");
});