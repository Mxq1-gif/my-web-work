'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Commit {
  commit: {
    author: {
      date: string;
    };
  };
}

export default function Page() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [commitDates, setCommitDates] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 清空控制台输出
    setConsoleOutput([]);
    const outputs: string[] = [];

    // 演示异步编程的基本概念
    setTimeout(() => {
      setConsoleOutput(prev => [...prev, '111']);
    }, 2000);
    outputs.push('222');

    function getSomething() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setConsoleOutput(prev => [...prev, '1111']);
          resolve();
        }, 1000);
      });
    }

    getSomething().then(() => {
      setConsoleOutput(prev => [...prev, '2222']);
    });

    async function getSomething2() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setConsoleOutput(prev => [...prev, '111111']);
          resolve();
        }, 1000);
      });
    }

    (async () => {
      await getSomething2();
      setConsoleOutput(prev => [...prev, '222222']);
    })();

    setConsoleOutput(outputs);
  }, []);

  // 异步获取 GitHub 仓库的所有提交日期
  async function getAllCommitDates(owner: string, repo: string) {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('网络响应失败');
      }
      const commits: Commit[] = await response.json();
      // 提取每个提交的日期
      const dates = commits.map(commit => commit.commit.author.date);
      return dates;
    } catch (error) {
      console.error('获取提交日期失败:', error);
      throw error;
    }
  }

  const handleFetchCommits = async () => {
    setLoading(true);
    setError(null);
    try {
      const dates = await getAllCommitDates('Mxq1-gif', 'my-web-work');
      setCommitDates(dates);
      setConsoleOutput(prev => [...prev, `获取到 ${dates.length} 条提交记录`]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '获取失败';
      setError(errorMessage);
      setConsoleOutput(prev => [...prev, `错误: ${errorMessage}`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f7f5f3' }}>
      <main className="flex-grow container mx-auto px-8 py-18">
        <div className="relative mb-18">
          <Link href="/" className="absolute -top-14 left-0 flex items-center gap-3 transition-all duration-350" style={{ color: '#8c8175' }}>
            <span className="text-xl">←</span>
            <span className="font-light">返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-5xl mx-auto mb-18 p-12 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '1.8rem', border: '1px solid #e6e2df' }}>
          <h2 className="text-4xl font-light mb-8" style={{ color: '#8c8175' }}>JavaScript 异步编程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg leading-relaxed" style={{ color: '#a5998c' }}>
            <div>
              <p>• 掌握 Promise 与 async/await 语法</p>
              <p>• 理解异步操作的执行时序</p>
            </div>
            <div>
              <p>• 学习实际 API 调用的异步处理</p>
              <p>• 体验现代异步编程模式</p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 代码展示区 */}
          <div className="p-12 shadow-sm" style={{ backgroundColor: '#fdfcfb', borderRadius: '1.8rem', border: '1px solid #e8e4e1' }}>
            <h3 className="text-3xl font-light mb-10" style={{ color: '#8c8175' }}>异步编程特性</h3>
            <div className="space-y-10">
              
              <div className="p-8 rounded-xl" style={{ backgroundColor: '#f9f7f5', border: '1px solid #e6e2df' }}>
                <h4 className="text-xl font-medium mb-6" style={{ color: '#8c8175' }}>setTimeout 基础异步</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#716b5f' }}>
{`setTimeout(() => {
    console.log('111')
}, 2000)
console.log('222')`}
                </pre>
                <p className="text-sm mt-4" style={{ color: '#a5998c' }}>
                  输出顺序：先输出 &quot;222&quot;，2秒后输出 &quot;111&quot;
                </p>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e6e2df' }}>
                <h4 className="text-xl font-medium mb-6" style={{ color: '#8c8175' }}>Promise 基础用法</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#716b5f' }}>
{`function getSomething() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1111')
            resolve();
        }, 1000)
    })
}
getSomething().then(() => {
    console.log('2222')
})`}
                </pre>
                <p className="text-sm mt-4" style={{ color: '#a5998c' }}>
                  Promise 链式调用，先输出 &quot;1111&quot;，然后输出 &quot;2222&quot;
                </p>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: '#f9f7f5', border: '1px solid #e6e2df' }}>
                <h4 className="text-xl font-medium mb-6" style={{ color: '#8c8175' }}>async/await 语法</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#716b5f' }}>
{`async function getSomething2() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('111111')
            resolve();
        }, 1000)
    });
}

(async () => {
    await getSomething2();
    console.log('222222');
})();`}
                </pre>
                <p className="text-sm mt-4" style={{ color: '#a5998c' }}>
                  async/await 让异步代码看起来像同步代码
                </p>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e6e2df' }}>
                <h4 className="text-xl font-medium mb-6" style={{ color: '#8c8175' }}>实际API调用</h4>
                <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#716b5f' }}>
{`async function getAllCommitDates(owner, repo) {
    const url = \`https://api.github.com/repos/\${owner}/\${repo}/commits\`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('网络响应失败');
        const commits = await response.json();
        return commits.map(commit => commit.commit.author.date);
    } catch (error) {
        console.error('获取提交日期失败:', error);
        return [];
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* 右侧区域 */}
          <div className="space-y-8">
            {/* 控制台输出 */}
            <div className="p-10 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '1.8rem', border: '1px solid #e6e2df' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#8c8175' }}>执行结果</h3>
              <div className="p-6 rounded-xl h-64 overflow-y-auto" style={{ backgroundColor: '#f9f7f5', border: '1px solid #e6e2df' }}>
                <div className="space-y-3 font-mono text-sm">
                  {consoleOutput.map((output, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span style={{ color: '#c1b2a6' }}>{'>'}</span> 
                      <span style={{ color: '#8c8175' }}>{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* API演示区 */}
            <div className="p-10 shadow-sm" style={{ backgroundColor: '#fdfcfb', borderRadius: '1.8rem', border: '1px solid #e8e4e1' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#8c8175' }}>GitHub API 演示</h3>
              <div className="space-y-6">
                <button 
                  onClick={handleFetchCommits}
                  disabled={loading}
                  className="w-full px-8 py-4 rounded-xl transition-all duration-300 font-medium text-white disabled:opacity-60"
                  style={{ backgroundColor: loading ? '#b3a89c' : '#c1b2a6' }}
                >
                  {loading ? '获取中...' : '获取提交记录'}
                </button>
                
                {error && (
                  <div className="p-4 rounded-xl" style={{ backgroundColor: '#f5f3f1', border: '1px solid #e6e2df' }}>
                    <p style={{ color: '#8c8175' }}>错误: {error}</p>
                  </div>
                )}
                
                {commitDates.length > 0 && (
                  <div className="p-6 rounded-xl max-h-48 overflow-y-auto" style={{ backgroundColor: '#f9f7f5', border: '1px solid #e6e2df' }}>
                    <h4 className="text-lg font-medium mb-4" style={{ color: '#8c8175' }}>
                      提交日期 ({commitDates.length} 条)
                    </h4>
                    <div className="space-y-2">
                      {commitDates.slice(0, 10).map((date, index) => (
                        <div key={index} className="text-sm" style={{ color: '#a5998c' }}>
                          {new Date(date).toLocaleString()}
                        </div>
                      ))}
                      {commitDates.length > 10 && (
                        <div className="text-sm" style={{ color: '#b3a89c' }}>
                          ... 还有 {commitDates.length - 10} 条记录
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 概念说明 */}
            <div className="p-10 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '1.8rem', border: '1px solid #e6e2df' }}>
              <h3 className="text-2xl font-light mb-8" style={{ color: '#8c8175' }}>核心概念</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#c1b2a6' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#8c8175' }}>异步执行</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#a5998c' }}>非阻塞代码执行，不等待结果立即返回</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#b3a89c' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#8c8175' }}>Promise 对象</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#a5998c' }}>表示异步操作的最终完成或失败</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: '#a5998c' }}></div>
                  <div>
                    <h4 className="text-lg font-medium mb-2" style={{ color: '#8c8175' }}>async/await</h4>
                    <p className="text-base leading-relaxed" style={{ color: '#a5998c' }}>基于 Promise 的语法糖，简化异步代码</p>
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