import React from 'react';
import Geocode from "react-geocode";
import FormBox from './FormBox';
import MapBox from './MapBox';
import Axios from 'axios';

Geocode.setApiKey("AIzaSyCjVgWnvbJhmBMnXztKCxpJ4Ov9SHKN3Gg")
var markers = [];


class TubmanBox extends React.Component {
  constructor() {
    super();

    this.state = {
      mapData: [],
    }

  }

  render() {
    var mapData = this._getBexarData();

    return(
      <div className="row well">
        <div className="well">
          <FormBox />
          {this._renderMap(markers)};
        </div>
      </div>
    )
  }

  componentDidMount() {
    this._getBexarData();
  }

  _renderMap(mapData) {
    return(
      <div>
      <MapBox markers={mapData}/>
      </div>
    )
  }


  _getBexarData() {

    Axios.get('https://api.mlab.com/api/1/databases/tubman/collections/tubman?apiKey=1mGO9l6rrwCLB0T2WNKMOQnEd-5cL7af&sk=0&l=100')
    .then((response) => {
      const addresses = response.data;
      //console.log(response.data);
      addresses.forEach(function (record) {
        const address = record['ADDR-HOUSE-NBR'].toString() + ' ' + record['ADDR-PRE-DIRECTION'] + ' ' + record['ADDR-STREET'] + ' ' + record['ADDR-STREET-SUFFIX'] + ' ' + record['ADDR-POST-DIRECTION'] + ', ' + record['ADDR-UNIT'] + ', ' + record['ADDR-CITY'] + ', ' + record['ADDR-STATE'] + ' ' + record['ADDR-ZIP-CODE'].toString();
        //console.log(address);
        var coord = [];

        setTimeout(function(){}, 500);
        Geocode.fromAddress(address).then(
          response => {
            const { lat, lng } = response.results[0].geometry.location;
            //return([lng, lat]);
            //return([lng, lat]);
            //console.log(lat, lng);
            markers.push([lng, lat]);
            //this.setState({ mapData: markers});
            //coord.push(lng);
            //coord.push(lat);

            //console.log(coord);
          },
          error => {
            console.error(error);
          }
        );
        //markers.push(coord);
      });
      if (markers.length > 0) {
        //console.log('outside');
        //console.log(markers[0].length);
        //console.log(this.state.mapData);
        this.setState({ mapData: markers });
        //this._renderMap(markers);
        //console.log(this.state.mapData);
      }
      //console.log(markers.lenth);
      //debugger;
      //return markers;
      //console.log(this.state.mapData[0]);
      //console.log(markers[0]);
    }).catch(error => {
        console.log(error);
    });
    //this.setState({ mapData: markers })
    //return(<div><MapBox markers={markers}/></div>)
    //return markers;//.slice(0,100);
  }

  _putCoordData(id, lat, lng) {
    Axios.put()

  }
}

export default TubmanBox;
