var standingMarker = L.icon({
      iconUrl: 'images/marker-2.png',
      iconSize: [35, 35],
      iconAnchor: [0, 0],
      popupAnchor: [0, 0]
    });
var poolMarker = L.icon({
  iconUrl: 'images/marker-1.png',
  iconSize: [35, 35],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0]
});
var map = L.map('map').setView([51.505, 10], 6.3);
var langenfeld = L.marker([51.11402448480671, 6.913285324888693], {icon: standingMarker}).addTo(map);
var wellenwerk = L.marker([52.53275434999398, 13.493748591627542], {icon: standingMarker}).addTo(map);
var eisbachwelle = L.marker([48.14360684113524, 11.587724233796637], {icon: standingMarker}).addTo(map);
var hasewelle = L.marker([52.27518397894788, 8.047007405109662], {icon: standingMarker}).addTo(map);
var stade = L.marker([53.546642956700886, 9.495002469841205], {icon: poolMarker}).addTo(map);
langenfeld.bindPopup("<a href='https://www.surf-langenfeld.de/'><b>Surf Langenfeld</b></a><br>Alle Könner-Level<br>min. 12 Jahre");
wellenwerk.bindPopup("<a href='https://wellenwerk-berlin.de/'><b>Wellenwerk Berlin</b></a><br>Alle Könner-Level<br>min. 12 Jahre");
eisbachwelle.bindPopup("<b>Eisbachwelle</b><br>Unbeaufsichtigt<br>Guter vibe aber macht <br>euch mit den Regeln vertraut");
hasewelle.bindPopup("<a href='https://hasewelle.de/'><b>Hasewelle Osnabrück</b></a><br>Alle Könner-Level<br>min. 12 Jahre<br>Im Einkaufzentrum");
stade.bindPopup("<a href='https://surfgarten.de/'><b>Surf Garten Stade</b></a><br>In der Bauphase<br>Eröffnung 2024<br>Alle Könner-Level<br>min. 12 Jahre");

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9idWZmb24iLCJhIjoiY2wxaHNlMHpyMDd6czNicWxhbjU0aTdmNSJ9.ZIyWlmQfy5anJJoRyhSizQ', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
}).addTo(map);

