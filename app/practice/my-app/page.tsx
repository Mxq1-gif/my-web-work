import Link from 'next/link';
import Image from 'next/image';
import MyAppDemo from "../my-app-demo";
import MyAppHello from "../my-app-hello";

export default function MyAppHome() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f6f9fa' }}>
      <main className="flex-grow container mx-auto px-8 py-20">
        <div className="relative mb-20">
          <Link href="/" className="absolute -top-16 left-0 flex items-center gap-3 transition-all duration-300" style={{ color: '#7a8a95' }}>
            <span className="text-xl font-light">←</span>
            <span className="font-normal">返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-4xl mx-auto mb-16 p-12 shadow-sm flex flex-col lg:flex-row gap-10 items-center" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e4eaec' }}>
          <div className="flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="React 应用示例" 
              width={280} 
              height={180} 
              className="rounded-2xl shadow-sm" 
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-light mb-6" style={{ color: '#7a8a95' }}>React 应用示例</h2>
            <p className="text-xl leading-relaxed mb-8" style={{ color: '#8d9ca6' }}>
              探索组件化开发的核心理念，通过简洁的代码结构构建现代化的用户界面。
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: '#9eb4bb' }}>
                React
              </span>
              <span className="px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: '#a7b2af' }}>
                组件化
              </span>
              <span className="px-6 py-3 rounded-full text-white font-medium" style={{ backgroundColor: '#c6cfc7' }}>
                前端技术
              </span>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto p-12 shadow-sm" style={{ backgroundColor: '#fdfdfe', borderRadius: '2rem', border: '1px solid #e7ecee' }}>
          <h1 className="text-4xl font-light mb-12 text-center" style={{ color: '#7a8a95' }}>
            组件交互演示
          </h1>
          <div className="w-24 h-0.5 mx-auto mb-12 rounded-full" style={{ backgroundColor: '#d9e3e5' }}></div>
          
          <div className="space-y-12">
            <div className="p-10 rounded-2xl" style={{ backgroundColor: '#f8fafb', border: '1px solid #e4eaec' }}>
              <h3 className="text-2xl font-medium mb-8" style={{ color: '#7a8a95' }}>
                基础组件演示
              </h3>
              <MyAppDemo />
            </div>
            
            <div className="p-10 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e4eaec' }}>
              <h3 className="text-2xl font-medium mb-8" style={{ color: '#7a8a95' }}>
                问候组件演示
              </h3>
              <MyAppHello />
            </div>
          </div>
          
          <div className="mt-16 p-10 rounded-2xl text-center" style={{ backgroundColor: '#f4f7f8', border: '1px solid #e0e6e8' }}>
            <h3 className="text-2xl font-light mb-6" style={{ color: '#7a8a95' }}>
              技术特点
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg" style={{ color: '#8d9ca6' }}>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-medium" style={{ backgroundColor: '#9eb4bb' }}>
                  ✓
                </div>
                <p>组件化设计</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-medium" style={{ backgroundColor: '#a7b2af' }}>
                  ✓
                </div>
                <p>响应式布局</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-medium" style={{ backgroundColor: '#c6cfc7' }}>
                  ✓
                </div>
                <p>现代化UI</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 