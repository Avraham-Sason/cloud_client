import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context'
import apiCalls from '../../functions/apiCalls'
import NavItem from '../../components/NavItem'
import Delete from '../../components/Delete'
import Down from '../../components/Down'
//let nowUrl
function CloudBoard() {
    const context = useContext(DataContext)
    useEffect(() => { boardrender() }, [context.activeUrl])


    const boardrender = async () => {
        try {
            let dir = context.activeUrl.join("")
            let url = `files/?id=${context.user._id}&dir=${dir}`//with id in dir from the context
            let folder = await apiCalls.get(url)
            await context.setActiveFolder(folder.data)
        } catch (error) {
            console.log(error);
        }
    }

    const buttenopenfolder = async (e) => {
        let foldername = "/" + e.target.name
        context.setActiveUrl(prev => {
            const newdir = [...prev, foldername]
            return newdir
        })
    }
    let navItemArray = {}
    function setnavitemfun(e) {

        navItemArray =
        {
            name: e.target.name,
            array: [<Delete />, <Down />]
        }
        context.setNavItem(navItemArray)//set in array of components that will be rendered
    }

    return (
        <div>
            {context.activeFolder.length > 0 ? context.activeFolder.map((item, index) => {
                return <ul key={index}>
                    <li name={item} onClick={(e) => buttenopenfolder(e)}> {item}</li>
                    <button name={item} onClick={(e) => setnavitemfun(e)}>⁝</button>
                    {/* {context.navItem.name=={item} && <NavItem />} */}
                    {<NavItem />}
                </ul>
            }) : null}

        </div>

    )
}

export default CloudBoard