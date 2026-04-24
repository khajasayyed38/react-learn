import React from 'react'
import { useDispatch } from 'react-redux'
import {addMoney} from './storeq.js'
import {removeMoney} from './storeq.js'

export default function Button() {
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=> dispatch(addMoney(500))}>Add Money</button>
       <button onClick={()=> dispatch(removeMoney(1000))}>remove Money</button>
    </div>
  )
}
