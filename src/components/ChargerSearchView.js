import React from 'react';

import SearchResult from './ChargerSearchResult';

export default function ChargerSearchView(props) {

    return (
        <div>
            <div>
                {
                    props.chargers.map(charger => <SearchResult key={charger.id} {...charger} />)
                }
            </div>
        </div>
    )
}