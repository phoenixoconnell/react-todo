import React, { useState } from 'react';

function Todo(props) {
    const [cross, setCross] = useState(false);

    return (
        <div className='todo'>
            <input type='checkbox' onClick={() => setCross(!cross)} />
            <span className={cross ? 'crossed' : ''}>{props.name}</span>
            <span onClick={() => props.removeItem(props.id)}>X</span>
        </div>
    )
}

export default Todo;
