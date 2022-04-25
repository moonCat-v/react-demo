/*
  在react中使用jsx，由于jsx语法会编译为react.createdElement形式调用，所以即使react库没有直接使用，也必须进行导入
  因为react库必须包含在jsx代码的作用域内
*/
import React, { createRef, useEffect } from 'react';
// import RefForward from './components/refForward';
// import RenderProps from './components/renderProps'
// import Round from './components/round';
// import DragEvemt2 from './components/dragEvemt2';
import DragEvent from './components/dragEvent';

// import Slot from './components/Slot';

// import Model from './components/model'

export default function Index() {
  // const refButton = createRef()

  // useEffect(() => {
  //   // console.log(refButton.current, '1111')
  //   refButton.current.focus()
  // }, [refButton])

  // const Components = {
  //   Button(props) {
  //     return <button>组件{props.children('点击')}</button>
  //   }
  // }

  /* 
    diff
    在react中的diff算法是从组件树的根节点进行比较的
    1、当根节点的元素为不通类型时（如：span和div）那么就会拆卸掉整个组件树并渲染新的组件树，内部的元素和组件不会复用，而是也会跟着卸载和渲染，那么在卸载和重新渲染的过程中对应的生命周期钩子也会进行相应的执行。
    2、当根节点为相同类型元素时，那么元素不会进行卸载和更新，只会去对比更新元素上的属性（如<span title="aaa"></span>和<span title="bbbb"></span>）然后继续往下递归其子元素
    3、当遍历子元素时会优先对比相同key值得元素进行更新，然后在逐级对比其他子元素
  */

  return <div>
    <hr />
    {/* {React.createElement(RefForward, {ref:refButton, ha:refButton}, 'ssss')} */}
    {/* 下面组件的写法，属于jsx语法，其实是react.createElement(组件，props，children)方法的语法糖, 使用原来方法一样进行渲染。（在组件元素多级嵌套的时候还是使用jsx语法简洁易读）
      在jsx中组件的开头必须为大写字母,
      jsx中属性未进行赋值如aa那么它在props接受时默认为true，
      当要传递一个对象中多个属性时可以直接使用...运算符如{...Components}
    */}
    {/* {
      ref属性直接传递到dom元素时，其current属性指向的就是这个元素对象本身，
      如果指向的自行定义的class组件，那么其current属性指向的就是class组件的实例。
      （注意：ref不能直接指向函数组件，因为他没有自己的实例，打印为null， 如果想接受的话，子组件可以使用forword方法就行接受）
      ref属性除了使用已经创建好的引用外，还可以传入一个函数，当dom加载完成前，会自动的将ref的引用传入函数内，只需要在函数内使用形参进行接受就可以
    } */}
    {/* <RefForward aa ref={refButton} ha={refButton} {...Components} /> */}


    {/* 在jsx语法中可以使用点语法进行组件加载，适用于多个组件集合的情况下 */}
    {/* <Components.Button> */}
      {/* 组件的children可以传递任何类型，包括字符串、组件、元素、函数等等 */}
      {/* {(str) => str}
    </Components.Button>
    <RenderProps render={bound => <Round {...bound} />} /> */}

    <DragEvent></DragEvent>
    {/* <DragEvemt2></DragEvemt2> */}
    {/* // "sideEffects": , // 这个属性可以设置是   否要进行treshaking将多余的代码删除，也可以设置引入的指定的文件进行删除 */}
    {/* <Model></Model> */}

    {/* 使用webpack-library配置自己创建的项目目录下编译后，可以将写的方法和文件打包成为一个模块，来让别人进行引入（可以自己本地项目引入也可以发布在npm上） 如ladash这个库 */}
    {/*  webpack和框架等，只是为了在开发阶段让你更好的更清晰的可以去使用一些现有的库或者语法是项目更好维护和更快的开发
    ，最后都会通过构建工具，将写的高级语法转化为最原始的index。html、js、css等文件，然后再引入进来进行加载  */}

    {/* 在webpack中使用fileloader以后，引入的图片会当做模块进行处理，但是她的类型是esmoudle，所以需要加上.defaulte属性使用，如果不想加defalte的话
    1、直接使用es引入 import xxx from ‘dd’   2、修改当前的loader配置，吧esMoudle设置为false即可*/}
    {/* url-loader 将图片转为base64格式，不在进行拷贝，同事url-loader内部可以调用file-loader，需要设置limit属性
    通常来说，都是小图片转为base64的格式，而大图片还是采用拷贝后当做模块进行引入 */}
    {/* 在webpach5中提供了asset模块就不需要在使用多个loader进行处理资源了， 1、resource模式-相当于fileloader将图片当做模块进行拷贝 2、inline模式相当于url-loader
    将资源转成base64格式直接在代码中使用。 还可以直接设置asset通过配置将不同大小的资源进行不通的处理 */}

    {/* 使用asset处理字体图标---直接粘贴相应的font文件，然后引入css文件，使用asset处理 ttf等资源文件，是webpack打包的时候能够识别就可以 */}

    {/* <Slot /> */}
    
  </div>;
}
