import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

export default function Map() {
    return (
        <div>
            <GoogleMap deafultZoom={10} deafultCenter={{ lat: 61.9241, lng: 25.7482 }} />
        </div>
    );
}