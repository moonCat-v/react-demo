import React, { useReducer } from 'react'
import produce from 'immer'

const obj = {
  a: 1,
  b: 4,
  c: {
    d: 5
  }
}

const reducer = (state, action) => {
  const { type,  } = action
  switch (type) {
    case 'ADD':
      console.log(state, 'ww')
      state.num = state.num + 1
      // return state
      // return {
      //   ...state,
      //   num: state.num + 1
      // }
    return
    default:
      break;
  }
}

export default function Immer() {
  // immer库的使用
  // 1\将第一个参数原数据传入，返回一个新的操作后的数据，他们共用没有修改的部分
  // 如果没有修改值，就返回原地址引用的值，有修改的话就返回新的
  // const numData = produce(obj, draft => { draft.c.d = 3 })
  // console.log(numData === obj, 'numData')

  // 2、先返回一个生产者函数，然后再次调用生产者的时候给传入要代理的值
  // 调用生产者的时候，返回的就是传入数据的代理值
  // const producer = produce(draft => {})
  // let numData2 = producer(obj)
  // console.log(numData2, 'producer')

  // this.setState(produce(draft => {draft.p = 11}))

  // producer高阶函数的实现
  // const produce = (callback) => {
  //   return (currentState) => {
  //     callback(currentState)
  //   }
  // }


  // 使用immer对educe进行优化，可以不用每次返回新的值，
  // 利用produce传入一个函数参数 返回生产者函数的特性，当state中的值发生改变时生产者函数会返回新的值由redux检测到，刷新页面
  // 没有改变的时候就返回原来的值，页面不进行刷新
  const [state, dispatch] = useReducer(produce(reducer), {num: 0})
  console.log(state, 'dddd')

  return (
    <div>
      <hr />
      immer
      <p>{state.num}</p>
      <button onClick={() => dispatch({type: 'ADD'})}>++</button>
    </div>
  )
}
