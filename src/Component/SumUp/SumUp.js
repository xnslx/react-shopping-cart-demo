import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SumUp = (props) => {
    return (
        <div style={{width:'100%', height: '80px',backgroundColor: '#f0f0f0'}}>
            <FontAwesomeIcon icon="shopping-cart" style={{fontSize: '28px'}}/>
            <input 
                style={{marginLeft: '20px'}} 
                type="number"
                onChange={props.changed}
                value={props.value}
            />items
        </div>
    )
};

export default SumUp;
