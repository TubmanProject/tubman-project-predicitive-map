import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class MapBox extends React.Component {
  constructor() {
    super();

    this.state = {
          lng: -98.3504,
          lat: 29.4034,
          zoom: 9
        };
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return(
      <div className="well">
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    )
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    this.map.on('move', () => {
      const { lng, lat } = this.map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });
    //console.log(this.props.markers);
    //if (this.props.markers.length > 0) { this._addMarkers(this.props.markers, this.map); }
  }

  componentDidUpdate() {
    //console.log(this.props.markers);
    if (this.props.markers.length > 0) { this._addMarkers(this.props.markers, this.map); }
  }

  _addMarkers(markers, map) {
    //console.log(markers);
    markers.forEach(function(marker) {
      //console.log(marker);

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker)
        .addTo(map);
      });
  }
}

export default MapBox;
