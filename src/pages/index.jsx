import React, { useState, useEffect } from 'react'
// import Demo from './demo/Demo'
// import Haaaa from './immer/immer'
// import Paper from './paper/paper'
import All from './all'

const nodeObj = {
  // Demo,
  // Haaaa,
  // Paper,
  All
}

export default function Index() {
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFlag(false)
    }, 3000)
  }, [flag])

  // let ShowNode = Demo
  // if (!flag) ShowNode = Haaaa

  return (
    <div>
      {/* {ShowNode} */}
      {/* <ShowNode className='22222' /> */}
      {/* <Demo></Demo> */}
      {/* <Immer></Immer> */}

      {/* 循环渲染组件 */}
      {Object.values(nodeObj).map((Key, index) => <Key key={index} />)}
    </div>
  )
}
