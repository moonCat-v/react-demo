import React, { useEffect, useState, useRef, Fragment } from 'react'
import { useImmer } from 'use-immer'

export default function TimeOut(props) {
  // console.log(props, 'e')
  // 定义的状态是独有的，其他组件都没法访问，除非她自己暴露出去如： props向下传递
  // 所以react中的数据流是单向数据流，正常来说都是向下流动，汇聚到props上
  const [ date, setDate ] = useState(Date.now())
//-----------------------------------------------------------------------------------------------------------------------------------
  // 对标class组件中的生命周期; 初始化完成
  useEffect(() => {
    const timeid = setInterval(() => {
      // 如果需要依赖上一个参数的话，就传入一个函数 datePre为上一个值
      setDate(datePre => new Date())
    }, 1000)
    // 销毁完成
    return () => clearInterval(timeid)
  }, [])

  const hanldleClick = (e, str) => {
    switch (str) {
      case '在传递另外的参数':
        e.preventDefault() // 在jsx中需要使用preventDefault（）方法显示的阻止默认的浏览器行为。
        break;
        case 'true':
          setShowButton(false)
          break;
        case 'false':
          setShowButton(true)
          break;
      default:
        break;
    }
  }
//-----------------------------------------------------------------------------------------------------------------------------------
  // 在class组件中，setSatte方法是异步的，为了节省效率会合并n个setState进行一次dom更新，她可以穿一个对象，还可以传函数
  // 当需要使用到上一次state中的数据时，就使用函数，参数为上一次的state和此次更新应用的props，返回值为此次更新的值
  // 注意：setState是合并更新，不是替换。。。。。。。。而hook中的set方法是替换而不会合并
  // this.setState((state, props) => {})
//-----------------------------------------------------------------------------------------------------------------------------------

  // 1、条件渲染的几种方式
  const [showButton, setShowButton] = useState(true)
  let button = <button onClick={e => hanldleClick(e, 'true')}>true</button>
  if (!showButton) button = <button onClick={e => hanldleClick(e, 'false')}>false</button>

  const listData = [1,2,3,4,5].map(item => <li key={item}>{item * 2}</li>)

  //-----------------------------------------------------------------------------------------------------------------------------------
  // 受控表单->通过组件中的state来管理表单的数据
  // 使用useImmer 库的hook 来替代 usestate这个hook
  const [formValue, setFormValue] = useImmer({name: '', sex: ''})
  const hanldleSubmit = (e) => {
    console.log(formValue)
    e.preventDefault()
    console.log(fileinput.current.files[0], 'fileinputfileinputfileinputfileinput')
  }

  const hanldChange = e => {
    // 通过给元素设置name属性，来进行给每个属性进行数据的设置
    const { name, value } = e.target
    setFormValue(draft => {
      draft[name] = value
    })
  }

  // useref
  // 获取上传的文件
  const fileinput = useRef()

  // mark在react中没有插槽的概念，得益于jsx对于数据和组件的渲染，所有的东西都可以通过props进行传递，并渲染出来
  return (
    <div>
      {'定时器更新数据' + date}
      {/* jsx中的时间绑定采用小驼峰命名的规则。 它其实是重写了原生的方法 */}
      <button onClick={e => hanldleClick(e, '在传递另外的参数')}>可以点击</button>
      {/* 条件渲染的几种方式 */}
      {/* 1、变量赋值渲染 */}
      <div>
        {button}
      </div>
      {/* 2、三元表达式 */}
      <div>
        {showButton? <button onClick={e => hanldleClick(e, 'true')}>true</button>: <button onClick={e => hanldleClick(e, 'false')}>false</button>}
      </div>
      {/* 3\ && 运算符 */}
      <div>
       {showButton && <button onClick={e => hanldleClick(e, 'true')}>true</button>}
       {!showButton && <button onClick={e => hanldleClick(e, 'false')}>false</button>}
      </div>
      {/* 循环渲染元素或者组件 */}
      <ul>
        {listData}
      </ul>
      {/* 原生表单 */}
      <form onSubmit={hanldleSubmit}>
        <label htmlFor="">
          名字： 
          <input type="text" name="name" value={formValue.name} onChange={hanldChange} />
        </label>
        <label htmlFor="">
          性别： 
          <input type="text" name="sex"  value={formValue.sex} onChange={hanldChange} />
        </label>
        <label htmlFor="">
          备注： 
          <textarea type="text" name="mark" value={formValue.mark} onChange={hanldChange} />
        </label>
        <label htmlFor="">
          上传： 
          <input type="file" ref={fileinput} />
        </label>
        <input type="submit" value="提交" />
      </form>

      {/* 在组件中进行组件分割，但是又不想增加额外的元素时，可以使用fragment 或者<></> 标签
      使用场景是： 当不需要传入key时就使用空标签*/}
      <div>
        <Fragment key={111}>
          <div>标签包裹</div>
        </Fragment>
        <>
          <div>空标签包裹</div>
        </>
      </div>
      {/* 使用webpack进行构建项目的时候，就会涉及到项目的打包，但是当我们项目比较大的时候打包一个文件并加载会有性能问题，所以要进行代码分割拆分打包，让用户在初始页面时
      只加载所需要的代码，加快加载速度。 1、比如动态异步引入文件或者第三方库import（）2、组件或者路由懒加载react.lazy */}

    </div>
  )
}
