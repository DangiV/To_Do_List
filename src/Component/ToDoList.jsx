import React, { useState } from 'react'

const ToDoList = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([])
    const [toggle, setToggle] = useState(true)
    const [editId, setEditId] = useState(null)

    const AddItem = () => {
        if (!inputData) {
        }
        else if (inputData && !toggle) {
            setItems(
                items.map((item) => {
                    if (item.id === editId) {
                        return { ...item, name: inputData }
                    }
                    return item;
                })
            )
            setToggle(true)
            setInputData("")
            setEditId(null)
        }
        else {
            const newItem = { id: new Date().getTime(), name: inputData }
            setItems([...items, newItem])
            setInputData("")
        }
    }

    const EditItems = (id) => {
        const AfterEdit = items.find((item) => {
            return item.id === id
        })
        setToggle(false)
        setInputData(AfterEdit.name)
        setEditId(id)
    }
    const RemoveItem = (id) => {
        const newItems = items.filter((item) => {
            return id !== item.id
        })
        setItems(newItems)
    }

    return (
        <>
            <h1>To Do List</h1>

            <input type="text" placeholder='enter item' value={inputData} onChange={(e) => setInputData(e.target.value)} />
            {toggle ? <button onClick={() => AddItem()}>Add</button> : <button onClick={() => AddItem()}>Update</button>}

            <ol>
                <ul>
                    {items.map((item) => {
                        return <li key={item.id}>{item.name}
                            <button onClick={() => RemoveItem(item.id)}>remove</button>
                            <button onClick={() => EditItems(item.id)}>edit</button>
                        </li>
                    })}
                </ul>
            </ol>

        </>
    )
}

export default ToDoList
