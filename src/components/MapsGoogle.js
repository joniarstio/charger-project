import React from "react";
import axios from 'axios';
import { compose } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={5} defaultCenter={{ lat: 65, lng: 25.7482 }}>
      {props.chargers.map(charger => {
        const onClick = props.onClick.bind(this, charger)
        return (
          <Marker key={charger.id}  onClick={onClick} position={{ lat: charger.lat, lng: charger.lng }} >
          {props.selectedCharger === charger &&
            <InfoWindow>
              <div>
                {charger.name}
                <br></br>
                {charger.location}
                <br></br>
                <p>Connector type:{charger.connectorType}</p>
                <p>Price: {charger.price} € / kWh</p>
                <p>{charger.status}</p>
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
      chargerSearchString: "",
      selectedMarker: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/chargers')
      .then(response => {
        console.log(response);
        this.setState({ chargers: response.data})
      })
  }

  handleClick = (charger) => {
    this.SetSelectedCharger(charger)
    console.log(charger)
  }
  
  SetSelectedCharger = (parameters) => {
    this.setState({selectedCharger: parameters})
  }

  render() 
  {
    return (
        <MapWithAMarker
        SetSelectedCharger={this.SetSelectedCharger}
        selectedCharger={this.state.selectedCharger}
        chargers={this.state.chargers.filter((charger) => charger.name.includes(this.state.chargerSearchString))}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCL72hkbFiIIJDj6Jf4EHk4grZ61Rb8bbA&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}