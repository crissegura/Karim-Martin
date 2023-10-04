
//CONTADOR DE DIAS
// function diasHasta(final){
//   let Hoy=new Date();
//   let fin = new Date(final.año, final.mes, final.dia);
//   let mseg_dia=1000*60*60*24;
//   let dias ;
//   if (Hoy.getMonth()==final.mes && Hoy.getDate()>final.dia) {
//       fin.setFullYear(fin.getFullYear()+1) ;
//   }
//   dias = Math.ceil((fin.getTime()-Hoy.getTime())/(mseg_dia));
//  console.log("Faltan "+dias+" dias hasta "+fin.toLocaleDateString())
// } 
// diasHasta({año:2024, mes:2, dia:25} )

// VARIABLEs
const DATE_TARGET = new Date('03/16/2024 16:00 ');
// DOM for render
const SPAN_DAYS = document.getElementById('days');
const SPAN_HOURS = document.getElementById('hours');
const SPAN_MINUTES = document.getElementById('minutes');
const SPAN_SECONDS = document.getElementById('seconds');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24
// FUNCTIONS
//Method that updates the countdown and the sample
function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
}
// INIT
updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);





//UBICACION
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

