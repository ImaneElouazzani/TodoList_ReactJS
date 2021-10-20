import React, { useState } from 'react';
import Task from './Task';
import { v4 as uuid4 } from "uuid"


const Input = () => {
    const [value,setValue]=useState("")
    const [data, setData] = useState([
        {txt: "dodo", id: uuid4()},
        {txt: "dentiste", id: uuid4()},
        {txt: "coiffeuse", id: uuid4()}
    ])
    console.log(data)

    const deleteElem = (id) => {
        const filtredElem = data.filter(item => item.id !== id )
        setData(filtredElem)
    }

    const addElem = () => {
        if (value) {
            const obj = {
                txt: value,
                id: uuid4()
            }
            const newData = [...data, obj]
            setData(newData)
            setValue("")
        }
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <button
                onClick={() => {addElem()}}
            >Add Task</button>
            <ul>
                {data.map((item) => {
                    return (
                        <Task
                            item={item}
                            del={deleteElem}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default Input;
