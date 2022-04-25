import React from 'react';

/*
  当封装的组件中有button或者input这些组件中，需要在渲染 的组件中直接获取焦点或者操作dom时，可以通过ref属性直接进行操作
  但是，在react中ref属性不会进行传递也不能接受，所以使用下面两种方法进行ref传递（ref转发）
*/

// 1、使用props属性进行接受然后进行传递，虽然ref属性不能被props接受，但是传递的时候可以使用普通的字段属性
// function RefForward(props) {

//   console.log(props, 'RefForward')

//   return <input ref={props.ha}></input>;
// }

// 2、使用 react中自带的forwardRef方法进行接受，forwardRef方法接受一个callback，并返回的你返回的值，callback传入两个参数，第二个参数就是传入的ref属性，然后再input组件上使用即可
const RefForward = React.forwardRef((props, ref) =>{
  console.log(props, 'www')
  return <div>
    <input ref={ref}></input>
  </div>;
})

export default RefForward