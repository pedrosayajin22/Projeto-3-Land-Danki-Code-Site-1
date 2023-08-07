window.onload = function () {
    let map;
    function initialize() {
        let mapProp = {
            center: new google.maps.LatLng(-27.648598, -48.577423),
            scrollwheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map"), mapProp)
    }
    function addMarker(lat, long, icon, content, click) {
        let latLng = { "lat": lat, 'lng': long };
        let marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon,
        });
        let infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0, 20)
        });
        if (click == true) {
            google.maps.event.addListener(marker, "click", function () {

                infoWindow.open(map, marker)
            });
        } else if (click == false) {
            infoWindow.open(map, marker)


        }


    }
    initialize()
    var conteudo = '<p style="color:black; padding:10px;font-size:13px">Meu endereço</p>'
    addMarker(-27.616637, -48.5923228, '', conteudo, true);

    setTimeout(function () {
        map.panTo({ 'lat': -23.550530, "lng": -46.633309 }, addMarker(-23.550530, -46.633309))
        map.setZoom(17)
    }, 2000);

}





