'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 类和对象
    class Car {
      brand: string;
      model: string;
      year: number;
      constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
      }
      start() {
        console.log(`汽车 ${this.brand} ${this.model} 启动了`);
      }
      stop() {
        console.log(`汽车 ${this.brand} ${this.model} 停止了`);
      }
    }
    const myCar = new Car('Mi', 'Yu7', 2025);
    myCar.start();
    myCar.stop();

    class ElectricCar extends Car {
      range: number;
      constructor(brand: string, model: string, year: number, range: number) {
        super(brand, model, year);
        this.range = range;
      }
      charge() {
        console.log(`电动汽车 ${this.brand} ${this.model} 正在充电`);
      }
    }
    const myElectricCar = new ElectricCar('Tesla', 'Model Y', 2025, 300);
    myElectricCar.start();
    myElectricCar.charge();

    // 回调函数练习
    console.log('111111');
    setTimeout(function () {
      console.log('22222');
    }, 2000);
    console.log('333333');

    // DOM 操作
    if (divRef.current) {
      console.log(divRef.current);
      divRef.current.innerHTML = '这是从脚本动态更改的内容（点击我试试）';
      divRef.current.onclick = function () {
        alert('我也被点击了！');
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f4f7f4' }}>
      <main className="flex-grow container mx-auto px-8 py-18">
        <div className="relative mb-18">
          <Link href="/" className="absolute -top-14 left-0 flex items-center gap-3 transition-all duration-350" style={{ color: '#7a867a' }}>
            <span className="text-xl">←</span>
            <span className="font-light">返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-5xl mx-auto mb-18 p-12 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '1.8rem', border: '1px solid #e0e5e0' }}>
          <h2 className="text-4xl font-light mb-8" style={{ color: '#7a867a' }}>汽车管理系统</h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#8a958a' }}>
            <p>• 演示 TypeScript 类与继承的实际应用</p>
            <p>• 体验回调函数与异步操作的执行机制</p>
            <p>• 学习 DOM 操作与事件绑定的交互设计</p>
            <p>• 请按 F12 打开浏览器控制台，观察代码执行输出</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto space-y-12">
          <section className="p-12 shadow-sm" style={{ backgroundColor: '#fdfefe', borderRadius: '1.8rem', border: '1px solid #e2e7e2' }}>
            <div className="text-center mb-12">
              <h1 className="text-5xl font-light mb-8" style={{ color: '#7a867a' }}>
                智能汽车演示平台
              </h1>
              <div className="w-32 h-0.5 mx-auto rounded-full mb-8" style={{ backgroundColor: '#b8c4b8' }}></div>
              <p className="text-xl font-light" style={{ color: '#8a958a' }}>
                基于面向对象编程的汽车管理系统
              </p>
            </div>

            <div className="flex flex-col items-center space-y-10">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="未来汽车"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-sm"
                />
                <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(45deg, rgba(184, 196, 184, 0.1), rgba(122, 134, 122, 0.1))' }}></div>
              </div>
              
              <div className="w-full max-w-3xl space-y-8">
                <div className="p-10 rounded-2xl text-center" style={{ backgroundColor: '#f9fbf9', border: '1px solid #e0e5e0' }}>
                  <h1
                    ref={h1Ref}
                    onClick={() => alert('我被点击了！')}
                    className="text-3xl font-light cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{ color: '#7a867a' }}
                  >
                    JavaScript 面向对象编程（点击我试试）
                  </h1>
                  <p className="text-sm mt-4" style={{ color: '#a3aea3' }}>↑ 点击标题进行交互</p>
                </div>
                
                <div className="p-10 rounded-2xl text-center" style={{ backgroundColor: '#ffffff', border: '1px solid #e0e5e0' }}>
                  <div
                    ref={divRef}
                    className="text-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-sm p-8 rounded-xl"
                    style={{ 
                      color: '#7a867a',
                      backgroundColor: '#f4f7f4',
                      border: '1px solid #e8ece8'
                    }}
                  >
                    汽车管理系统内容区域
                  </div>
                  <p className="text-sm mt-4" style={{ color: '#a3aea3' }}>↑ 点击内容区域进行交互</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-10 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e0e5e0' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#7a867a' }}>技术特点</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#b8c4b8' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#7a867a' }}>类与继承</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#8a958a' }}>Car 和 ElectricCar 类的继承关系演示</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#a3aea3' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#7a867a' }}>异步回调</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#8a958a' }}>setTimeout 函数的异步执行机制</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#94a094' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#7a867a' }}>DOM 操作</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#8a958a' }}>动态修改页面内容和事件绑定</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-2xl" style={{ backgroundColor: '#f9fbf9', border: '1px solid #e2e7e2' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#7a867a' }}>代码示例</h3>
              <div className="space-y-6">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e8ece8' }}>
                  <h4 className="text-base font-medium mb-3" style={{ color: '#7a867a' }}>类定义</h4>
                  <pre className="text-sm overflow-x-auto" style={{ color: '#6b7b6b' }}>
{`class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}`}
                  </pre>
                </div>
                
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#f4f7f4', border: '1px solid #e8ece8' }}>
                  <h4 className="text-base font-medium mb-3" style={{ color: '#7a867a' }}>继承演示</h4>
                  <pre className="text-sm overflow-x-auto" style={{ color: '#6b7b6b' }}>
{`class ElectricCar extends Car {
    charge() {
        console.log('正在充电');
    }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 