import { React, useContext, useState } from 'react'
import { DataContext } from '../../context'
import styles from './style.module.css'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function navItem({ item, arr}) {
  const [display, setDisplay] = useState(false)
  const context = useContext(DataContext)//={components to render}

  function setnavitemfun(e) {
    e.stopPropagation()
    let navItemArray =
    {
      name: item,
      array: arr
    }
    context.setNavItem(navItemArray)//set in array of components that will be rendered
    setDisplay(!display)
  }
  return (
    <>
      {/* <button name={item} onClick={(e) => setnavitemfun(e)}><BsThreeDotsVertical/></button> */}
      <button onClick={(e) => setnavitemfun(e)}>⁝</button>
      {display && context.navItem.name == item ?
       <ul>
        {context.navItem.array.length > 0 && context.navItem.array.map((val, i) => {
          return <li className={styles.nav} key={i}>{val}</li>
        })}
      </ul> : ""}
    </>
  )
}
