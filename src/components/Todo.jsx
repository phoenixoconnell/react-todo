import React, { useState } from 'react';

function Todo(props) {
    const [cross, setCross] = useState(false);

    return (
        <div className='todo'>
            <input className="checkBox" type='checkbox' onClick={() => setCross(!cross)} />
            <span className={cross ? 'crossed' : ''}>{props.name}</span>
            <span className="item" onClick={() => props.removeItem(props.id)}><i className="fas fa-trash-alt"></i></span>
        </div>
    )
}

export default Todo;
