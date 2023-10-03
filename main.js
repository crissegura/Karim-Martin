let map = L.map('map').setView([-34.8981541,-58.438131],12)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var estiloPopup =
      {
      'maxWidth': '500'
      }
var marker = L.marker([-34.8981541,-58.438131]).addTo(map);
marker.bindPopup("<h1>Paraje La Lata, Buenos Aires</h1><img src='img/talaia.jpeg' alt='La Talaia'><p>Aca me caso ahre</p>.",estiloPopup).openPopup();
var popup = L.popup();