// stiky Navbar 
$(window).scroll(function(){
    if($('.navbar').offset().top>50){
        $('.navbar-fixed-top').addClass('stikyAdd');
    }
    else{
        $('.navbar-fixed-top').removeClass('stikyAdd');
    }
}); 

// Using Wow js Animation
new WOW().init();