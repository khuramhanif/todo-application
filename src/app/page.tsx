"use client"
import React, { useState } from 'react';



const home = () => {

  const [inputVal, setInputVal] = useState("")
  const [items, setItems] = useState(["value 1", "value 2"])
  const addItem = () => {
    if (!inputVal) {
      alert("Enter some value")
    }
    else {

      setItems([...items, inputVal])
      setInputVal("")
    }
  }
  const DeleteItem = (id:unknown) => {
    const newItem = items.filter((val, index) => {
      return id !== index
    })
    setItems(newItem)
  }


  return (

    <div className='mx-auto max-w-sm border border-orange-700 mt-6 py-4 px-4 border-dotted'>
      <h1 className='text-3xl font-bold mb-4'>Todo App</h1>

      <div >
        <input type='text' placeholder='Enter your todo item'
          className='border border-gray-400 mr-2 py-2 px-4 flex-grow' value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value)

          }}
        />
        <button className='py-2 px-4 bg-blue-400 hover:bg-cyan-950 text-white font-bold' onClick={addItem}  >Add</button>
      </div>
      <ul className='list-disc list-inside py-4'>
        {items.map((val, index) => {
          return (
            <div className='py-4'>
              <li className='flex gap-x-2 items-center '> {val}
                <button onClick={() => DeleteItem(index)} className='border bg-green-900 text-white py-2 px-4 rounded'>Delete</button> </li></div>
          )
        })}
      </ul>
    </div>
  )

}

export default home