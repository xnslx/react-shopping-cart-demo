import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sumup = () => {
    return (
        <div style={{marginBottom:'40px', marginTop: '20px'}}>
            <FontAwesomeIcon icon="shopping-cart"/>
            <span>The total items:</span>
        </div>
    )
};

export default Sumup;
