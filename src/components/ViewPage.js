import React, { useState } from 'react'
import classes from './ViewPage.module.css'

function ViewPage({ handleClick, cards }) {

    const [switchData, setSwitchdata] = useState(true)

    const dataFront = cards.map((card, i) => {
        return (
            <div key={i}>
                {card.front}
            </div>
        )
    })


    const dataBack = cards.map((card, i) => {
        return (
            <div key={i}>
                {card.back}
            </div>
        )
    })

    const handleSwap = () => {
        setSwitchdata(!switchData)
    }



    return (
        <div>
            <p>Halaman View</p>
            <div className={classes.container_view} onClick={handleSwap}>
                {switchData ? dataFront[0] : dataBack[0]}
            </div>
            <button onClick={handleClick}>Go to Edit Page</button>
        </div>
    )
}
export default ViewPage
