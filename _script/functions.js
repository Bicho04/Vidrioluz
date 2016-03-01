var navigation = responsiveNav(".header-menu",{
    label: "M",
});

$(function(){

    $(".pictures").responsiveSlides({
        speed: 600,
        nav: true,
        prevText: "<",
        nextText: ">",   
        navContainer: ".slide-navs",
        namespace: "slide"
    });

});
