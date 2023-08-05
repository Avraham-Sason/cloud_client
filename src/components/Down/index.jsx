import React from 'react'

export default function Down(props) {// requires -fileUrl-

    const downloadFile = (e) => {
        e.target.download = e.target.name
        e.target.remove();
    }
    return (
        <div>
            <a href={props.fileUrl} onClick={downloadFile} >download⏬</a>
        </div>
    )
}






