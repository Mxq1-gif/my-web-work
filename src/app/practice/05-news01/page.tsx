'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  useEffect(() => {
    // 清空控制台输出
    setConsoleOutput([]);
    
    // 模拟原始代码的执行
    const outputs: string[] = [];
    
    // 变量声明和类型
    const a = 100;
    outputs.push(`a = ${a}`);
    
    const api_key = 'xbmu-=-xwcb';
    outputs.push(`api_key = ${api_key}`);
    outputs.push(`typeof a: ${typeof a}, typeof api_key: ${typeof api_key}, typeof true: ${typeof true}`);
    
    const b = '1';
    outputs.push(`a + b = ${a + b}`);
    outputs.push(`a + Number(b) = ${a + Number(b)}`);
    
    const c = '100';
    outputs.push(`typeof a: ${typeof a}, typeof c: ${typeof c}`);
    // @ts-expect-error - 教学示例：演示JavaScript的类型转换
    outputs.push(`a == c: ${a == c}`);
    // @ts-expect-error - 教学示例：演示严格相等比较
    outputs.push(`a === c: ${a === c}`);
    
    // 分支语句
    const current_time: string = '8:00';
     
    if (current_time == '12:20') {
      outputs.push('吃早饭');
    } else {
      outputs.push('下课');
    }
    
    // for循环
    for (let i = 1; i <= 10; i++) {
      outputs.push(`for循环: ${i}`);
    }
    
    // while循环
    let hug = 100;
    while (hug > 0) {
      outputs.push(`继续吃饭~~~ (hug: ${hug})`);
      hug = hug - 20;
    }
    
    // 函数
    function intro() {
      outputs.push('你好,我是一个脚本！');
    }
    intro();
    
    function intro2(content: string) {
      outputs.push('以下是我的介绍内容： ' + String(content));
    }
    intro2('这是传入的参数');
    outputs.push(`typeof intro2('这是传入的参数'): ${typeof intro2('这是传入的参数')}`);
    
    function intro3(content1: string, content2: string) {
      outputs.push('以下是我的介绍内容： ' + String(content1) + String(content2));
    }
    intro3('参数1', '参数2');
    
    function intro4(content: string) {
      outputs.push(content);
      return content + '这是返回值';
    }
    intro4('带返回值的函数');
    const result = intro4('带返回值的函数');
    outputs.push(result);
    
    setConsoleOutput(outputs);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f2f5f6' }}>
      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="relative mb-16">
          <Link href="/" className="absolute -top-12 left-0 flex items-center gap-3 transition-all duration-300" style={{ color: '#5c7987' }}>
            <span className="text-xl">←</span>
            <span className="font-light">返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-6xl mx-auto mb-16 p-12 shadow-lg" style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem', border: '1px solid #e0e7e9' }}>
          <h2 className="text-4xl font-thin mb-8" style={{ color: '#5c7987' }}>JavaScript 语言基础</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed" style={{ color: '#758a91' }}>
            <div>
              <p>• 掌握变量声明与数据类型系统</p>
              <p>• 理解类型转换与比较运算符</p>
            </div>
            <div>
              <p>• 学习控制流语句的使用方法</p>
              <p>• 掌握函数定义与调用机制</p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* 代码展示区 */}
          <div className="order-2 xl:order-1 p-10 shadow-md" style={{ backgroundColor: '#fdfdfe', borderRadius: '1.5rem', border: '1px solid #e5ebec' }}>
            <h3 className="text-3xl font-thin mb-10" style={{ color: '#5c7987' }}>语言特性演示</h3>
            <div className="space-y-10">
              
              <div className="p-8 rounded-xl" style={{ backgroundColor: '#f8fbfc', border: '1px solid #e8eff0' }}>
                <h4 className="text-xl font-light mb-6" style={{ color: '#5c7987' }}>变量与类型</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#6b7d84' }}>
{`let a = 100
const api_key = 'xbmu-=-xwcb'
console.log(typeof a, typeof api_key, typeof true)

let b = '1'
console.log(a + b)        // 字符串拼接
console.log(a + Number(b)) // 数字相加

let c = '100'
console.log(a == c)   // 相等比较 (类型转换)
console.log(a === c)  // 严格相等比较`}
                </pre>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e8eff0' }}>
                <h4 className="text-xl font-light mb-6" style={{ color: '#5c7987' }}>条件判断</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#6b7d84' }}>
{`let current_time = '8:00'
if (current_time == '12:20') {
    console.log('吃早饭')
} else {
    console.log('下课')
}`}
                </pre>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: '#f8fbfc', border: '1px solid #e8eff0' }}>
                <h4 className="text-xl font-light mb-6" style={{ color: '#5c7987' }}>循环控制</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#6b7d84' }}>
{`// for循环
for(let i = 1; i <= 10; i++) {
    console.log(i)
}

// while循环
let hug = 100
while (hug > 0) {
    console.log('继续吃饭~~~')
    hug = hug - 20
}`}
                </pre>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e8eff0' }}>
                <h4 className="text-xl font-light mb-6" style={{ color: '#5c7987' }}>函数机制</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#6b7d84' }}>
{`function intro() {
    console.log('你好,我是一个脚本！')
}
intro()

function intro2(content) {
    console.log('以下是我的介绍内容： ' + content)
}
intro2('这是传入的参数')

function intro4(content) {
    console.log(content)
    return content + '这是返回值'
}
let result = intro4('带返回值的函数')
console.log(result)`}
                </pre>
              </div>
            </div>
          </div>

          {/* 控制台输出区 */}
          <div className="order-1 xl:order-2 space-y-8">
            <div className="p-10 shadow-md" style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem', border: '1px solid #e0e7e9' }}>
              <h3 className="text-3xl font-thin mb-8" style={{ color: '#5c7987' }}>执行结果</h3>
              <div className="p-6 rounded-xl h-80 overflow-y-auto" style={{ backgroundColor: '#f5f8f9', border: '1px solid #e0e7e9' }}>
                <div className="space-y-2 font-mono text-sm">
                  {consoleOutput.map((output, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span style={{ color: '#9eb4bb' }}>{'>'}</span> 
                      <span style={{ color: '#5c7987' }}>{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 shadow-md" style={{ backgroundColor: '#f9fcfc', borderRadius: '1.5rem', border: '1px solid #e5ebec' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#5c7987' }}>核心概念</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-3" style={{ backgroundColor: '#9eb4bb' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#5c7987' }}>数据类型</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#758a91' }}>JavaScript 的动态类型系统，包括基础类型和复合类型</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-3" style={{ backgroundColor: '#c6cfc7' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#5c7987' }}>类型比较</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#758a91' }}>== 与 === 的区别，类型转换的规则</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-3" style={{ backgroundColor: '#a7b2af' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#5c7987' }}>控制流</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#758a91' }}>条件判断和循环语句的语法结构</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-3" style={{ backgroundColor: '#d9e3e5' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#5c7987' }}>函数特性</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#758a91' }}>参数传递、返回值、作用域等核心概念</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 