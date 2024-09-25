let map;
let vehicleMarker;
let vehiclePath = [];
let vehiclePolyline;

function initMap() {
    let initialPosition = { lat: 22.973700148703422, lng: 72.58790571976607 }; // Initial position
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: initialPosition,
    });

    

    const carPlanCoordinates = [
        { id: 1, lat: 22.973700148703422, lng: 72.58790571976607 },
    { id: 2, lat: 22.97648785809215, lng: 72.58693246663623 },
    { id: 3, lat: 22.979540997630018, lng: 72.58603130633082 },
    { id: 4, lat: 22.982063104343627, lng: 72.58585107426975 },
    { id: 5, lat: 22.98266043851127, lng: 72.58559874938423 },
    { id: 6, lat: 22.983954653480424, lng: 72.58426503213227 },
    { id: 7, lat: 22.9844856099641, lng: 72.5836522430598 },
    { id: 8, lat: 22.986543046303282, lng: 72.58239061863225 },
    { id: 9, lat: 22.988899104262508, lng: 72.5822464329834 },
    { id: 10, lat: 22.989927792734527, lng: 72.5827150363422 },
    { id: 11, lat: 22.989828242579684, lng: 72.58260689710555 },
    { id: 12, lat: 22.990674574026013, lng: 72.58224801930331 },
    { id: 13, lat: 22.991071438046962, lng: 72.58203246520118 },
    { id: 14, lat: 22.99206359299658, lng: 72.5811506529652 },
    { id: 15, lat: 22.993993764466616, lng: 72.5800140949722 },
    { id: 16, lat: 22.994661200517346, lng: 72.57975934921514 },
    { id: 17, lat: 22.99558117453042, lng: 72.57938702849329 },
    { id: 18, lat: 22.996789758314353, lng: 72.57889713280663 },
    { id: 19, lat: 22.99711445062144, lng: 72.57856400373971 },
    { id: 20, lat: 22.998755602082213, lng: 72.57927823646476 },
    { id: 21, lat: 23.00158784717557, lng: 72.57945349966076 },
    { id: 22, lat: 23.004814383165527, lng: 72.57945349962516 },
    { id: 23, lat: 23.0075031041656, lng: 72.58027139453984 },
    { id: 24, lat: 23.009456874581797, lng: 72.58060244724466 },
    { id: 25, lat: 23.01008422602184, lng: 72.58071928937532 },
    { id: 26, lat: 23.01083704389922, lng: 72.58110876314421 },
    { id: 27, lat: 23.011654813813, lng: 72.581454143 },
    { id: 28, lat: 23.012444, lng: 72.581734 },
    { id: 29, lat: 23.013, lng: 72.582 },
    { id: 30, lat: 23.017268116494947, lng: 72.58348501053533 },
    { id: 31, lat: 23.019194874458037, lng: 72.58348718373595 },
    { id: 32, lat: 23.021216795589066, lng: 72.58388013042394 },
    { id: 33, lat: 23.02140821250407, lng: 72.58330536007271 },
    { id: 34, lat: 23.021986339013818, lng: 72.58051071239774 },
    { id: 35, lat: 23.02200993598274, lng: 72.57885699877983 },
    { id: 36, lat: 23.022210509871847, lng: 72.57676742276597 },
    { id: 37, lat: 23.02239928502434, lng: 72.57420352581647 },
    { id: 38, lat: 23.02237568814474, lng: 72.57366510745707 },
    { id: 39, lat: 23.022765036177322, lng: 72.5714216975312 },
    { id: 40, lat: 23.023118987915723, lng: 72.57139605856172 },
    { id: 41, lat: 23.02365181473897, lng: 72.5711436297258 },
    { id: 42, lat: 23.023713424694673, lng: 72.5709475842257 },
    { id: 43, lat: 23.023687020431392, lng: 72.5704933324572 },
    { id: 44, lat: 23.023700222563683, lng: 72.5700008279082 },
    { id: 45, lat: 23.023709023984487, lng: 72.56971871365197 },
    { id: 46, lat: 23.0236870204334, lng: 72.5691879562817 },
    { id: 47, lat: 23.02364741402878, lng: 72.5681599128056 },
    { id: 48, lat: 23.023673818299827, lng: 72.56804993606164 },
    { id: 49, lat: 23.023643013316445, lng: 72.56735182281741 },
    { id: 50, lat: 23.02362100975257, lng: 72.56719881169538 },
    { id: 51, lat: 23.02361660903937, lng: 72.5668593182684 },
    { id: 52, lat: 23.02369582186445, lng: 72.56674455991394 },
    { id: 53, lat: 23.023893853700116, lng: 72.56672543352369 },
    { id: 54, lat: 23.024171097781405, lng: 72.56666327275536 },
    { id: 55, lat: 23.024540755669594, lng: 72.56664892796267 },
    { id: 56, lat: 23.024699180168565, lng: 72.5666584911578 },
    { id: 57, lat: 23.0250072272725, lng: 72.56660589358461 },
    { id: 58, lat: 23.025060035276795, lng: 72.5666202383773 },
    { id: 59, lat: 23.025249263803055, lng: 72.56662501996861 },
    { id: 60, lat: 23.02561891873502, lng: 72.56656285920029 },
    { id: 61, lat: 23.02575533875148, lng: 72.56653416961491 },
    { id: 62, lat: 23.025838950951396, lng: 72.56653416961491 },
    { id: 63, lat: 23.025935765012825, lng: 72.56645288245635 },
    { id: 64, lat: 23.02610738976906, lng: 72.56639550328558 },
    { id: 65, lat: 23.026124992295795, lng: 72.56628552654162 },
    { id: 66, lat: 23.026133793580335, lng: 72.56620423936361 },
    { id: 67, lat: 23.026160197364412, lng: 72.56605600983916 },
    { id: 68, lat: 23.026155796734095, lng: 72.56573086120486 },
    { id: 69, lat: 23.026168998624623, lng: 72.56573086120486 },
    { id: 70, lat: 23.02618220051387, lng: 72.5653865861803 },
    { id: 71, lat: 23.02620420365974, lng: 72.56506621914356 },
    { id: 72, lat: 23.026230607430026, lng: 72.56472194411901 },
    { id: 73, lat: 23.02618660114333, lng: 72.56505665594844 },
    ];

    const carPath = new google.maps.Polyline({
        path: carPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    carPath.setMap(map);

    const carIcon = {
        url: "https://img.icons8.com/ios-filled/50/000000/car.png", // URL of the car icon
        scaledSize: new google.maps.Size(32, 32), // Adjust size if needed
        origin: new google.maps.Point(0, 0), // Origin point of the icon
        anchor: new google.maps.Point(16, 32), // Anchor point of the icon
    };

    let currentIndex = 0;
    const intervalId = setInterval(() => {
        if (currentIndex < carPlanCoordinates.length) {
            let element = carPlanCoordinates[currentIndex];
            initialPosition = { lat: element.lat, lng: element.lng };

            const marker = new google.maps.Marker({
                position: initialPosition,
                map: map,
                title: "Start Point",
                icon: carIcon, // Set the car icon
            });
    
            console.log(initialPosition); // Log the current position
    
            currentIndex++;
        } else {
            clearInterval(intervalId); // Clear the interval once done
            console.log("All coordinates processed.");
        }
    }, 1000);

    
}

window.initMap = initMap;
