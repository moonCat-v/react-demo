import React, { useMemo, useEffect, useRef } from 'react'
import './style/round.css'


export default function Round({x, y}) {

  // useEffect执行的时候，dom都已经更新渲染完毕了
  // 每次更新后都是新的effect，新的会替换掉之前的effect，如果有依赖的数据，就不会在调用effect中的函数了
  useEffect(() => {
    console.log('加载和更新')
    if (x && y) document.title = x + '-' + y
    // 组件卸载前执行的函数，【】中的函数有变化时，每次渲染后都会进行清除
    // 【】为空数组时，只有初次加载或者卸载时才会执行
    return () => {
      // console.log('卸载卸载')
    }
  }, [x, y])

  const ref = useRef()

  const getstyle = useMemo(() => {
    return {
      top: y,
      left: x
    }
  }, [x, y])
  // useMemo 等等hook 是一种复用状态逻辑的方式，state并不会复用，所以每一次外部引用的时候都是全新的state
  return (
    <div className='round-wrap' ref={ref} style={getstyle} />
  )
}
