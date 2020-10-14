import React from 'react';
import axios from 'axios';
import styles from './ChargersDD.module.css';

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
            <h2>Search charging stations from the list</h2>
            <input className={styles.search} type="text" placeholder="Search charger by location ex: Oulu" onChange={ this.onChange } value={ this.state.toLowerCase }/>
                <select className={styles.dropdown} >
                {
                 this.state.chargers.filter(charger => charger.location.toLowerCase().includes(this.state.searchString)).map(charger => {
                 return <option value={charger.id}>
                        {charger.name} Address: {charger.location} Connector: {charger.connectorType} € {charger.price}
                        </option>
                 })
                }
                </select>
            </form>
        </div>;
    }
}