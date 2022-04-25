import React from 'react'

export default function model() {

  const makeSound = anima => {
    if ( anima.sound && typeof anima.sound === 'function') {
      anima.sound()
    }
  }

  // 吧可变的部分各自封装起来，  ---使用不333可55变的-----来调动可变的
  // 在调用命令发生前，每个对象都负责自己的行为（要做的事），这就是面向对象的行为
  function Duck () {}
  Duck.prototype.sound = () => console.log('嘎嘎嘎')

  // javascript本身是一门基于原型的面向对象语言
  // undefiend、number、string、function、object\array\null\nan\boolean
  // js中的的根对象是object。prototype对象，所有的对象都是根据他克隆而来

  class O1 {
    sound() {
      console.log('oooo')
    }
  }
  console.log({}, {}.__proto__, '{}')
  Object.create = Object.create || function(obj) {
    const F = function () {} // 创建一个构造函数
    F.prototype = obj  // 将构造函数的原型值向传入的对象
    return new F()     // 返回 构造函数的实例 == 实例对象的__proto__会自动指向构造函数的原型对象，就实现了访问同一个对象属性的功能
    // const objjj = {}
    // objjj.__proto__ = obj 
  }

  // 封装：目的是为了隐藏实现。(隐藏数据、实现细节、设计细节和对象的类型等)
  // 封装的优点： 每个封装的对象都只负责自己的行为，暴露出特定的api，其他对象只通过暴露的api
  //    进行通信，这样对象之间的耦合就会特别的松散。不管对象自己内部怎么改变，只要是暴露的api没有改变，就不会影响和他通信的对象


  makeSound(new Duck())
  makeSound(new O1())

  // 继承

  // 通过原型对象的继承实现create方法
  // create创建对象的方法，本质上是通过原型链实现的
  Object.create = Object.create || function(obj) {
    const Fn = function() {}
    Fn.prototype = obj
    // 返回的实例对象会通过隐式原型链找到原型对象中的方法和属性，所以就实现了clone
    // 实例对象通过__proto__指向Fn的原型对象，这样即使修改实例对象的原型也不会影响Fn圆形的修改
    return new Fn();
  }

  // this指向的几个原则
  /*
    1、作为对象的方法调用 - 指向该对象
    2、作为普通函数调用 - 指向全局对象（严格模式下指向window）
    3、new调用 - 指向创建的实例对象
    4、call || apply 调用 - 指向第一个传入的参数(如果为null，则指向window，严格模式下还是为null)
  */

  return (
    // 多态：将不变的事务和可变的事务分开来
    <div>model11</div>
  )
}
