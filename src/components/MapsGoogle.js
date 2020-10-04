import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";

export default class MapsGoogle extends React.Component {
  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 61.9241, lng: 25.7482 }}
      >
        <Marker
          position={{ lat: 61.9241, lng: 25.7482 }}
        />
      </GoogleMap>
    ));

    return (
    <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL72hkbFiIIJDj6Jf4EHk4grZ61Rb8bbA&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
    );
  }
}