import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f1f4f5' }}>
      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="relative mb-16">
          <Link href="/" className="absolute -top-12 left-0 flex items-center gap-3 transition-all duration-300" style={{ color: '#5c7987' }}>
            <span className="text-2xl font-extralight">←</span>
            <span className="font-light">返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-5xl mx-auto mb-16 p-12 rounded-[2.5rem]" style={{ backgroundColor: '#ffffff', border: '1px solid #dde4e6', boxShadow: '0 12px 50px rgba(92, 121, 135, 0.1)' }}>
          <h2 className="text-5xl font-extralight mb-8" style={{ color: '#5c7987' }}>地球生命之源</h2>
          <div className="space-y-6 text-xl leading-relaxed" style={{ color: '#7b8e95' }}>
            <p>• 探索宇宙大爆炸的神秘起源</p>
            <p>• 追溯地球形成的漫长历程</p>
            <p>• 揭示生命诞生的奇迹时刻</p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto space-y-16" style={{ backgroundColor: '#fdfdfe', padding: '4rem', borderRadius: '3rem', border: '1px solid #e5ebec' }}>
          <div className="text-center mb-16">
            <h1 className="text-6xl font-thin mb-8" style={{ color: '#5c7987' }}>
              宇宙·地球·生命
            </h1>
            <div className="w-40 h-0.5 mx-auto rounded-full mb-8" style={{ backgroundColor: '#9eb4bb' }}></div>
            <p className="text-2xl font-extralight" style={{ color: '#7b8e95' }}>
              从虚无到存在的伟大征程
            </p>
          </div>
          
          <div className="space-y-16">
            <div className="text-center p-12 rounded-[2rem]" style={{ backgroundColor: '#f7fafb', border: '1px solid #e0e8ea' }}>
              <h2 className="text-4xl font-light mb-8" style={{ color: '#5c7987' }}>宇宙的诞生</h2>
              <p className="text-xl leading-loose" style={{ color: '#7b8e95' }}>
                约138亿年前，一个无限小的奇点在一瞬间爆炸，创造了时间、空间和物质。这就是宇宙大爆炸，
                从此开始了我们所知的一切存在。在最初的几分钟内，氢和氦元素形成，为后来恒星的诞生奠定了基础。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-10 rounded-[2rem] transition-all duration-500 hover:shadow-lg" style={{ backgroundColor: '#ffffff', border: '1px solid #e0e8ea' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-light" style={{ backgroundColor: '#5c7987' }}>
                  1
                </div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#5c7987' }}>太阳系形成</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#8a9ca3' }}>
                  46亿年前，太阳系在星云坍缩中诞生，地球作为岩石行星开始凝聚成形。
                </p>
              </div>

              <div className="p-10 rounded-[2rem] transition-all duration-500 hover:shadow-lg" style={{ backgroundColor: '#f9fcfc', border: '1px solid #e0e8ea' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-light" style={{ backgroundColor: '#7b8e95' }}>
                  2
                </div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#5c7987' }}>地壳冷却</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#8a9ca3' }}>
                  经过数亿年的冷却，地球表面温度降低，最初的固体地壳开始形成。
                </p>
              </div>

              <div className="p-10 rounded-[2rem] transition-all duration-500 hover:shadow-lg" style={{ backgroundColor: '#ffffff', border: '1px solid #e0e8ea' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-light" style={{ backgroundColor: '#9eb4bb' }}>
                  3
                </div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#5c7987' }}>水的出现</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#8a9ca3' }}>
                  彗星撞击和大气凝结带来了水，形成了地球最初的海洋环境。
                </p>
              </div>

              <div className="p-10 rounded-[2rem] transition-all duration-500 hover:shadow-lg" style={{ backgroundColor: '#f9fcfc', border: '1px solid #e0e8ea' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-light" style={{ backgroundColor: '#a7b2af' }}>
                  4
                </div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#5c7987' }}>大气形成</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#8a9ca3' }}>
                  火山活动释放气体，逐渐形成了早期的大气层，为生命创造条件。
                </p>
              </div>

              <div className="p-10 rounded-[2rem] transition-all duration-500 hover:shadow-lg" style={{ backgroundColor: '#ffffff', border: '1px solid #e0e8ea' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-light" style={{ backgroundColor: '#c6cfc7' }}>
                  5
                </div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#5c7987' }}>原始生命</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#8a9ca3' }}>
                  在温暖的海洋中，第一批单细胞生物诞生，开启了生命的历程。
                </p>
              </div>

              <div className="p-10 rounded-[2rem] transition-all duration-500 hover:shadow-lg" style={{ backgroundColor: '#f9fcfc', border: '1px solid #e0e8ea' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-light" style={{ backgroundColor: '#d9e3e5' }}>
                  6
                </div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#5c7987' }}>氧气革命</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#8a9ca3' }}>
                  蓝藻的光合作用释放氧气，彻底改变了地球大气的组成成分。
                </p>
              </div>
            </div>

            <div className="text-center p-12 rounded-[2rem]" style={{ backgroundColor: '#f7fafb', border: '1px solid #e0e8ea' }}>
              <h2 className="text-4xl font-light mb-8" style={{ color: '#5c7987' }}>生命的意义</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-xl leading-loose" style={{ color: '#7b8e95' }}>
                <p>
                  在这浩瀚的宇宙中，地球是已知唯一孕育生命的星球。从最初的化学反应到复杂的生态系统，
                  生命展现出了惊人的适应性和创造力。
                </p>
                <p>
                  每一个生命个体都承载着亿万年进化的智慧，连接着过去与未来，承担着延续生命火种的使命。
                  理解生命的起源，让我们更加珍视这份来之不易的存在。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-10 rounded-[2rem]" style={{ backgroundColor: '#ffffff', border: '1px solid #e0e8ea' }}>
                <h3 className="text-3xl font-light mb-8" style={{ color: '#5c7987' }}>科学视角</h3>
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#8a9ca3' }}>
                  <p>• 化学进化：从简单分子到复杂有机化合物</p>
                  <p>• 生物进化：从单细胞到多细胞生物</p>
                  <p>• 环境共生：生命与环境的相互塑造</p>
                  <p>• 信息传递：遗传密码的保存与传递</p>
                </div>
              </div>

              <div className="p-10 rounded-[2rem]" style={{ backgroundColor: '#f9fcfc', border: '1px solid #e0e8ea' }}>
                <h3 className="text-3xl font-light mb-8" style={{ color: '#5c7987' }}>哲学思考</h3>
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#8a9ca3' }}>
                  <p>• 存在的奇迹：万分之一的概率造就了我们</p>
                  <p>• 时间的深度：地质年代下的生命韧性</p>
                  <p>• 连接的意识：所有生命共享的起源</p>
                  <p>• 责任的觉醒：保护这个蓝色星球</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 