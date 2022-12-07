function initMap() {
  var maptest = {
	center:new google.maps.LatLng(41.054,-87.512),
	zoom: 8,
  };
 var map = new google.maps.Map(document.getElementById("map"),maptest);
}