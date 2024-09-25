async function loadRoute() {
    try {
      const response = await fetch('/route');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.coordinates;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  
  async function initMap() {
    const coordinates = await loadRoute();
  
    // Initialize your map (replace with your map initialization code)
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: coordinates[0], // Center the map on the first coordinate
    });

    const carPath = new google.maps.Polyline({
        path: coordinates.map(coord => ({ lat: coord.latitude, lng: coord.longitude })), // Convert format
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

    const marker = new google.maps.Marker({
        position: coordinates[0],
        map: map,
        title: "Start Point",
        icon: carIcon, // Set the car icon
    });
    
    let currentIndex = 0

    // Add markers for each coordinate
    const intervalId = setInterval(() => {
        if (currentIndex < coordinates.length) {
            let element = coordinates[currentIndex];
            const newPosition = { lat: element.latitude, lng: element.longitude };

            marker.setPosition(newPosition); // Update the marker position
            map.setCenter(newPosition); // Center the map on the new marker position (optional)

            console.log(newPosition); // Log the current position
            
            currentIndex++;
        } else {
            clearInterval(intervalId); // Clear the interval once done
            console.log("All coordinates processed.");
        }
    }, 1000); // Change position every 1000 milliseconds (1 second)
}
  
  // Call initMap when the window loads
  window.onload = initMap;
  