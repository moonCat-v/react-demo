import React, { Component } from 'react';

// 避免因代码错误导致整个页面白屏现象出现，所以定义错误边界组件
export default class Error extends Component {
  constructor(props) {
    super(props)
    this.state = {haserror: false}
  }
  // 当组件在渲染中出现错误时，会导致页面白屏问题，这时需要将组件错误捕获进行ui降级展示-定义错误边界，但是错误边界一下错误不能进行捕获
  /*
    1、事件处理中的错误（可使用try -catch进行捕获）
    2、异步中的错误（如promise、settime等）
    3、服务端渲染
    4、错误组件自身的错误
  */

  // try catch 用于捕获代码中的错误，也就是命令式代码中的错误，但是react组件是声明式的，所以无法捕获，需要定义错误边界
  try {
    // 执行的操作，有错误会抛出
  } catch (error) {
    console.error()
  }

  static getDerivedStateFromError() {
    // getDerivedStateFromError 方法来定义错误边界，展示降级后的错误页面
    return { haserror: true }
  }

  // 这个钩子在组件渲染之前会触发，当返回true时会渲染整个组件，如果返回false时，就会跳过组件的渲染
  // 默认会返回true，我们在不必要的时候返回false进行性能优化
  // 两个参数，下一次的state和props
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  componentDidCatch(error, errorInfo) {
    // 发生错误时，打印错误日志
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.haserror) return <div>发生错误了</div>;
    // 错误边界只能捕获子组件的错误，但是无法捕获自身的错误
    // 注意：react16以后新行为增加，所有未被错误边界捕获的错误，将会导致整个react组件树进行卸载
    return <div>{this.props.children}</div>
  }
}
