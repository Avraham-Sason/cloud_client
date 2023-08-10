import React, { useContext } from 'react'
import { DataContext } from '../../context'


export default function navItem() {
  const context = useContext(DataContext)//={components to render}
console.log(context.navItem);
  return (
    <ul>
      {(context.navItem.array.length) > 0 && context.navItem.array.map((val, i) => {
        return <li key={i}>{val}</li>
      })}
    </ul>
  )
}
