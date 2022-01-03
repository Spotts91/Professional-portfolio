$(document).ready(function(){
    $(window).scroll(function(){
    // sticky navbar on sroll script
    if(this.scrollY > 20){
        $('navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }

            // scroll-up button show/hide script
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
    });

    // slidie-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        //remove smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('..navbar.menu li a').click(function(){
        //reapplying smooth scroll on menu item click
        $('.html').css("scrollBehavior", "smooth");
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar.menu').toggleClass("active");
        $('.menu-btn-img').toggleClass("active");
    });
    //Typing text animation script
    var i=0;
    var txt = 'Software Engineer';
    var speed = 100;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typing-2").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav:false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});                                                              