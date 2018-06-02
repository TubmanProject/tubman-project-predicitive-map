import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class MapBox extends React.Component {
  constructor() {
    super();

    this.state = {
          lng: 5,
          lat: 34,
          zoom: 1.5
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

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
}

export default MapBox;
