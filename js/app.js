function initMap() {
  var uluru = {lat: 19.3910038, lng: -99.2836989};
  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}