import React from 'react';
import axios from 'axios';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        chargers: [],
        chargerSearchString: ""

        }
        
    }

    componentDidMount() {
        axios.get('http://54.84.83.147/chargers')
          .then(response => {
            console.log(response);
            this.setState({ chargers: response.data})
          })
      }

    render(){
        return <div className="drop-down">
            <form>
            <label>
            <h2>See all chargers from the list</h2>
            </label>
                <select>
                {
                 this.state.chargers.map((charger) => {
                 return <option value={charger.id}> 
                            {charger.name}
                            {charger.location}
                            {charger.connectorType}
                            {charger.price}
                            {charger.status}
                        </option>
                 })
                }
                </select>
            </form>
        </div>;
    }
}