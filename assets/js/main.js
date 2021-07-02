$(function() {
    //===== Prealoder
    $(window).on('load', function(event) {
        $('.preloader').delay(600).fadeOut(500);
    });
    
    //===== Sticky
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo.svg");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-area img").attr("src", "assets/images/logo-2.svg");
        }
    });

    //===== Section Menu Active
    let scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        let scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            let sectionOffset = $(this.hash).offset().top - 200;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    //===== close navbar-collapse when a  clicked
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
        $(".navbar-collapse").removeClass("show");
    });

    //===== Back to top
    //Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 350){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });

    //===== Animate the scroll to yop
    function animateScrollToHref (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top,
        }, 700, "easeInOutQuint");
    }

    $('.go-href').on('click', animateScrollToHref);

    //===== jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -60)
                }, 700, "easeInOutQuint");
                return false;
            }
        }
    });

    $('.container').imagesLoaded(function () {
        let $grid = $('.grid').isotope({transitionDuration: '0.7s'});
        $('.portfolio-card-menu ul').on('click', 'li', function () {
            let filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        $('.portfolio-card-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });

});