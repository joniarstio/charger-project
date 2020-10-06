import React from 'react';
import Geocode from 'react-geocode';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

Geocode.setApiKey('AIzaSyCL72hkbFiIIJDj6Jf4EHk4grZ61Rb8bbA')

export default class MapsGoogle extends React.Component {

    state = {
      adress: "",
      city: "",
      zoom: 15,
      height: 300,
      mapPosition: {
        lat: 0,
        lng: 0,
      },
      markerPosition: {
        lat:0,
        lng: 0
    }
  }

  componentDidMount() {

    /* Gets users current location via Geocode and positions map there when accesse or refershed website*/
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({    
          mapPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        markerPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      }, () => {
        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
          .then(response => {
            console.log('response', response)
            const address = response.results[0].formatted_address,
              addressArray = response.results[0].address_components,
              city = this.getCity(addressArray);
              
              this.setState({
              address: (address) ? address: "",
              city: (city) ?  city: "",
              })
            })
          })
        })
      }
    }

  getCity = (addressArray) => {
      let city = '';
      for (let index = 0; index < addressArray.lenght; index++){
        if(addressArray[index].type[0] && 'administrative_area_level_2' === addressArray[index].types[0]) {
          city = addressArray[index].long_name;
          return city;
        }
      }
  }

  onMarkerDragEnd = (event) => {

    let newLattitude = event.latLng.lat();
    let newLongitude = event.latLng.lng();

    Geocode.fromLatLng(newLattitude, newLongitude)
      .then(response => {
        console.log('response', response)
        const address = response.results[0].formatted_address,
              addressArray = response.results[0].address_components,
              city = this.getCity(addressArray);
              
      this.setState({
        address: (address) ? address: "",
        city: (city) ?  city: "",
        markerPosition: {
          lat: newLattitude,
          lng: newLongitude
        },
        mapPosition: {
          lat: newLattitude,
          lng: newLongitude
        },
      })
    })
  }

  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: this.state.mapPosition.lat , lng: this.state.mapPosition.lng }}
      >
        <Marker
          draggable={true}
          onDragEnd={this.onMarkerDragEnd}
          position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
        >
        </Marker>
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