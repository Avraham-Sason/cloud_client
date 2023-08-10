import React, { useContext } from 'react'
import { DataContext } from '../../context'


export default function navItem() {
    const context=useContext(DataContext)//={components to render}

  return (
    <ul>
        {(context.navItem.length)>0&&context.navItem.map((navItem ,i)=>{
        <li key={navItem.i}>{navItem}</li>
        })}
    </ul>
  )
}
