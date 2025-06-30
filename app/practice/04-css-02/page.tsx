import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f7f5f7' }}>
      <main className="flex-grow container mx-auto px-8 py-20">
        <div className="relative mb-20">
          <Link href="/" className="absolute -top-16 left-0 flex items-center gap-3 transition-all duration-300" style={{ color: '#8a7c8a' }}>
            <span className="text-xl">←</span>
            <span className="font-light">返回首页</span>
          </Link>
        </div>

        <section className="max-w-5xl mx-auto mb-20 p-12 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e6e2e6' }}>
          <h2 className="text-4xl font-light mb-8" style={{ color: '#8a7c8a' }}>CSS 定位 (Position)</h2>
          <p className="text-lg leading-relaxed" style={{ color: '#9d919d' }}>
            通过交互式示例深入理解CSS定位属性：static、relative、absolute 和 fixed 的区别与应用场景。
          </p>
        </section>

        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Section: Relative vs Absolute */}
          <section className="p-12 shadow-sm" style={{ backgroundColor: '#fdfdfd', borderRadius: '2rem', border: '1px solid #e8e4e8' }}>
            <h2 className="text-3xl font-light mb-6" style={{ color: '#8a7c8a', borderLeft: '4px solid #b8a8b8', paddingLeft: '1.5rem' }}>
              Relative (相对) vs Absolute (绝对)
            </h2>
            <p className="text-lg mb-12 leading-relaxed" style={{ color: '#9d919d', paddingLeft: '1.5rem' }}>
              absolute 定位的元素会相对于其最近的非 static 定位祖先元素进行定位。
              如果找不到这样的祖先，则相对于初始包含块（通常是 html 元素）。
            </p>
            
            <div className="p-12 rounded-2xl h-96 relative" style={{ backgroundColor: '#f5f3f5', border: '2px dashed #c7bdc7' }}>
              <div className="absolute top-6 left-6 text-sm" style={{ color: '#a8a0a8' }}>
                父容器 (position: relative)
              </div>
              
              <div className="w-56 h-28 rounded-xl p-6 text-center" style={{ backgroundColor: '#e8e4e8', border: '1px solid #c7bdc7' }}>
                <p className="font-medium text-lg" style={{ color: '#8a7c8a' }}>默认位置的元素</p>
                <p className="text-sm mt-2" style={{ color: '#9d919d' }}>(position: static)</p>
              </div>

              <div className="w-56 h-28 rounded-xl p-6 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                   style={{ backgroundColor: 'rgba(184, 168, 184, 0.3)', border: '2px solid #b8a8b8' }}>
                <p className="font-medium text-lg" style={{ color: '#8a7c8a' }}>绝对定位的元素</p>
                <p className="text-sm" style={{ color: '#9d919d' }}>(position: absolute)</p>
                <p className="text-xs mt-1" style={{ color: '#a8a0a8' }}>top: 50%; left: 50%</p>
              </div>

              <div className="w-56 h-28 rounded-xl p-6 text-center absolute bottom-6 right-6"
                   style={{ backgroundColor: 'rgba(151, 139, 151, 0.3)', border: '2px solid #978b97' }}>
                <p className="font-medium text-lg" style={{ color: '#8a7c8a' }}>另一个绝对定位元素</p>
                <p className="text-sm" style={{ color: '#9d919d' }}>(position: absolute)</p>
                <p className="text-xs mt-1" style={{ color: '#a8a0a8' }}>bottom: 1.5rem; right: 1.5rem</p>
              </div>
            </div>
          </section>

          {/* Section: Fixed */}
          <section className="p-12 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e6e2e6' }}>
            <h2 className="text-3xl font-light mb-6" style={{ color: '#8a7c8a', borderLeft: '4px solid #b8a8b8', paddingLeft: '1.5rem' }}>
              Fixed (固定)
            </h2>
            <p className="text-lg mb-12 leading-relaxed" style={{ color: '#9d919d', paddingLeft: '1.5rem' }}>
              fixed 定位的元素相对于浏览器视口进行定位，即使页面滚动也会保持在同一位置。
              向下滚动页面，观察右下角的固定元素效果。
            </p>
            
            <div className="h-64 flex justify-center items-center rounded-2xl" style={{ backgroundColor: '#f5f3f5' }}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl" style={{ backgroundColor: '#b8a8b8' }}>
                  📌
                </div>
                <p className="text-lg" style={{ color: '#9d919d' }}>
                  滚动页面查看固定定位效果
                </p>
              </div>
            </div>
          </section>

          {/* This is the fixed element */}
          <div className="fixed bottom-12 right-12 w-48 h-20 rounded-2xl shadow-lg flex justify-center items-center z-50 transition-all duration-300 hover:scale-105"
               style={{ backgroundColor: '#b8a8b8', boxShadow: '0 8px 30px rgba(184, 168, 184, 0.3)' }}>
            <span className="text-white font-medium text-lg">我是固定定位！</span>
          </div>

        </div>

        {/* Add some space to allow for scrolling */}
        <div className="h-96"></div>

      </main>
    </div>
  );
} 