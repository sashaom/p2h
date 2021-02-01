
$(document).ready(function(){
    
        var burgerMenu = $('#burgerMenu');
        var headerMenu = $('.mob-menu');
        var headerLogo = $('.header-logo');
        
		function toggleMenu() {
            burgerMenu.toggleClass('bars_active');
            headerLogo.toggleClass('mob_active');
			headerMenu.toggleClass('header-menu-wrap_active');
			$('body').toggleClass('overflow-hidden')
		  }
		burgerMenu.click(toggleMenu);
		 
		$(".mob-menu__link").click(function(){
			$('html, body').removeClass('overflow-hidden');
			burgerMenu.toggleClass('bars_active');
			headerMenu.toggleClass('header-menu-wrap_active');	
		});


        $(".owl-carousel").owlCarousel({
            items: 3,
            loop: true,
            nav: false,
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            responsive : {
                1024 : {
                    items: 3,
                },
                768 : {
                    items: 2,
                },
                375 : {
                    items: 1,
                },
                320 : {
                    items: 1,
                },
            }
            
        });
  });

