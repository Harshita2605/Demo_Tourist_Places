function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var map1 = new google.maps.Map(document.getElementById("map1"), mapProp);
  var map2 = new google.maps.Map(document.getElementById("map2"), mapProp);
  var map3 = new google.maps.Map(document.getElementById("map3"), mapProp);
  var map4 = new google.maps.Map(document.getElementById("map4"), mapProp);
  var map5 = new google.maps.Map(document.getElementById("map5"), mapProp);
  var map6 = new google.maps.Map(document.getElementById("map6"), mapProp);
}
