import React from 'react';
import axios from 'axios';

export default class DropDown extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
        chargers: [],
        searchString: ""
        }
    }

    componentDidMount() {
        axios.get('http://54.84.83.147/chargers')
          .then(response => {
            console.log(response);
            this.setState({ chargers: response.data})
          })
      }

      onChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchString: event.target.value });
      }

    render(){
        return <div className="drop-down">
            <form>
            <h3>Search chargers from the list</h3>
            <input type="text" placeholder="Search charger by location" onChange={ this.onChange } value={ this.state.toLowerCase }/>
                <select>
                {
                 this.state.chargers.filter(charger => charger.location.toLowerCase().includes(this.state.searchString)).map(charger => {
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