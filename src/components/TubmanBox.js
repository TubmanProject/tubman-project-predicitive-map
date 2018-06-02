import React from 'react';
import FormBox from './FormBox';
import MapBox from './MapBox';

class TubmanBox extends React.Component {
  constructor() {
    super();

  }

  render() {
    return(
      <div className="row well">
        <div className="well">
          <FormBox />
          <MapBox />
        </div>
      </div>
    )
  }
}

export default TubmanBox;
