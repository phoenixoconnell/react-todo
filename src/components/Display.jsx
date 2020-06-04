import React, { useState } from 'react';
import Add from './Add';
import Todo from './Todo';

function Display() {
    const [toDoList, setToDoList] = useState([]);

    const addItem = itemName => setToDoList([...toDoList, itemName]);

    const removeItem = id => setToDoList([...toDoList].filter((v, i) => i !== id));

    const resetList = () => setToDoList([]);

    return (
        <div>
            <Add addItem={addItem} />
            <button onClick={resetList}>Reset List</button>
            {toDoList.map((v, i) => <Todo key={i} id={i} name={v} removeItem={removeItem} />)}
        </div>
    )
}

export default Display;
