import React from 'react';

export default function ChargerSearchResult(props) {
    return (
        <div>
            <div>
                <div>{props.name}</div>
                <div>{props.location}</div>
                <div>{props.chargerType}</div>
                <div>{props.price}</div>
            </div>
        </div>
    )
}