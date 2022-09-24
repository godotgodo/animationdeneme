import React from 'react'
import { useEffect } from 'react';

function Candle(props) {
    const thisCandleProperties = props.candle;

    useEffect(() => {
    }, [])
    return (
        <div className={`w-8 text-xs`} style={{ height: thisCandleProperties.height, backgroundColor: thisCandleProperties.color, marginTop: thisCandleProperties.top }} key={thisCandleProperties.id}>
            {thisCandleProperties.height}
        </div>
    )
}

export default Candle