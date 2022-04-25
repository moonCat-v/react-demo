import React from 'react'

// React.Children.map 方法
export default function MoreChild(props) {

  const { children } = props

  return (
    <div>
      {
        // 可以遍历children中的节点，而不用去判断children是什么类型, 每个节点执行回调
        React.Children.map(children, (child, index) => {
          // 可以给元素添加指定的属性或事件
          const node = React.cloneElement(child, {
            className: 'hahaha',
            index
          })
          console.log(node, 'child')
          return node
        })
      }
    </div>
  )
}
