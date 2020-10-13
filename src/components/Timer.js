import Axios from 'axios';
import React from 'react';
import axios from 'axios';

export default class Stopwatch extends React.Component {
    state = {
        runningTime: 0,
        isRunning: false,
<<<<<<< HEAD
        chargers: []
    };

    componentDidMount() {
        axios.get('http://54.84.83.147/chargers')
          .then(response => {
            console.log(response);
            this.setState({ chargers: response.data})
          })
    }

=======
        charger: [],
        previousCharges: [],
    };

    componentDidMount() {
        Axios.get('http://localhost:4000/charger/:id/startCharge')
            .then(response => {
                console.log(response);
                this.setState({ chargers: response.data })
            })
        Axios.get('http://localhost:4000/charger/:id/stopCharge')
            .then(response => {
                console.log(response);
                this.setState({ chargers: response.data })
            })
    }


    // Start and stop charging button functionality
>>>>>>> 0134f2634dfb1062b78e8f486310a5ddeacd8bea
    handleStartStopClick = () => {
        if (this.state.isRunning) {
            clearInterval(this.timerID);
            this.setState({ isRunning: false });
            console.log('Stop button clicked');

        } else {
            const startTime = Date.now() - this.state.runningTime;
            let previousChargesData = this.state.previousCharges;
            previousChargesData.push(this.state.charger[0]);

            this.timerID = setInterval(() => {
                this.setState({ runningTime: Date.now() - startTime, isRunning: true, previousCharges: previousChargesData });
            }, 100);
            console.log('Start button clicked');
        }
    }
    // Reset button functionality
    handleResetClick = () => {
        clearInterval(this.timerID);
        this.setState({ isRunning: false, runningTime: 0 })
        console.log('Reset button clicked');
    }
    // End button functionality
    handleEndClick = (startTime, stopTime, totalTime, userID, chargerID, totalCosts, electricityUsed) => {
        clearInterval(this.timerID);
        const data = [{
            startTime: startTime,
            stopTime: stopTime,
            totalTime: totalTime,
            userID: userID,
            chargerID: chargerID,
            totalCosts: totalCosts,
            electricityUsed: electricityUsed
        }];

        this.setState({ chargers: data });

        console.log('End button clicked');
        console.log("Starting time: " + startTime);
        console.log("Stop time: " + stopTime);
        console.log("Total time: " + totalTime);
        console.log('Used ID: ' + userID);
        console.log('Charger ID: ' + chargerID);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    formatTime(t) {
        return (t / 1000).toFixed(1);
    }
    render() {
        const { isRunning, runningTime } = this.state;
        return (
            <div>
                <h2>{this.formatTime(runningTime)}s</h2>
                <div>{(this.formatTime(runningTime) * 0.2 / 60).toFixed(3)} € </div>


                <button onClick={this.handleStartStopClick}>
                    {isRunning ? "Stop" : "Start"}
                </button>

                <button onClick={this.handleResetClick}>Reset</button>
                <button onClick={this.handleEndClick}>End</button>

            </div>
        );
    }
}