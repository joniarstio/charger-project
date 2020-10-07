
import React from "react";
import axios from 'axios';
import { compose } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: 65, lng: 25.7482 }}>
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker key={marker.id}  onClick={onClick} position={{ lat: marker.lat, lng: marker.lng }} >
          {props.selectedMarker === marker &&
            <InfoWindow>
              <div>
                {marker.name}
                <br></br>
                {marker.location}
                <br></br>
                {marker.connectorType}
                <br></br>
                <h3>{marker.kW}</h3>
              </div>
            </InfoWindow>
          }
          </Marker>
        )
      })}
    </GoogleMap>
  )
})

export default class ShelterMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      chargers: [],
      selectedMarker: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/chargers')
      .then(response => {
        console.log(response);
        this.setState({ chargers: response.data.chargers})
      })
  }

  handleClick = (marker, event) => {
    this.SetSelectedMarker(marker)
    console.log(marker)
  }
  
  SetSelectedMarker = (parameters) => {
    this.setState({selectedMarker: parameters})
   
 }
  render() {
    return (
      <MapWithAMarker
        SetSelectedMarker={this.SetSelectedMarker}
        selectedMarker={this.state.selectedMarker}
        markers={this.state.chargers}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL72hkbFiIIJDj6Jf4EHk4grZ61Rb8bbA&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}