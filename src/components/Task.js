import React from 'react';

const Task = ({item, del}) => {
    return (
        <div>
            <li>
                <div><input type="checkbox"/>{item.txt}</div>
                <button
                onClick={()=> del(item.id)}
                >delete</button>
            </li>
        </div>
    );
}

export default Task;
