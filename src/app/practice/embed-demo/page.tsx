"use client";
import Link from 'next/link';

export default function EmbedDemoPage() {
  return (
    <div className="flex flex-col min-h-screen relative" style={{ backgroundColor: '#f3f6f7' }}>
      <main className="flex-grow w-full h-full relative">
        <div className="fixed top-0 left-0 w-full z-20 shadow-sm backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderBottom: '1px solid #e1e6e7' }}>
          <div className="container mx-auto flex items-center justify-between px-6 py-2">
            <div className="flex items-center gap-4">
              <Link href="/" className="transition-all duration-300 hover:translate-x-1 text-base font-light" style={{ color: '#7a8a95' }}>
                ← 返回首页
              </Link>
              <span className="text-lg font-light" style={{ color: '#5c7987' }}>
                智能问答服务演示
              </span>
            </div>
            <span className="text-xs hidden md:block font-light" style={{ color: '#9ca8ab' }}>
              第三方服务集成案例
            </span>
          </div>
        </div>
        
        <div className="fixed w-full z-20 shadow-sm" style={{ top: '48px', backgroundColor: 'rgba(122, 138, 149, 0.95)', borderBottom: '1px solid #9ca8ab' }}>
          <div className="container mx-auto px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8 text-sm">
                <span className="text-white font-medium">📱 Next.js应用嵌入</span>
                <span className="text-white/80">🎨 响应式设计</span>
                <span className="text-white/80">🔒 iframe安全集成</span>
              </div>
              <span className="text-xs text-white/60 hidden lg:block">
                可在下方直接体验智能问答功能
              </span>
            </div>
          </div>
        </div>
        
        <div className="fixed left-0 w-full" style={{ top: '80px', height: 'calc(100vh - 80px)' }}>
          <iframe
            src="https://ai.youdao.com/saas/qanything/#/home"
            title="智能问答服务"
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{
              border: '1px solid #e4eaec',
              borderTop: 'none'
            }}
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
} 