import React from 'react';

const CounterItem = ({name, points}) => {
    return (
        <div className='counter-item'>
            <p className='name'>{name}</p>
            <p className='value'>{points}</p>
        </div>
    );
};

export default CounterItem;