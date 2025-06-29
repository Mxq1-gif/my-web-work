'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .external-style {
        font-family: 'Cooper', '楷体', serif;
        text-decoration: underline;
        color: #5c7987;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f5f8f9' }}>
      <main className="flex-grow container mx-auto px-8 py-20">
        <div className="relative mb-20">
          <Link href="/" className="absolute -top-16 left-0 flex items-center gap-2 transition-all duration-500" style={{ color: '#9eb4bb' }}>
            <span className="text-lg">←</span>
            <span className="text-lg">返回主页</span>
          </Link>
        </div>
        
        <section className="max-w-4xl mx-auto mb-20 p-12 rounded-[2rem]" style={{ backgroundColor: '#ffffff', border: '1px solid #e5eeef', boxShadow: '0 8px 40px rgba(158, 180, 187, 0.12)' }}>
          <h2 className="text-4xl font-extralight mb-8" style={{ color: '#5c7987' }}>CSS 样式表技术</h2>
          <div className="space-y-6 text-xl leading-relaxed" style={{ color: '#7b8e95' }}>
            <p>• 掌握外部样式表的正确引入方法</p>
            <p>• 理解内部样式表的作用域和优先级</p>
            <p>• 学习内嵌样式的适用场景</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto p-16 rounded-[2.5rem]" style={{ backgroundColor: '#fdfdfe', border: '1px solid #eaf1f2' }}>
          <div className="text-center mb-16">
            <h1 className="external-style text-6xl font-thin mb-8" style={{ 
              fontFamily: 'Cooper, 楷体, serif',
              textDecoration: 'underline',
              color: '#5c7987'
            }}>
              CSS 技术演示
            </h1>
            <div className="w-32 h-0.5 mx-auto rounded-full" style={{ backgroundColor: '#c6cfc7' }}></div>
          </div>
          
          <div className="mb-16 p-10 rounded-[1.5rem]" style={{ backgroundColor: '#f8fbfc', border: '1px solid #e8f0f1' }}>
            <h2 className="text-3xl font-extralight mb-10" style={{ color: '#5c7987' }}>样式定义方式</h2>
            <div className="grid gap-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-light" style={{ backgroundColor: '#9eb4bb' }}>
                  1
                </div>
                <div>
                  <span className="text-2xl font-light" style={{ color: '#5c7987' }}>外部样式表</span>
                  <p className="text-lg mt-2" style={{ color: '#8a9ca3' }}>通过 link 标签链接外部 CSS 文件</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-light" style={{ backgroundColor: '#c6cfc7' }}>
                  2
                </div>
                <div>
                  <span className="text-2xl font-light" style={{ color: '#5c7987' }}>内部样式表</span>
                  <p className="text-lg mt-2" style={{ color: '#8a9ca3' }}>在页面 head 中的 style 标签内定义</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-light" style={{ backgroundColor: '#a7b2af' }}>
                  3
                </div>
                <div>
                  <span style={{ color: '#9eb4bb', fontSize: '1.5rem', fontWeight: '300' }}>内嵌样式表</span>
                  <p className="text-lg mt-2" style={{ color: '#8a9ca3' }}>直接在元素的 style 属性中定义</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="p-10 rounded-[1.5rem]" style={{ backgroundColor: '#ffffff', border: '1px solid #e8f0f1' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#5c7987' }}>外部样式表实现</h3>
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#f5f9fa', border: '1px solid #e0eaec' }}>
                <pre className="text-lg leading-relaxed" style={{ color: '#6b7d84' }}>
{`<link rel="stylesheet" href="styles/main.css">

/* CSS 文件内容 */
h1 {
  font-family: 'Cooper', '楷体';
  text-decoration: underline;
  color: #5c7987;
}`}
                </pre>
              </div>
            </div>
            
            <div className="p-10 rounded-[1.5rem]" style={{ backgroundColor: '#f9fcfc', border: '1px solid #e8f0f1' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#5c7987' }}>内部样式表实现</h3>
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#f0f6f7', border: '1px solid #d8e4e6' }}>
                <pre className="text-lg leading-relaxed" style={{ color: '#6b7d84' }}>
{`<style>
  h1 {
    font-family: 'Cooper', "楷体";
    text-decoration: underline;
    color: #5c7987;
  }
</style>`}
                </pre>
              </div>
            </div>
            
            <div className="p-10 rounded-[1.5rem]" style={{ backgroundColor: '#ffffff', border: '1px solid #e8f0f1' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#5c7987' }}>内嵌样式表实现</h3>
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#f5f9fa', border: '1px solid #e0eaec' }}>
                <pre className="text-lg leading-relaxed" style={{ color: '#6b7d84' }}>
{`<span style="color: #9eb4bb; font-size: 1.5rem">
  内嵌样式表
</span>`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-16 p-10 rounded-[1.5rem]" style={{ backgroundColor: '#f7fafc', border: '1px solid #e3ecee' }}>
            <h3 className="text-2xl font-light mb-8" style={{ color: '#5c7987' }}>优先级原则</h3>
            <div className="space-y-4 text-xl leading-relaxed" style={{ color: '#7b8e95' }}>
              <p>• 内嵌样式具有最高优先级</p>
              <p>• 内部样式表优先于外部样式表</p>
              <p>• 后定义的样式会覆盖先定义的样式</p>
              <p>• !important 声明可以提升样式优先级</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 