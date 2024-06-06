'use client'

import { FC, useState } from 'react'
import { ChromePicker } from 'react-color'
import { useDraw } from './hooks/useDraw'

const Page: FC = () => {
  
  const [color, setColor] = useState<string>('#000')
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine)

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint
    const lineColor = color
    const lineWidth = 5

    let startPoint = prevPoint ?? currentPoint
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = lineColor
    ctx.moveTo(startPoint.x, startPoint.y)
    ctx.lineTo(currX, currY)
    ctx.stroke()

    ctx.fillStyle = lineColor
    ctx.beginPath()
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  return (
    <div className='w-screen h-screen bg-white relative'>
      <div className='absolute top-10 left-10 flex flex-col gap-10 pr-10'>
        <ChromePicker color={color} onChange={(color) => setColor(color.hex)} />
        <button type='button' className='p-2 rounded-md border border-black' onClick={clear}>
          Clear canvas
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={window.innerWidth}
        height={window.innerHeight}
        className='border border-black rounded-md w-full h-full'
      />
    </div>
  )
}

export default Page