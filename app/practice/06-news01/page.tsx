'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 清空控制台输出
    setConsoleOutput([]);
    const outputs: string[] = [];

    // 类和对象
    class Teacher {
      name: string;
      age: number;
      school: string;
      subject: string;

      constructor(name: string, age: number, school: string, subject: string) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.subject = subject;
      }

      learn(className: string = "一年级一班") {
        const message = `${this.name}老师正在给${className}上${this.subject}课`;
        outputs.push(message);
        return message;
      }

      gradeExams() {
        const message = `${this.name} 老师正在批改试卷`;
        outputs.push(message);
        return message;
      }
    }

    // 创建教师对象
    const MrMa = new Teacher("马", 28, "实验小学", "语文");
    MrMa.learn("三年级二班");
    MrMa.gradeExams();

    class Professor extends Teacher {
      researchField: string;
      papersPublished: number;

      constructor(name: string, age: number, school: string, subject: string, researchField: string, papersPublished: number) {
        super(name, age, school, subject);
        this.researchField = researchField;
        this.papersPublished = papersPublished;
      }
      
      supervise(studentName: string) {
        const message1 = `${this.name}教授正在指导${studentName}做研究论文`;
        const message2 = super.gradeExams();
        outputs.push(message1);
        outputs.push(message2);
      }
    }

    const profZhou = new Professor("周", 35, "清华大学", "新闻传播学院", "新闻学", 12);
    profZhou.supervise("李明");

    // 回调函数
    outputs.push("准备上课铃...");
    
    setTimeout(() => {
      setConsoleOutput(prev => [...prev, "下课铃响了"]);
    }, 1000);

    outputs.push("上课铃响了");
    
    setConsoleOutput(outputs);

    // DOM操作
    if (h1Ref.current) {
      h1Ref.current.innerHTML = "教师管理系统";
      h1Ref.current.style.color = "#7b8c82";
    }

    // 页面加载完成提示
    const timer = setTimeout(() => {
      alert("系统初始化完成");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handlePClick = () => {
    alert("马老师 - 语文 - 28岁 - 实验小学");
  };

  const handleH1Click = () => {
    alert("同学们好！");
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f7faf8' }}>
      <main className="flex-grow container mx-auto px-8 py-18">
        <div className="relative mb-18">
          <Link href="/" className="absolute -top-14 left-0 flex items-center gap-3 transition-all duration-400" style={{ color: '#7b8c82' }}>
            <span className="text-lg">←</span>
            <span className="font-normal">返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-6xl mx-auto mb-18 p-14 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e7ebe8' }}>
          <h2 className="text-4xl font-light mb-10" style={{ color: '#7b8c82' }}>面向对象编程实践</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-lg leading-relaxed" style={{ color: '#8b9590' }}>
            <div>
              <p>• 掌握类与对象的设计原则</p>
              <p>• 理解继承机制与多态特性</p>
            </div>
            <div>
              <p>• 学习DOM操作与事件处理</p>
              <p>• 掌握异步编程模式</p>
            </div>
            <div>
              <p>• 实现交互式用户界面</p>
              <p>• 构建完整的应用逻辑</p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 代码展示区 */}
          <div className="lg:col-span-2 p-12 shadow-sm" style={{ backgroundColor: '#fdfdfe', borderRadius: '2rem', border: '1px solid #e9edea' }}>
            <h3 className="text-3xl font-light mb-12" style={{ color: '#7b8c82' }}>面向对象特性</h3>
            <div className="space-y-12">
              
              <div className="p-10 rounded-2xl" style={{ backgroundColor: '#f9fcfa', border: '1px solid #e7ebe8' }}>
                <h4 className="text-xl font-normal mb-8" style={{ color: '#7b8c82' }}>类定义与继承</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#6d7d74' }}>
{`class Teacher {
    constructor(name, age, school, subject) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.subject = subject;
    }
    
    learn(className = "一年级一班") {
        console.log(\`\${this.name}老师正在给\${className}上\${this.subject}课\`);
    }
    
    gradeExams() {
        console.log(\`\${this.name} 老师正在批改试卷\`);
    }
}

class Professor extends Teacher {
    constructor(name, age, school, subject, researchField, papersPublished) {
        super(name, age, school, subject);
        this.researchField = researchField;
        this.papersPublished = papersPublished;
    }
    
    supervise(studentName) {
        console.log(\`\${this.name}教授正在指导\${studentName}做研究论文\`);
        super.gradeExams();
    }
}`}
                </pre>
              </div>

              <div className="p-10 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e7ebe8' }}>
                <h4 className="text-xl font-normal mb-8" style={{ color: '#7b8c82' }}>对象实例化</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#6d7d74' }}>
{`let MrMa = new Teacher("马", 28, "实验小学", "语文");
MrMa.learn("三年级二班");
MrMa.gradeExams();

let profZhou = new Professor("周", 35, "清华大学", 
    "新闻传播学院", "新闻学", 12);
profZhou.supervise("李明");`}
                </pre>
              </div>

              <div className="p-10 rounded-2xl" style={{ backgroundColor: '#f9fcfa', border: '1px solid #e7ebe8' }}>
                <h4 className="text-xl font-normal mb-8" style={{ color: '#7b8c82' }}>异步操作</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#6d7d74' }}>
{`console.log("准备上课铃...");

setTimeout(function () { 
    console.log("下课铃响了") 
}, 1000);

console.log("上课铃响了");`}
                </pre>
              </div>

              <div className="p-10 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e7ebe8' }}>
                <h4 className="text-xl font-normal mb-8" style={{ color: '#7b8c82' }}>DOM交互</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#6d7d74' }}>
{`let myh1 = document.getElementById("demo");
myh1.innerHTML = "教师管理系统";
myh1.style.color = "#7b8c82";

let myp = document.getElementById("anotherp");
myp.onclick = function () {
    alert("马老师 - 语文 - 28岁 - 实验小学");
}

window.onload = function () {
    alert("系统初始化完成");
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* 右侧区域 */}
          <div className="space-y-8">
            {/* 控制台输出 */}
            <div className="p-10 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e7ebe8' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#7b8c82' }}>运行结果</h3>
              <div className="p-6 rounded-xl h-64 overflow-y-auto" style={{ backgroundColor: '#f9fcfa', border: '1px solid #e7ebe8' }}>
                <div className="space-y-3 font-mono text-sm">
                  {consoleOutput.map((output, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span style={{ color: '#a5b3aa' }}>{'>'}</span> 
                      <span style={{ color: '#7b8c82' }}>{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 交互演示区 */}
            <div className="p-10 shadow-sm" style={{ backgroundColor: '#fafcfb', borderRadius: '2rem', border: '1px solid #e9edea' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#7b8c82' }}>交互演示</h3>
              <div className="space-y-6">
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e7ebe8' }}>
                  <h1 
                    ref={h1Ref}
                    onClick={handleH1Click}
                    className="text-2xl font-normal cursor-pointer transition-colors duration-300 hover:opacity-70"
                    style={{ color: '#7b8c82' }}
                  >
                    教室信息管理系统
                  </h1>
                  <p className="text-sm mt-3" style={{ color: '#a5b3aa' }}>↑ 点击标题交互</p>
                </div>
                
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#f9fcfa', border: '1px solid #e7ebe8' }}>
                  <p 
                    ref={pRef}
                    onClick={handlePClick}
                    className="cursor-pointer transition-colors duration-300 hover:opacity-70 text-lg"
                    style={{ color: '#7b8c82' }}
                  >
                    点击查看教师详情
                  </p>
                  <p className="text-sm mt-3" style={{ color: '#a5b3aa' }}>↑ 点击段落交互</p>
                </div>
              </div>
            </div>

            {/* 概念说明 */}
            <div className="p-10 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e7ebe8' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#7b8c82' }}>核心概念</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#c6cfc7' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#7b8c82' }}>封装</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#8b9590' }}>将数据和方法组织在类中</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#a5b3aa' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#7b8c82' }}>继承</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#8b9590' }}>子类继承父类的属性和方法</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#9eb4bb' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#7b8c82' }}>多态</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#8b9590' }}>同一接口的不同实现</p>
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