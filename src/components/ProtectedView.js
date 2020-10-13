import React from 'react'
import Stopwatch from './Timer';

export default function ProtectedView(props) {

  return (
    // Show timer when user is logged in
    <div className="App-nav">
      <ul>
        <li>
          <p>Start charging</p>
          <Stopwatch />
        </li>
        <li>
          <p>Previous charges</p>
        </li>
      </ul>
    </div>
  )
}