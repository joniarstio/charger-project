import React from 'react';
import styles from './ChargerView.module.css';

import ChargerResult from './ChargerResult';

export default function ChargerView(props) {

    return (
        <div>
            <div className={styles.Grid}>
                {
                    props.chargers.map(charger => <ChargerResult key={charger.id} {...charger} /> )
                }
            </div>
        </div>
    )
}