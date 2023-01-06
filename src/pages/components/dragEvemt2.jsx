import React, { useEffect, useRef } from 'react'
import './style/drag.css'

const list = [
  {
    id: '1',
    text: '序列1'
  },
  {
    id: '2',
    text: '序列2'
  },
  {
    id: '3',
    text: '序列3'
  },
  {
    id: '4',
    text: '序列4'
  },
  {
    id: '5',
    text: '序列5'
  },
]

export default function DragEvent2() {

  const handleRightDragOver = e => e.preventDefault()
  const leftRef = useRef()
  const rightRef = useRef()

  const handleLeftDrop = e => {
    e.preventDefault();
    const { dataset: { id }, classList } = e.target
    classList.remove('over')
    const curStartId = JSON.parse(e.dataTransfer.getData('nodeId'))
    const curData = document.getElementById(curStartId)
    
    console.log({id, curData, curStartId}, e.target, e.target.parentNode,  '左边边--------------',)
    // if (id) {
    //   leftRef.current.insertBefore(curData, e.target)
    // } else {
    //   leftRef.current.appendChild(curData)
    // }
  }

  const handleRightDrop = e => {
    e.preventDefault();
    const { dataset: { id }, classList } = e.target
    classList.remove('over')

    const curStartId = JSON.parse(e.dataTransfer.getData('nodeId'))
    const curData = document.getElementById(curStartId)
    const cloneNode = curData.cloneNode(true)
    curData.parentNode.removeChild(curData)
    
    console.log({id, curData, curStartId}, e.target, e.target.parentNode, '右边--------------')
    const partentNode = document.getElementById('right')
    if (id) {
      partentNode.insertBefore(cloneNode, e.target)
    } else {
      partentNode.appendChild(cloneNode)
    }
  }

  const handleDragEnter = e => e.target.classList.add('over')

  const handleDragLeave = e => e.target.classList.remove('over')

  const handleDragStart = e => {
    const { dataset: { id } } = e.target
    console.log('tuozhuaikaishi')
    return e.dataTransfer.setData('nodeId', JSON.stringify(id))
  }

  return (
    <div className="dragEvent-wrap">
      <div
        className="left content-wrap"
        ref={leftRef}
        onDragOver={handleRightDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleLeftDrop}
        onClick={() => console.log(111111111)}
      >
        {
          list.map(item => 
          (<div
            className="item-text"
            key={item.id}
            id={item.id}
            data-id={item.id}
            draggable
            onDragStart={handleDragStart}
          >
            {item.text}
          </div>))
        }
      </div>
      
      <div
        id="right"
        className="right content-wrap"
        ref={rightRef}
        onDragOver={handleRightDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleRightDrop}
        onClick={() => console.log(222222222)}
      >
      </div>
    </div>
  )
}
