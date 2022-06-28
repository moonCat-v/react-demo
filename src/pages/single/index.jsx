import React, { useEffect } from 'react'

export default function index() {
  /* const getType = (fn) => {
    let type;
    return function() {
      return type || (type = fn.apply(this, arguments))
    }
  }
  const getDom = getType(function() {
    return document.createElement('div')
  })
  // 当第一次调用的时候为闭包内部的变量缓存了一个值，下次再调用的此函数时，先返回上次缓存的值
  // 当没有缓存值得时候，再去计算传入函数的返回值并给内部变量赋值再次缓存起来
  console.log(getDom() === getDom()) */

/*   // 吧值存储起来，当需要求值的时候在进行求值
  const cost = () => {
    const args = [];
    return function(...res) {
      if (res.length === 0) {
        let money = 0;
        args.forEach((item) => {
          money += item;
        })
        return money;
      } else {
        args.push(...res);
      }
    }
  }
  let newCost = cost();
  newCost(100)
  newCost(200)
  newCost(300)
  console.log(newCost()) */

/*   // 在js中一个对象即使没有一个方法，也可以让他去借用其他对象的方法或者属性来使用
  const obj1 = {
    name: 'obj1的属性'
  }

  const obj2 = {
    getName() {
      return this.name;
    }
  }

  // 使用call方法，将obj2.getName 方法中的this指向obj1， 实现借用obj1中nam属性
  console.log(obj2.getName.call(obj1)); */
  // window.onresize = function() {
  //   console.log(1111)
  // }

  // const debounce = (fn, time = 300) => {
  //   let timer;

  //   return function(...res) {
  //     clearTimeout(timer);
  //     let _this = this;

  //     timer = setTimeout(() => {
  //       fn.apply(_this, res);
  //     }, time)
  //   }
  // }


  // window.onresize = debounce(function() {
  //   console.log(1111)
  // }, 1000)

  const Single = function(name) {
    this.name = name;
    this.instance = null;
  }

  // this指向原则 -》谁调用的函数就指向谁 如obj.getName,就指向obj
  /* 
    所有的引用数据类型都有一个__proto__属性，它指向构造函数的prototype对象
    所有的函数都有一个prototype属性，指向原型对象
  */
  // Single.prototype.getName = function() {
  //   console.log(this.name);
  // }

  // // 获取一个构造函数的单例类，不管获取多少次都只创建一次并返回， 就创建好的类存储在一个值中
  // Single.getInstance = function(name) {
  //   if (!this.instance) {
  //     // 将实例对象挂在到构造函数本身 并返回
  //     this.instance = new Single(name);
  //   }

  //   return this.instance;
  // }

  // // Single.getInstance = (function() {
  // //   let intance = null;
  // //   return function() {
  // //     if (!intance) intance = new Single('gg')
  // //     return intance;
  // //   }
  // // })()


  // console.log(Single, new Single(), Single.getInstance('ww') === Single.getInstance('eeee'))

/*

useEffect(() => {
    const CreatDiv = (function() {
      let intance;
      const CreatDiv = function(text) {
        
        if (intance) return intance;
        this.text = text;
        this.init();
        // 就是将构造函数的实例对象保存到一个变量里面，做缓存
        return intance = this;
      }
  
      CreatDiv.prototype.init = function() {
        console.log(111111);
        const divDom = document.createElement('div');
        divDom.innerHTML = this.text;
        document.body.appendChild(divDom);
      }
  
      return CreatDiv;
      
    })();
  
    console.log(new CreatDiv('11') === new CreatDiv('4444'));
  }, []) */

/*   
  // 使用代理实现单例
  // 将要创建的类，移入到一个代理的类中进行创建和缓存实现
  useEffect(() => {
    const CreatDiv = function(html) {
      this.html = html;
      this.init()
    };

    CreatDiv.prototype.init = function() {
      const divDom = document.createElement('div');
      divDom.innerHTML = this.html;
      document.body.appendChild(divDom);
    };

    const ProxyCreatDiv = (function() {
      let instance;
      // 通过闭包缓存已经创建的实例对象，从而只会进行一次创建。
      return function(html) {
        if (!instance) instance = new CreatDiv(html);
        return instance;
      }
    })();

    console.log(new ProxyCreatDiv('ssss') === new ProxyCreatDiv('111111'));
  }, []) */


  // useEffect(() => {
  //   // const chunkTime = (data, fn, count, time = 200) => {
  //   //   let timerId;
  //   //   const start = () => {
  //   //     for (let index = 0; index < Math.min(count || 1, data.length); index++) {
  //   //       const obj = data.shift();
  //   //       fn(obj);
  //   //     }
  //   //   }

  //   //   return function() {
  //   //     timerId = setInterval(() => {
  //   //       if (data.length === 0) return clearInterval(timerId);
  //   //       start()
  //   //     }, time);
  //   //   }
  //   // }

  //   /**
  //    *
  //    *
  //    * @param {*} list // 需要用到的总数据
  //    * @param {*} fn // 具体执行的操作函数
  //    * @param {*} count // 每次操作的数量
  //    * @param {number} [time=200] // 分割的时间
  //    * @return {*} 
  //    */
  //   const chunkTime = (list, fn, count, time = 200) => {
  //     let timeId;
  //     const start = () => {
  //       // 每次分割执行的数量
  //       for (let index = 0; index < Math.min(count || 1, list.length); index++) {
  //         const element = list.shift();
  //         fn(element);
  //       }
  //     }

  //     return () => {
  //       timeId = setInterval(() => {
  //         // 如果所有数据执行完毕，清除定时器
  //         if (list.length === 0) return clearInterval(timeId);
  //         start();
  //       }, time)
  //     }
  //   }


  //   let ary = [];
  //   for ( var i = 1; i <= 1000; i++ ){
  //     ary.push( i );
  //   };

  //   var renderFriendList = chunkTime( ary, function( n ){
  //     var div = document.createElement( 'div' );
  //     div.innerHTML = n;
  //     document.body.appendChild( div );
  //   }, 10 );

  //   renderFriendList();

  // });


  // useEffect(() => {

  //   // const Ds = (() => {
  //   //   let instance;

  //   //   const Si = function(name) {
  //   //     this.name = name;
  //   //     this.init();
  //   //   }

  //   //   Si.prototype.init = function() {
  //   //     console.log(111)
  //   //   }


  //   //   return function(name) {
  //   //     if (!instance) instance = new Si(name);
  //   //     return instance;
  //   //   };

  //   // })();

  //   // console.log(new Ds('hahahah') === new Ds('222222'));

  //   /**
  //    *
  //    *
  //    * @param {*} fn 创建对象的函数
  //    * @return {*} 
  //    */
  //   const single = (fn) => {
  //     let instance; // 缓存唯一对象的变量

  //     return function(...res) {
  //       /* 
  //         如果没创建过对象则调用传入的函数创建并缓存，如果已经存在创建好的对象直接返回即可。
  //         注意： js中创建对象不一定基于类，所以可以采用函数创建的方式，如果想基于类的方式创建，那么
  //             fn参数传入构造函数，然后使用new 关键字进行调用生成即可。
  //       */
  //       if (!instance) instance = fn.apply(this, res);

  //       return instance;
  //     }
  //   }

  //   function domObj (text) {
  //     const div = document.createElement('div');
  //     div.innerText = text;
  //     document.body.appendChild(div);
  //     return div;
  //   }

  //   const singleDom = single(domObj);

  //   console.log(singleDom('hello') === singleDom('world')); // true
    

  // }, []);

  useEffect(() => {
/*     // 定义绩效s的计算策略类
    function performanceS() {};
    performanceS.prototype.calculate = function(salary) {
      return salary * 4;
    }

    function Bones() { // 定义奖金类
      this.salary = null;
      this.strategy = null;
    }

    Bones.prototype.setSalary = function(salary) {
      this.salary = salary;
    }

    Bones.prototype.setstrategy = function(strategy){ // 设置奖金计算的策略对象
      this.strategy = strategy
    }
    Bones.prototype.getBones = function() { // 利用计算的策略类，计算奖金
      return this.strategy.calculate(this.salary)
    }

    const bouns = new Bones();
    bouns.setSalary(1000)
    bouns.setstrategy(new performanceS()); // 将计算奖金代理到 计算的类上处理

    console.log(bouns.getBones()) */

    // const obj = {
    //   A: 3,
    //   B: 2,
    //   S: 4
    // }

    // function comput(performanceLevel, salary) {
    //   return salary * obj[performanceLevel];
    // }

    // console.log(comput('A', 200));

    var tween = {
      linear( t, b, c, d ) {
       return c*t/d + b;
      },
      easeIn( t, b, c, d ) {
       return c * ( t /= d ) * t + b;
      }, 
      strongEaseIn: function(t, b, c, d){
        return c * ( t /= d ) * t * t * t * t + b;
      },
      strongEaseOut: function(t, b, c, d){
        return c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b;
      },
      sineaseIn: function( t, b, c, d ){
        return c * ( t /= d) * t * t + b;
      },
      sineaseOut: function(t,b,c,d){
        return c * ( ( t = t / d - 1) * t * t + 1 ) + b;
      }
    };
    // 我们编写一个类，传入一些动画算法，来实现运动或者计算的结果，这些传入的算法可以轻易的被其他算法代替, 这就是策略模式最经典的运用之一。
    // 创建一个Animate 类，定义一些初始化属性，然后往构造函数的的原型上挂上方法，用来定义每个实例的初始值等，然后由生成的实例对象进行调用
    //  运动的算法就被赋值在类的一个属性上，并且只要从新调用类的方法，就可以替换一个新的算法，保证小球的运动，这就是策略模式。
    function Animate(dom) {
      this.dom = dom; // 进行运动的dom节点
      this.startTime = 0; // 开始运动的时间
      this.startPos = 0; // 开始运动的位置
      this.endPos = 0; // 结束运动的位置
      this.propertyName = null; // 修改的css属性名
      this.easing = null; // 选择的运动算法
      this.duration = null; // 动画持续的时间
    }

    Animate.prototype.start = function( propertyName, endPos, duration, easing) {
      this.startTime = +new Date;
      this.startPos = this.dom.getBoundingClientRect()[propertyName]; // dom 初始位置
      this.endPos = endPos;  // 设置结束的位置
      this.duration = duration; // 设置运动持续的时间
      this.propertyName = propertyName; // 设置需要修改的样式名
      this.easing = tween[easing]; // 设置运动的算法

      const _self = this;

      let timeId = setInterval(() => {
        if(_self.step() === false) clearInterval(timeId);
      }, 19)
    }

    Animate.prototype.step = function() {
      const t = +new Date;
      if ((t >= this.startTime + this.duration)) {
        this.update(this.endPos); // 当运动时间到了后，修正小球最后的位置
        return false;
      }
      const pos = this.easing( t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration); // 根据算法算出现在运动的位置
      this.update(pos); // 更新每一步动画的位置
    }

    Animate.prototype.update = function(pos) {
      this.dom.style[this.propertyName] = pos + 'px';
    }

    var div = document.getElementById( 'div' );
    var animate = new Animate( div );
    animate.start( 'top', 500, 10000, 'easeIn' );



  }, []);
  








  return (
    <div>
      <button >显示/隐藏</button>
      <div id="div" style={{width: '10px', height: '10px',position: 'relative', background: 'red'}}></div>
    </div>
  )
}
