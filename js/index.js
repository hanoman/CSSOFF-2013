$( document ).ready(function() {

    // Remove Map image if not supported
    if(!Modernizr.csstransitions) {
        $('#map_toggle').remove();
    }

    // Google Maps
    var camden = new google.maps.LatLng(51.532135,-0.177917);
        var studios = new google.maps.LatLng(51.532135,-0.177917);
        var marker;
        var map;

        function initialize() {
          var mapOptions = {
            zoom: 16,
            disableDefaultUI: true,
            center: camden
          };

          map = new google.maps.Map(document.getElementById('map-canvas'),
                  mapOptions);

          marker = new google.maps.Marker({
            map:map,
            draggable:true,
            animation: google.maps.Animation.DROP,
            position: studios
          });
          google.maps.event.addListener(marker, 'click', toggleBounce);
        }

        function toggleBounce() {

          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }

        google.maps.event.addDomListener(window, 'load', initialize);

                google.maps.event.addDomListener(window, "resize", function() {
         var center = map.getCenter();
         google.maps.event.trigger(map, "resize");
         map.setCenter(center);
        });



    // CSS Animation
    $('#css_logo').addClass('animated fadeIn');
    $('#box_model').addClass('animated fadeInLeft');
    $('#positioning_rel').addClass('animated fadeInRight');
    $('#overflow_heading').hover(function() {
        $(this).toggleClass('animated swing');
    });

});