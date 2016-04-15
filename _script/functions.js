var navigation = responsiveNav(".header-menu",{
    label: "",
});


$(function(){
    $('.nav-toggle').addClass('fa fa-bars');

    $("#pictures").responsiveSlides({
        speed: 3000,
        timeout: 7000,
        nav: true,
        prevText: "",
        nextText: "",   
        navContainer: ".slide-navs",
        namespace: "slide"
    });
    $("#pictures2").responsiveSlides({
        speed: 3000,
        timeout: 7000,
        nav: true,
        prevText: "",
        nextText: "",   
        navContainer: ".slide-navs2",
        namespace: "slide"
    });
    $("#pictures3").responsiveSlides({
        speed: 3000,
        timeout: 7000,
        nav: true,
        prevText: "",
        nextText: "",   
        navContainer: ".slide-navs3",
        namespace: "slide"
    });


    $("#modal").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });

});



// $('.nav-boton').bind('click', function(e){
//   // $(this).children('.sub-nav').slideToggle('fast');  // apply the toggle to the ul
//   $(this).parent().find('.sub-nav').slideToggle('fast');  // apply the toggle to the ul
//   $(this).parent().toggleClass('is-expanded');
//   e.preventDefault();
// });




// $('.subnav-boton').bind('click', function(e){
//   $(this).parent().find('.subsub-nav').slideToggle('fast');  // apply the toggle to the ul
//   $(this).parent().toggleClass('is-expanded');
//   e.preventDefault();
// });





var casaMatriz = (function () {
  var myLatlng = new google.maps.LatLng(-25.315698,-57.598417),
      mapCenter = new google.maps.LatLng(-25.3109434,-57.6017266),
      mapCanvas = document.getElementById('mapa'),
      mapOptions = {
        center: mapCenter,
        zoom: 13,
        // scrollwheel: false,
        draggable: true,
        disableDefaultUI: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(mapCanvas, mapOptions),
      contentString =
        '<div class="content">'+
        '<div class="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">Vidrioluz</h2>'+
        // '<div class="bodyContent"'+
        // '<p>Avda. Curupayty c/Adrián Jara, Edif.Globo P.B.</p>'+
        // '</div>'+
        '</div>',
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
      }),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Casa Matriz'
      });

  return {
    init: function () {
      map.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 60}
        ]}
      ]);

      // google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map,marker);
      // });
    }
  };
}());

