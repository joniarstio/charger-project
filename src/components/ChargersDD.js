import React from 'react';
import axios from 'axios';

export default class DropDown extends React.Component {
    state = {
        chargers: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/chargers')
          .then(response => {
            console.log(response);
            this.setState({ chargers: response.data})
          })
      }

    render(){
        return <div className="drop-down">
            <form>
            <h2>See all the chargers from list</h2>
              <select>{
                 this.state.chargers.map((charger) => {
                 return <option value={charger.id}> 
                            {charger.name}
                            {charger.location}
                            {charger.connectorType}
                            {charger.price}
                        </option>
                 })
              }</select>
              </form>
            </div>;
    }
}