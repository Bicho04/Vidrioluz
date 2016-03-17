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
