let map = L.map('map').setView([-34.8981541,-58.438131],12)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let estiloPopup =
      {
      'maxWidth': '500'
      }
let marker = L.marker([-34.8981541,-58.438131]).addTo(map);

marker.bindPopup("<h1>Paraje La Lata, Buenos Aires</h1><img src='' alt='Paraje La Lata'><p>Aca me caso ahre</p><a href='https://www.google.com/maps/place/Comunidad+Cristiana+Zona+Sur/@-34.8981541,-58.438131,15z/data=!4m6!3m5!1s0x95bcd5936fa98483:0x46fcc942719ba15e!8m2!3d-34.8981541!4d-58.438131!16s%2Fg%2F11b8z01d_c?entry=ttu' target='-'>Abrir en Google Maps</a>",estiloPopup).openPopup();
let popup = L.popup();

