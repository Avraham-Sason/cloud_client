import React, { useContext } from 'react'
import { DataContext } from '../../context'
import apiCalls from '../../functions/apiCalls'

export default function Rename(props) {
    const context = useContext(DataContext)

    const renameitem = async () => {
        e.preventDefault()
        const dir = context.activeUrl.join("") + '/' + props.filename
        const dir2 = context.activeUrl.join("") + "/" + e.target.newname
        const resolt = await apiCalls.put(`fils/rename/?id=${context.user._id}&dir=${dir}&dir2=${dir2}`)
        context.setActiveFolder(resolt)
    }

    return (
        <div>
            <form onSubmit={(e) => renameitem(e)}>
                <input type='text' onChange="" name={newname} />
                <button type='submit'  >rename</button>
            </form>
        </div>
    )
}
