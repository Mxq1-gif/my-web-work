'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f8f6f4' }}>
      <main className="flex-grow container mx-auto px-8 py-20">
        <div className="relative mb-20">
          <Link href="/" className="absolute -top-16 left-0 flex items-center gap-3 transition-all duration-300" style={{ color: '#8b7d6b' }}>
            <span className="text-xl">←</span>
            <span className="font-light">返回首页</span>
          </Link>
        </div>

        <section className="max-w-5xl mx-auto mb-20 p-12 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e7e3df' }}>
          <h2 className="text-4xl font-light mb-8" style={{ color: '#8b7d6b' }}>CSS 核心概念</h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#9e9184' }}>
            <p>• 深入理解CSS盒模型的构成与应用</p>
            <p>• 掌握现代布局系统的核心技术</p>
            <p>• 学习过渡动画的设计原理</p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Section: Box Model */}
          <section className="p-12 shadow-sm" style={{ backgroundColor: '#fdfdfc', borderRadius: '2rem', border: '1px solid #e9e5e1' }}>
            <h2 className="text-3xl font-light mb-8" style={{ color: '#8b7d6b', borderLeft: '4px solid #c4b5a8', paddingLeft: '1.5rem' }}>盒模型 (Box Model)</h2>
            <p className="text-lg mb-12 leading-relaxed" style={{ color: '#9e9184' }}>
              CSS盒模型是前端布局的基础，描述了元素如何被渲染。每个元素都由四个层次组成：
              内容区域(content)、内边距(padding)、边框(border)和外边距(margin)。
            </p>
            <div className="flex justify-center items-center p-12 rounded-2xl" style={{ backgroundColor: '#f5f3f1' }}>
              <div className="p-8 text-center rounded-2xl" style={{ backgroundColor: '#e9e5e1', margin: '2rem' }}>
                <div className="p-8 rounded-xl" style={{ backgroundColor: '#ddd9d5', border: '3px dashed #c4b5a8' }}>
                  <div className="text-white p-12 rounded-lg font-light text-xl" style={{ backgroundColor: '#c4b5a8' }}>
                    内容区域
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 text-base" style={{ color: '#a8a094' }}>
              <p>外层: Margin (外边距) → 中层: Border (边框) → 内层: Padding (内边距) → 核心: Content (内容)</p>
            </div>
          </section>

          {/* Section: Layout */}
          <section className="p-12 shadow-sm" style={{ backgroundColor: '#ffffff', borderRadius: '2rem', border: '1px solid #e7e3df' }}>
            <h2 className="text-3xl font-light mb-8" style={{ color: '#8b7d6b', borderLeft: '4px solid #c4b5a8', paddingLeft: '1.5rem' }}>布局系统 (Layout)</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium mb-6" style={{ color: '#8b7d6b' }}>Display: inline</h3>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: '#9e9184' }}>
                  inline 显示类型使块级元素像文本一样在一行内排列，适用于行内元素的布局设计。
                </p>
                <div className="p-8 rounded-xl" style={{ backgroundColor: '#f5f3f1', border: '1px solid #e9e5e1' }}>
                  <p className="inline p-4 rounded-lg mr-3 text-white font-medium" style={{ backgroundColor: '#c4b5a8' }}>元素一</p>
                  <p className="inline p-4 rounded-lg mr-3 text-white font-medium" style={{ backgroundColor: '#c4b5a8' }}>元素二</p>
                  <p className="inline p-4 rounded-lg text-white font-medium" style={{ backgroundColor: '#c4b5a8' }}>元素三</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-6" style={{ color: '#8b7d6b' }}>Display: flex (Flexbox)</h3>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: '#9e9184' }}>
                  Flexbox 是现代Web布局的强大工具，提供了灵活的一维布局模型，轻松实现元素的对齐和分布。
                </p>
                <div className="p-8 rounded-xl flex justify-around items-center" style={{ backgroundColor: '#f9f7f5', border: '1px solid #e7e3df' }}>
                  <p className="p-4 rounded-lg text-white font-medium" style={{ backgroundColor: '#a8a094' }}>Flex子项1</p>
                  <p className="p-4 rounded-lg text-white font-medium" style={{ backgroundColor: '#a8a094' }}>Flex子项2</p>
                  <p className="p-4 rounded-lg text-white font-medium" style={{ backgroundColor: '#a8a094' }}>Flex子项3</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Animation */}
          <section className="p-12 shadow-sm" style={{ backgroundColor: '#fdfdfc', borderRadius: '2rem', border: '1px solid #e9e5e1' }}>
            <h2 className="text-3xl font-light mb-8" style={{ color: '#8b7d6b', borderLeft: '4px solid #c4b5a8', paddingLeft: '1.5rem' }}>过渡动画 (Transition)</h2>
            <p className="text-lg mb-12 leading-relaxed" style={{ color: '#9e9184' }}>
              通过 transition 属性为CSS属性的变化添加平滑的动画效果，提升用户体验。
              将鼠标悬停在下面的方块上查看动画效果。
            </p>
            <div className="flex justify-center items-center">
              <div className="w-40 h-40 flex justify-center items-center text-white font-light text-xl cursor-pointer transition-all duration-500 ease-in-out rounded-2xl hover:scale-110 hover:rotate-12 hover:shadow-xl"
                   style={{ backgroundColor: '#c4b5a8' }}
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8b7d6b'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c4b5a8'}>
                悬停体验
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-base" style={{ color: '#a8a094' }}>
                动画效果：缩放 + 旋转 + 颜色渐变 + 阴影变化
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
} 