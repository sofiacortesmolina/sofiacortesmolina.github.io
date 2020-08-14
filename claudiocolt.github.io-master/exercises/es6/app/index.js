class Mapa {

    constructor(latitud, longitud){
        this.latitud = latitud;
        this.longitud = longitud;
    }

    render(){

    }
}

let mapa1 = new Mapa(lat, long);




function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -38.7366867, lng: -72.5939084 },
        zoom: 14
    });
    directionsRenderer.setMap(map);

    document.getElementById('btn-calcular').addEventListener('click', (e) => {
        e.preventDefault();
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        directionsService.route(
          {
            origin: { query: document.getElementById('inicio').value },
            destination: { query: document.getElementById('fin').value },
            travelMode: "DRIVING"
          },
          function(response, status) {
            if (status === "OK") {
              directionsRenderer.setDirections(response);
              let vehiculo = document.getElementById('vehiculo').value;
              let distancia_int = Math.round(response.routes[0].legs[0].distance.value / 1000);
              console.log(`Distancia (Klm): ${distancia_int}`);
              console.log(response.routes[0]);
              switch (vehiculo) {
                    case 'auto':
                        console.log(`Litros totales: ${Math.round(distancia_int/12)}`);
                        break;
                    case 'camioneta':
                        console.log(`Litros totales: ${Math.round(distancia_int/10)}`);
                        break;
                    case 'moto':
                        console.log(`Litros totales: ${Math.round(distancia_int/17.5)}`);
                        break;
                    case 'camion':
                        console.log(`Litros totales: ${Math.round(distancia_int/5)}`);
                        break;
                    default:
                        console.log('No se ejecutó');
              }
            } else {
              window.alert("Directions request failed due to " + status);
            }
          }
        );
    }

}




