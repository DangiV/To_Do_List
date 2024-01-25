import React, { useState } from 'react'

const ToDoList = () => {
    const [enterData, setEnterData] = useState('')
    const [dataAdded, setDataAdded] = useState([])

    const DataEntered = (e) => {
        setEnterData(e.target.value)
    }

    const AddedData = () => {
        setDataAdded((oldData) => {
            return [...oldData, enterData]
        })
        setEnterData("")
    }

    const RemoveData = (id) => {
        setDataAdded((oldItem) => {
            return oldItem.filter((item, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <h1>To Do List</h1>
            <input placeholder='enter item' value={enterData} onChange={DataEntered} />
            <button onClick={() => AddedData()}>Add</button>

            <ol>
                <ul>
                    {dataAdded.map((item, index) => {
                        return <li key={index}>{item} <button onClick={() => RemoveData(index)}>Remove</button></li>
                    })}
                </ul>
            </ol>
        </>
    )
}

export default ToDoList
