import React, { Suspense, lazy, createContext } from 'react'

// import TimeOut from './components/timeOut'

// 使用react。lazy+import动态的引入组件
const TimeOut = lazy(() => import('./components/timeOut'))


// 使用createContext中的方法，创建一个组件可以通过value属性向所有包裹的后代注入参数
// 这样就可以不需要props逐层传递，后代可以通过useContext hook进行接收传入的参数
// 传入的参数，是当所处的组件树中匹配不到provider时才会生效
const contextCom = createContext(null)

export default function Paper() {
  return (
    <div>
      <hr />
      Paper
      {/* 进行懒加载引入的组件不一定会立马展示，需要使用Suspense组件 并设置 fallbak属性进行加载前的占位展示 */}
      <Suspense fallback={<div>loading.......</div>}>
        {/* 1、provider通过value属性向后代组件注入依赖， 可以有多个provider组件进行嵌套使用，但是里层的会覆盖掉外层的（也就是说消费组件只会接受到最近一层的provider中value的值）
         2、当provider中的value中的值发生变化时，所有接收使用它值得组件都会进行刷新（注意value新旧值变化使用object。is方法监测，所以引用地址一样时不会触发更新）
         3、如果value值直接传递一个对象，则每次渲染provider组件时，会重新渲染下面所有的组件，因为value采用的是浅比较，每次provider组件重新渲染value都会赋值给一个新的对象，所以每次都会
         监测到value进行变化，所以组件就会渲染，解决方法将传入的数据进行一个缓存，改变的时候才进行更新*/}
        <contextCom.Provider value={{a: 1}}>
          <TimeOut />
        </contextCom.Provider>
      </Suspense>
    </div>
  )
}

