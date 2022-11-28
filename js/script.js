function InitMap() {
  map = new google.maps.Map(document.getElementById("map"), {
	center: { lat: 41, lng: -87 },
    zoom: 8,
  }
}
window.InitMap = InitMap;