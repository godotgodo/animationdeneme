import React from 'react'
import { useState } from 'react';
import Candle from './Candle';


function App() {
  const [showCandle, setShowCandle] = useState(false);
  const getCandles = () => setShowCandle(prevstate => !prevstate);
  var candles = [];
  for (let i = 0; i < 30; i++) {
    const topFunction = (currentColor, currentHeight) => {
      var top = 0;
      for (let j = 0; j < i; j++) {
        if (candles[j]?.color === 'red') {
          top += candles[j].height;
        }
        else if (candles[j]?.color === 'green') {
          top = top - candles[j].height;
        }
      }
      if (currentColor === 'green') {
        top = top - currentHeight;
      }
      return top
    }
    var color = Math.round(Math.random()) ? 'green' : 'red';
    var height = Math.round(Math.random() * 80);

    candles.push({
      id: i,
      color: color,
      height: height,
      top: topFunction(color, height)
    })

  }

  var enKucuk = 0;
  var enBuyuk = 0;
  candles.forEach(candle => {
    if (enKucuk > candle.top) {
      enKucuk = candle.top;
    }
    else if (enBuyuk < candle.top) {
      enBuyuk = candle.top;
    }
  })

  return (
    <div className={`text-xl flex h-full min-h-screen w-screen justify-center items-center ${enKucuk < -300 && 'items-end'} ${enBuyuk > 300 && 'items-start'}`}>
      <button onClick={getCandles} className="absolute top-1/2 left-24">{showCandle ? 'Close Candles':'New Candles'}</button>
      {
        showCandle &&
        <div className='flex border-t-4' >
          {
            candles.map((candle) => {
              return <Candle candle={candle} />
            })
          }
        </div>
      }
    </div>
  )
}

export default App