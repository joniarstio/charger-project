import React from 'react';

export default function ChargerSearchResult(props) {
    return (
        <div>
            <div>
                <div>{props.name}</div>
                <div>{props.location}</div>
                <div>{props.connectorType}</div>
                <div>{props.price}</div>
                <div>{props.kW}</div>
                <div>{props.status}</div>
            </div>
        </div>
    )
}