import React from 'react';
import Geocode from "react-geocode";
import FormBox from './FormBox';
import MapBox from './MapBox';
import Axios from 'axios';

Geocode.setApiKey("AIzaSyCjVgWnvbJhmBMnXztKCxpJ4Ov9SHKN3Gg")

class TubmanBox extends React.Component {
  constructor() {
    super();

    this.state = {
      mapData: []
    }

  }

  render() {
    //const mapData = this._getBexarData();

    return(
      <div className="row well">
        <div className="well">
          <FormBox />
          {this._getBexarData()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this._getBexarData();
  }

  _populateMap() {

  }

  _getBexarData() {
    var markers = [];
    Axios.get('https://api.mlab.com/api/1/databases/tubman/collections/tubman?apiKey=1mGO9l6rrwCLB0T2WNKMOQnEd-5cL7af')
    .then((response) => {
      response.data.forEach(function (record) {
        const address = record['ADDR-HOUSE-NBR'].toString() + ' ' + record['ADDR-PRE-DIRECTION'] + ' ' + record['ADDR-STREET'] + ' ' + record['ADDR-STREET-SUFFIX'] + ' ' + record['ADDR-POST-DIRECTION'] + ', ' + record['ADDR-UNIT'] + ', ' + record['ADDR-CITY'] + ', ' + record['ADDR-STATE'] + ' ' + record['ADDR-ZIP-CODE'].toString();
        //console.log(address);

        setTimeout(function(){
          Geocode.fromAddress(address).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              //console.log(lat, lng);
              markers.push([lng, lat]);
            },
            error => {
              console.error(error);
            }
          );
        }, 500);

      });
    });
    //this.setState({ mapData: markers })
    return(<div><MapBox markers={markers}/></div>)
    //return markers;//.slice(0,100);
  }
}

export default TubmanBox;
