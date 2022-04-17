mapboxgl.accessToken = mapToken
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campgroundCor.geometry.coordinates, // starting position [lng, lat]
    zoom: 7 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campgroundCor.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3>${campgroundCor.title}</h3><p>${campgroundCor.location}</p>`)
            .addTo(map)
    )
    .addTo(map)
