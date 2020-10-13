import React from 'react';
import axios from 'axios';

export default class Stopwatch extends React.Component {
    state = {
        runningTime: 0,
        isRunning: false,
        chargers: []
    };

    componentDidMount() {
        axios.get('http://54.84.83.147/chargers')
          .then(response => {
            console.log(response);
            this.setState({ chargers: response.data})
          })
    }

    handleStartStopClick = () => {
        if(this.state.isRunning) {
            clearInterval(this.timerID);
            this.setState({ isRunning: false });
        } else {
            const startTime = Date.now() - this.state.runningTime;
            this.timerID = setInterval(() => {
                this.setState({ runningTime: Date.now() - startTime, isRunning: true });
            }, 100);
        }
    }
    handleResetClick = () => {
        clearInterval(this.timerID);
        this.setState({ isRunning: false, runningTime: 0 })
    }
    handleEndClick = () => {
        clearInterval(this.timerID);
        this.setState({  });
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
            <h2>{ this.formatTime(runningTime) }s</h2>
            <div>{ (this.formatTime(runningTime) * 0.2 / 60).toFixed(3) } €</div>
            <button onClick={ this.handleStartStopClick }>
                {isRunning ? "Stop" : "Start"}
            </button>
            
            <button onClick={ this.handleResetClick }>Reset</button>
            <button onClick={ this.handleEndClick }>End</button>
            
            </div>
        );
    }
}