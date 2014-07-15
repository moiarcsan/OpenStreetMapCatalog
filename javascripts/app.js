var map = L.map('map').setView([37.37, -5.963333], 12);
function initMap() {
  var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }).addTo(map);
}
$(window).on("resize", function() {
    $("#map").height($(window).height()-$(".navbar").height()).width($(window).width());
    $("#map").css("margin-top", $(".navbar").height()) 
    map.invalidateSize();
}).trigger("resize");
window.onload = initMap;