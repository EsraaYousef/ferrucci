function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        center: {
            lat: 21.554526,
            lng: 39.177674
        },
        zoom: 9
    };

    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(50);

    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Jadda', 21.554526, 39.177674]
    ];

    // Info window content
    var infoWindowContent = [
        [
            '<div class="info_content">' +
            '<div class="content">' +
            '<h5>شركة فروتشي</h5>' +
            '</div>' +
            '</div>'
        ]
    ];

}