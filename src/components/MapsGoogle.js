import React from 'react';
import Geocode from 'react-geocode';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

Geocode.setApiKey('AIzaSyCL72hkbFiIIJDj6Jf4EHk4grZ61Rb8bbA')

export default class MapsGoogle extends React.Component {
  
  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 61.9241, lng: 25.7482}}
      >
        <Marker
          position={{ lat: 61.9241, lng: 25.7482 }} 
        />
      </GoogleMap>
    ));


    return (
      <div>
        <h2>Search charger</h2>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL72hkbFiIIJDj6Jf4EHk4grZ61Rb8bbA&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `800px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}