
let places= [
  {"lokasi": [-6.186543, 106.831046], "sponsor" : "KalaKopi"},
  {"lokasi": [-6.183951, 106.831511], "sponsor" : "MNC Tower"}
];

for (var p of places) {
  var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}

console.log('wewewe');
var popup = L.popup();
function onMapClick(e) {
  popup
  .setLatLng(e.latlng)
  .setContent("Lokasi yang dipilih: " + e.latlng.toString())
  .openOn(mymap);
 }
 mymap.on('click', onMapClick);