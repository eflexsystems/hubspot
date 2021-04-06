let scrollResponsiveHeader = true;

let map;

function initMap() {

	const mapStyleArray = [
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": 36
				},
				{
					"color": "#000000"
				},
				{
					"lightness": 40
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#000000"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 17
				},
				{
					"weight": 1.2
				}
			]
		},
		{
			"featureType": "administrative.country",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"saturation": "-12"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 21
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 29
				},
				{
					"weight": 0.2
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 18
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#000000"
				},
				{
					"lightness": 19
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#323235"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"hue": "#008dff"
				},
				{
					"saturation": "30"
				}
			]
		}
	];

	const svgMarker = {
		path: 
			"M31.77,0C14.22,0,0,14.22,0,31.77c0,17.55,14.12,42.41,31.77,58.88c17.67-16.66,31.77-41.34,31.77-58.88 C63.54,14.22,49.32,0,31.77,0z M31.77,44c-7.14,0-12.94-5.79-12.94-12.94c0-7.14,5.79-12.94,12.94-12.94 c7.14,0,12.94,5.79,12.94,12.94C44.71,38.21,38.91,44,31.77,44z",
		fillColor: "#2B90E2",
		fillOpacity: 1,
		strokeWeight: 0,
		rotation: 0,
		scale: .75,
		anchor: new google.maps.Point(10, 84),
	};

	const latLng = { lat: 42.695981919195546, lng: -83.13838993560815 };
	map = new google.maps.Map(document.getElementById("map"), {
		center: latLng,
		zoom: 18,
		styles: mapStyleArray,
		mapTypeControlOptions: {},
	});
	
	new google.maps.Marker({
		position: latLng,
		map,
		icon: svgMarker,
		title: "eFlex",
	  });
}