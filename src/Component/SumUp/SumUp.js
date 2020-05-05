import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SumUp = (props) => {
    return (
        <div Style={{width:'100%', height: '80px',backgroundColor: '#999999'}}>
            <FontAwesomeIcon icon="shopping-cart" style={{fontSize: '28px'}}/>
            <span style={{marginLeft: '20px'}}>
                {props.value}items
            </span>
        </div>
    )
};

export default SumUp;
