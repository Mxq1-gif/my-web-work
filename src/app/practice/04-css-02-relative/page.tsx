import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f9f7f4' }}>
      <main className="flex-grow container mx-auto px-8 py-20">
        <div className="relative mb-20">
          <Link href="/" className="absolute -top-16 left-0 flex items-center gap-3 transition-all duration-300" style={{ color: '#9b8671' }}>
            <span className="text-xl">←</span>
            <span className="font-light">返回首页</span>
          </Link>
        </div>

        <section className="max-w-5xl mx-auto mb-20 p-12 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e8e4df' }}>
          <h2 className="text-4xl font-light mb-8" style={{ color: '#9b8671' }}>相对定位 (Relative)</h2>
          <p className="text-lg leading-relaxed" style={{ color: '#aea194' }}>
            position: relative 使元素相对于其在正常文档流中的原始位置进行偏移，
            但其原始空间仍被保留，不影响其他元素的布局。
          </p>
        </section>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Section: Normal Flow */}
          <section className="p-12 shadow-sm" style={{ backgroundColor: '#fdfdfc', borderRadius: '2rem', border: '1px solid #eae6e1' }}>
            <h2 className="text-2xl font-light mb-10 text-center" style={{ color: '#9b8671' }}>正常文档流</h2>
            <div className="space-y-6 text-center">
              <div className="p-6 rounded-xl font-medium" style={{ backgroundColor: '#e8e4df', color: '#9b8671' }}>
                元素 1
              </div>
              <div className="p-6 rounded-xl font-medium" style={{ backgroundColor: '#e8e4df', color: '#9b8671' }}>
                元素 2
              </div>
              <div className="p-6 rounded-xl font-medium" style={{ backgroundColor: 'rgba(155, 134, 113, 0.2)', border: '2px solid #c5b29f', color: '#9b8671' }}>
                元素 3 (将要被定位的元素)
              </div>
              <div className="p-6 rounded-xl font-medium" style={{ backgroundColor: '#e8e4df', color: '#9b8671' }}>
                元素 4
              </div>
            </div>
          </section>

          {/* Section: Relative Positioning */}
          <section className="p-12 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e8e4df' }}>
            <h2 className="text-2xl font-light mb-10 text-center" style={{ color: '#9b8671' }}>相对定位 (Relative)</h2>
            <div className="space-y-6 text-center relative">
              <div className="p-6 rounded-xl font-medium" style={{ backgroundColor: '#e8e4df', color: '#9b8671' }}>
                元素 1
              </div>
              <div className="p-6 rounded-xl font-medium" style={{ backgroundColor: '#e8e4df', color: '#9b8671' }}>
                元素 2
              </div>
              
              {/* Ghost element showing original position */}
              <div className="p-6 rounded-xl font-medium" style={{ backgroundColor: 'rgba(232, 228, 223, 0.3)', border: '2px dashed #c5b29f', color: '#b3a08d' }}>
                元素 3 的原始位置
              </div>

              {/* The relatively positioned element */}
              <div className="p-6 rounded-xl absolute w-full font-medium" 
                   style={{ 
                     top: 'calc(9rem + 1.5rem + 12px)', 
                     left: '50px',
                     backgroundColor: '#c5b29f',
                     color: '#ffffff',
                     boxShadow: '0 4px 20px rgba(197, 178, 159, 0.3)'
                   }}>
                元素 3 (position: relative; top: ...; left: 50px;)
              </div>

              <div className="p-6 rounded-xl font-medium" style={{ backgroundColor: '#e8e4df', color: '#9b8671' }}>
                元素 4
              </div>

              <div className="pt-20 text-center">
                <p className="text-sm leading-relaxed" style={{ color: '#d4c1ae' }}>
                  注意：即使元素3被移动了，元素4的位置并未改变，
                  因为元素3在文档流中占据的空间被保留了。
                </p>
              </div>
            </div>
          </section>
        </div>
        
        <div className="max-w-5xl mx-auto mt-16 p-10 shadow-sm" style={{ backgroundColor: '#fdfdfc', borderRadius: '2rem', border: '1px solid #eae6e1' }}>
          <h3 className="text-2xl font-light mb-8" style={{ color: '#9b8671' }}>核心代码示例</h3>
          <div className="p-8 rounded-xl" style={{ backgroundColor: '#f7f3ee', border: '1px solid #e8e4df' }}>
            <pre className="text-base leading-loose overflow-x-auto" style={{ color: '#8c7a67' }}>
              <code>
{`.target-element {
  position: relative;
  top: 50px;   /* 相对于原始位置向下移动 50px */
  left: 50px;  /* 相对于原始位置向右移动 50px */
}`}
              </code>
            </pre>
          </div>
          <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: '#f2ede8', border: '1px solid #e3ddd8' }}>
            <h4 className="text-lg font-medium mb-4" style={{ color: '#9b8671' }}>特点总结</h4>
            <div className="space-y-3 text-base" style={{ color: '#aea194' }}>
              <p>• 元素仍然占据原始文档流中的空间</p>
              <p>• 移动不影响其他元素的位置</p>
              <p>• 可以作为绝对定位元素的定位上下文</p>
              <p>• 支持 z-index 层级控制</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 