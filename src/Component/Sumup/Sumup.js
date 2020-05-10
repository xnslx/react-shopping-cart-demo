import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sumup = (props) => {
    return (
        <div style={{marginBottom:'40px', marginTop: '20px'}}>
            <FontAwesomeIcon icon="shopping-cart"/>
            <span>The total items:</span>
            <input type="number" onChange={props.changed} value={props.value}/>
        </div>
    )
};

export default Sumup;
