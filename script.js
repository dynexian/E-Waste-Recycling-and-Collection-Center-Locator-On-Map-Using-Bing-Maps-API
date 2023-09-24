
var map;
var pinLayer;

// Custom pin icons
var ewastePinIcon = 'ewm.png';
var recyclingPinIcon = 'rec.png';

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: '',
        center: new Microsoft.Maps.Location(22.233625267229826, 84.83650275507986), // Default center (Our College)
        zoom: 17 // Initial zoom level
    });

    // Create a pin layer to add pins to the map
    pinLayer = new Microsoft.Maps.Layer();
    map.layers.insert(pinLayer);

    // Add e-waste facility pins to the map (replace with your actual coordinates)
    addPin(22.233016149418244, 84.83732318360362, 'E-Waste Facility 1', 'This is an e-waste facility', ewastePinIcon);
    addPin(22.233704593379507, 84.8404534870166, 'E-Waste Facility 2', 'This is an e-waste facility', ewastePinIcon);
    addPin(22.230850502640042, 84.84147142406908, 'E-Waste Facility 3', 'This is an e-waste facility', ewastePinIcon);
    addPin(22.22916303786607, 84.84124375617712, 'E-Waste Facility 4', 'This is an e-waste facility', ewastePinIcon);

    // Add recycling facility pins to the map (replace with your actual coordinates)
    addPin(22.23021620081808, 84.83785750024214, 'Recycling Facility 1', 'This is a recycling facility', recyclingPinIcon);
    addPin(22.234176884539274, 84.83512872613791, 'Recycling Facility 2', 'This is a recycling facility', recyclingPinIcon);
    addPin(22.232385745483995, 84.83569607356357, 'Recycling Facility 3', 'This is a recycling facility', recyclingPinIcon);
    addPin(22.23513667091614, 84.83705862964896, 'Recycling Facility 4', 'This is a recycling facility', recyclingPinIcon);
}

function addPin(latitude, longitude, title, description, customIcon) {
    var pinLocation = new Microsoft.Maps.Location(latitude, longitude);

    // Define custom pin options
    var pinOptions = {
        icon: customIcon,
        title: title,
        subTitle: description
    };

    var pin = new Microsoft.Maps.Pushpin(pinLocation, pinOptions);

    Microsoft.Maps.Events.addHandler(pin, 'click', function () {
        openInGoogleMaps(latitude, longitude);
    });

    pinLayer.add(pin);

    // Add the location to the list
    var locationList = document.createElement('li');
    locationList.innerHTML = `<strong>${title}</strong><br>${description}`;
    locationList.addEventListener('click', function () {
        openInGoogleMaps(latitude, longitude);
    });

    if (customIcon === ewastePinIcon) {
        document.getElementById('ewaste-list').appendChild(locationList);
    } else if (customIcon === recyclingPinIcon) {
        document.getElementById('recycling-list').appendChild(locationList);
    }
}

function openInGoogleMaps(latitude, longitude) {
    var googleMapsUrl = 'https://www.google.com/maps?q=' + latitude + ',' + longitude;
    window.open(googleMapsUrl, '_blank');
}

