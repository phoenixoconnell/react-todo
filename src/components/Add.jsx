import React, { useState } from 'react';

function Add(props) {
    const [newItem, setNewItem] = useState('');

    const changeText = e => {
        setNewItem(e.target.value);
    }

    const add = () => {
        props.addItem(newItem);
        setNewItem('');
    }

    return (
        <div className='add'>
            <input placeholder='Add a new item' value={newItem} onChange={e => changeText(e)} />
            <button className='add-button' onClick={add}>Add</button>
        </div>
    )
}

export default Add;
