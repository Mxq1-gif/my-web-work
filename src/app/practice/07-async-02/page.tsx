'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [lastPushDate, setLastPushDate] = useState<string | null>(null);

  useEffect(() => {
    async function getSomething() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('111111');
          resolve();
        }, 2000);
      });
    }
    getSomething().then(
      result => console.log('Async function finished successfully with result:', result)
    );
    console.log('2222222');

    async function getLastPushedDate(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const data = await response.json();
        // pushed_at 字段即为最后一次推送日期
        return data.pushed_at as string;
      } catch (error) {
        console.error('获取推送日期失败:', error);
        return null;
      }
    }

    getLastPushedDate('yangjh-xbmu', 'Web-develop').then(date => {
      console.log('最后一次推送日期:', date);
      setLastPushDate(date);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f6f8f6' }}>
      <main className="flex-grow container mx-auto px-8 py-20">
        <div className="relative mb-20">
          <Link href="/" className="absolute -top-16 left-0 flex items-center gap-3 transition-all duration-300" style={{ color: '#7a8d7a' }}>
            <span className="text-xl">←</span>
            <span className="font-light">返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-5xl mx-auto mb-20 p-12 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e0e6e0' }}>
          <h2 className="text-4xl font-light mb-8" style={{ color: '#7a8d7a' }}>异步编程与API数据获取</h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#8da08d' }}>
            <p>• 演示 async/await 与 Promise 的实际应用</p>
            <p>• 体验 fetch API 的异步数据获取过程</p>
            <p>• 学习 DOM 操作与异步编程的结合</p>
            <p>• 请按 F12 打开浏览器控制台，观察代码执行输出</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto space-y-12">
          <section className="p-12 shadow-sm" style={{ backgroundColor: '#fdfdfd', borderRadius: '2rem', border: '1px solid #e2e8e2' }}>
            <div className="text-center mb-12">
              <h1 className="text-5xl font-light mb-8" style={{ color: '#7a8d7a' }}>
                JavaScript 异步编程实验室
              </h1>
              <div className="w-32 h-0.5 mx-auto rounded-full mb-8" style={{ backgroundColor: '#b0c3b0' }}></div>
              <p className="text-xl font-light" style={{ color: '#8da08d' }}>
                探索现代异步编程的核心技术
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mb-8" style={{ backgroundColor: '#a5b8a5' }}>
                🚀
              </div>
            </div>

            <div className="p-10 rounded-2xl text-center" style={{ backgroundColor: '#f9fbf9', border: '1px solid #e0e6e0' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#7a8d7a' }}>实时数据展示</h3>
              <div
                id="demo"
                ref={demoRef}
                className="p-8 rounded-xl text-lg font-light"
                style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8e2' }}
              >
                {lastPushDate ? (
                  <div>
                    <p className="mb-4" style={{ color: '#7a8d7a' }}>
                      最后一次推送日期:
                    </p>
                    <p className="font-mono text-xl" style={{ color: '#a5b8a5' }}>
                      {new Date(lastPushDate).toLocaleString()}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-6 h-6 rounded-full animate-pulse" style={{ backgroundColor: '#a5b8a5' }}></div>
                    <span style={{ color: '#8da08d' }}>正在获取数据...</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="grid lg:grid-cols-2 gap-10">
            <div className="p-10 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e0e6e0' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#7a8d7a' }}>技术要点</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#b0c3b0' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#7a8d7a' }}>异步函数</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#8da08d' }}>使用 async/await 语法简化异步代码编写</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#a5b8a5' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#7a8d7a' }}>API 调用</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#8da08d' }}>fetch API 获取 GitHub 仓库信息</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#9ab09a' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#7a8d7a' }}>错误处理</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#8da08d' }}>try-catch 异常捕获机制</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-2xl" style={{ backgroundColor: '#f9fbf9', border: '1px solid #e2e8e2' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#7a8d7a' }}>代码示例</h3>
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e0e6e0' }}>
                <pre className="text-sm overflow-x-auto" style={{ color: '#6d806d' }}>
{`async function getLastPushedDate(owner, repo) {
  const url = \`https://api.github.com/repos/\${owner}/\${repo}\`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('网络响应失败');
    }
    const data = await response.json();
    return data.pushed_at;
  } catch (error) {
    console.error('获取推送日期失败:', error);
    return null;
  }
}`}
                </pre>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 