import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sumup = ({totalItems}) => {
    return (
        <div style={{marginBottom:'40px', marginTop: '20px'}}>
            <FontAwesomeIcon icon="shopping-cart"/>
            <span>The total items:{totalItems}</span>
        </div>
    )
};

export default Sumup;
