import React from 'react'

export default function Partent() {

  return (
    <div>
      {/* 在组件中传入自定义展示的内容 */}
      <Slot top={<p>我是展示在top的内容</p>} bottom={<p>我是展示在bottom的内容</p>}>
        <div>我被在使用的组件中展示了</div>
      </Slot>
    </div>
  )
}


function Slot(props) {
  // 接收children属性
  const { children, top, bottom } = props
  console.log(props, 'props---')

  return (
    <div>
      {/* 渲染自定义的组件 */}
      {top}
      {top && <hr />}
      <p>我是slot组件</p>
      {children}
      <hr />
      {bottom}
    </div>
  )
}
