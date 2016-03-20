var navigation = responsiveNav(".header-menu",{
    label: "",
});


$(function(){
    $('.nav-toggle').addClass('fa fa-bars');

    $("#pictures").responsiveSlides({
        speed: 1000,
        nav: true,
        prevText: "",
        nextText: "",   
        navContainer: ".slide-navs",
        namespace: "slide"
    });


});
$(document).ready(function(){
    new GMaps({
      div: '#map',
      lat: -12.043333,
      lng: -77.028333
    });
});