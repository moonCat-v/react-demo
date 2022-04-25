import React, { useState, useRef } from 'react'
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

export default function DragEvent() {

  const [leftDragList, setleftDragList] = useState(list)
  const [rightDragList, setrightDragList] = useState([])
  const dataRef = useRef(null)

  // 定义初始化元素需要数据
  dataRef.current = {
    left: {
      callback: setleftDragList,
      list: leftDragList,
    },
    right: {
      callback: setrightDragList,
      list: rightDragList,
    }
  }

  // 拖拽元素在目标元素移动事件-阻止浏览器默认行为让目标元素成为可释放的目标元素
  const handleDragOver = e => e.preventDefault()

  // 拖拽完成事件-处理完成拖拽时的逻辑
  const handleDrop = (callback, arrow) => {
    return e => {
      const { dataset: { id }, classList } = e.target
      classList.remove('over')
      const curData = JSON.parse(e.dataTransfer.getData('itemData'))

      callback(preData => {
        const mapPreData = JSON.parse(JSON.stringify(preData)).filter(item => item.id !== curData.id)
        if (!id) return [...mapPreData, curData]

        const index = mapPreData.findIndex(item => item.id === id)
        mapPreData.splice(index, 0, curData)
        return mapPreData
      })

      if (arrow === 'left') setrightDragList(preData => preData.filter(item => item.id !== curData.id))
      else setleftDragList(preData => preData.filter(item => item.id !== curData.id))
    }
  }

  // 拖拽元素进入目标元素时触发事件-为目标元素添加拖拽元素进入时的样式效果
  const handleDragEnter = e => e.target.classList.add('over')

  // 拖拽元素离开目标元素时触发事件-移除目标元素的样式效果
  const handleDragLeave = e => e.target.classList.remove('over')

  // 拖拽开始时触发事件-通过dataTransfer对象设置所需要的数据
  const handleDragStart = data => e => e.dataTransfer.setData('itemData', JSON.stringify(data))

  return (
    <div className="dragEvent-wrap">
      {
        Object.entries(dataRef.current).map(([key, { callback, list }]) => {
          return (
            <div
              key={key}
              className="content-wrap"
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop(callback, key)}
            >
              {
                list.map(item => 
                (<div
                  className="item-text"
                  key={item.id}
                  data-id={item.id}
                  // draggable 属性设置元素为可拖拽元素
                  draggable
                  onDragStart={handleDragStart(item)}
                >
                  {item.text}
                </div>))
              }
            </div>
          )
        })
      }
    </div>
  )
}
