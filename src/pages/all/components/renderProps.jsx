import React, { useState } from 'react'
// import propTypes from 'prop-types'
// propTypes用于类型检查

export default function RenderProps(props) {
  const { children } = props

  const [bound, setBound] = useState({})

  const handleMouse = event => {
    setTimeout(() => {
      setBound(draft => {
        return {
          x: event.clientX,
          y: event.clientY
        }
      })
    }, 100)
  }
  return (
    // StrictMode  严格模式组件，不会渲染额外的ui，只是为后代元素提供额外的检查。（注意：严格模式仅仅在开发环境下运行，生产构建中不会产生影响。）
    // 作用：1、识别不安全的生命周期
    // 2、使用过时字符串ref api的警告
    // 3、过生钩子或者api的警告
    // 4、检测意外的副作用方法
    <React.StrictMode>
      <div
        style={{width: '100%', height: '200px', background: 'red' }}
        onMouseMove={handleMouse}>
          {props.render(bound)}
      </div>
      {/* children是一个数组就会被遍历，并未每个子节点调用传入的函数，并返回一个数组
      如果 children是null那么久返回null*/}
      {React.Children.map(children, () => {})}
    </React.StrictMode>
  )
}
