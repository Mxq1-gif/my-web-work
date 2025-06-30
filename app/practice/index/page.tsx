import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f8fafa' }}>
      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="relative mb-16">
          <Link href="/" className="absolute -top-12 left-0 flex items-center gap-3 transition-all duration-300 hover:gap-4" style={{ color: '#5c7987' }}>
            <span className="text-xl">←</span>
            <span className="font-medium">返回首页</span>
          </Link>
        </div>
        
        <section className="max-w-5xl mx-auto mb-16 p-10 rounded-3xl shadow-sm" style={{ backgroundColor: '#ffffff', border: '1px solid #e8eded' }}>
          <h2 className="text-3xl font-light mb-6" style={{ color: '#5c7987' }}>植物世界探索</h2>
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#6b7d84' }}>
            <p>• 探索HTML表单、表格、多媒体元素的综合应用</p>
            <p>• 深入了解植物科学知识与网页设计的结合</p>
            <p>• 学习语义化标记在现代网页中的重要性</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto space-y-12" style={{ backgroundColor: '#fdfdfe', padding: '3rem', borderRadius: '2rem', border: '1px solid #eef3f4' }}>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extralight mb-4" style={{ color: '#5c7987' }}>自然百科</h1>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#9eb4bb' }}></div>
            <p className="text-xl mt-6 font-light" style={{ color: '#9eb4bb' }}>植物篇</p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-8" style={{ color: '#5c7987' }}>搜索植物资源</h2>
            <form action="https://www.iconfont.cn/search/index?searchType=icon" method="get" className="p-6 rounded-2xl" style={{ backgroundColor: '#f9fcfc', border: '1px solid #e8eded' }}>
              <div className="flex gap-4">
                <input 
                  type="text" 
                  name="q" 
                  className="flex-1 px-6 py-4 rounded-xl border-0 outline-none text-lg"
                  style={{ backgroundColor: '#ffffff', color: '#5c7987', border: '1px solid #d9e3e5' }}
                  placeholder="搜索植物图标..."
                />
                <input 
                  type="submit" 
                  value="搜索" 
                  className="px-8 py-4 rounded-xl cursor-pointer transition-all duration-300 font-medium text-white"
                  style={{ backgroundColor: '#9eb4bb', border: 'none' }}
                />
              </div>
            </form>
          </div>

          <div className="mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#f6f9fa', border: '1px solid #e0e8ea' }}>
            <p className="text-lg leading-loose" style={{ color: '#5c7987' }}>
              本页面通过现代化的设计语言，为您呈现丰富的植物世界。从基础的生态作用到文化象征意义，
              我们致力于创建一个美观且实用的植物知识平台，适合各年龄段的自然爱好者。
            </p>
          </div>

          <div className="grid gap-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e8eded', boxShadow: '0 4px 20px rgba(92, 121, 135, 0.08)' }}>
              <h3 className="text-2xl font-light mb-6" style={{ color: '#5c7987' }}>植物的生态价值</h3>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#6b7d84' }}>
                <p>• 光合作用：将二氧化碳转化为氧气，维持大气平衡</p>
                <p>• 土壤保护：根系结构防止水土流失，改善土壤质量</p>
                <p>• 气候调节：通过蒸腾作用调节局部气候环境</p>
                <p>• 生物多样性：为各种动物提供栖息地和食物来源</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#fafcfc', border: '1px solid #e8eded' }}>
              <h3 className="text-2xl font-light mb-6" style={{ color: '#5c7987' }}>植物分类体系</h3>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#6b7d84' }}>
                <p>• 乔木类：高大的木本植物，如松树、橡树等</p>
                <p>• 灌木类：较矮的木本植物，多分枝结构</p>
                <p>• 草本类：茎部柔软的植物，生长周期较短</p>
                <p>• 特殊类：食虫植物、多肉植物等特化物种</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#ffffff', border: '1px solid #e8eded' }}>
              <h3 className="text-2xl font-light mb-6" style={{ color: '#5c7987' }}>推荐资源</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-3" style={{ color: '#5c7987' }}>纪录片推荐</h4>
                  <p className="text-lg" style={{ color: '#6b7d84' }}>《影响世界的中国植物》- 爱奇艺出品的精品植物纪录片</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3" style={{ color: '#5c7987' }}>图书推荐</h4>
                  <p className="text-lg" style={{ color: '#6b7d84' }}>《植物的秘密生命》- 揭示植物的感知与沟通能力</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-8" style={{ color: '#5c7987' }}>植物世界</h2>
            <p className="text-lg mb-4" style={{ color: '#6b7d84' }}>
              深入了解植物知识
              <a href="https://baike.baidu.com/item/%E6%A4%8D%E7%89%A9/142914" className="ml-2 underline transition-colors duration-300" style={{ color: '#9eb4bb' }} target="_blank" rel="noopener noreferrer">
                了解更多
              </a>
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap gap-6 justify-center">
              <Image 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400&auto=format&fit=crop" 
                alt="植物纪录片" 
                width={280} 
                height={180} 
                className="rounded-xl shadow-sm"
              />
              <Image 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=300&auto=format&fit=crop" 
                alt="植物图片" 
                width={220} 
                height={140} 
                className="rounded-xl shadow-sm"
              />
            </div>
            
            <div className="p-6 rounded-2xl flex justify-center" style={{ backgroundColor: '#f9fcfc', border: '1px solid #e8eded' }}>
              <iframe 
                src="https://player.bilibili.com/player.html?isOutside=true&aid=389033288&bvid=BV1Jd4y117EX&cid=861162317&p=1"
                width="100%" 
                height="320" 
                className="rounded-xl max-w-2xl"
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen
                title="植物科普视频"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-light mb-8" style={{ color: '#5c7987' }}>植物信息表</h2>
            <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid #e8eded' }}>
              <table className="w-full" style={{ backgroundColor: '#ffffff' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f6f9fa' }}>
                    <th className="px-8 py-6 text-left text-xl font-medium" style={{ color: '#5c7987' }}>植物名称</th>
                    <th className="px-8 py-6 text-left text-xl font-medium" style={{ color: '#5c7987' }}>科属</th>
                    <th className="px-8 py-6 text-left text-xl font-medium" style={{ color: '#5c7987' }}>环境</th>
                    <th className="px-8 py-6 text-left text-xl font-medium" style={{ color: '#5c7987' }}>花期</th>
                    <th className="px-8 py-6 text-left text-xl font-medium" style={{ color: '#5c7987' }}>用途</th>
                  </tr>
                </thead>
                <tbody style={{ color: '#6b7d84' }}>
                  <tr style={{ borderTop: '1px solid #f0f5f6' }}>
                    <td className="px-8 py-6 text-lg">玫瑰</td>
                    <td className="px-8 py-6 text-lg">蔷薇科</td>
                    <td className="px-8 py-6 text-lg">温带，喜阳光</td>
                    <td className="px-8 py-6 text-lg">春夏季</td>
                    <td className="px-8 py-6 text-lg">观赏、香料</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid #f0f5f6' }}>
                    <td className="px-8 py-6 text-lg">向日葵</td>
                    <td className="px-8 py-6 text-lg">菊科</td>
                    <td className="px-8 py-6 text-lg">温暖，需阳光</td>
                    <td className="px-8 py-6 text-lg">夏季</td>
                    <td className="px-8 py-6 text-lg">观赏、食用油</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid #f0f5f6' }}>
                    <td className="px-8 py-6 text-lg">仙人掌</td>
                    <td className="px-8 py-6 text-lg">仙人掌科</td>
                    <td className="px-8 py-6 text-lg">干旱沙漠</td>
                    <td className="px-8 py-6 text-lg">春季</td>
                    <td className="px-8 py-6 text-lg">观赏、药用</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 