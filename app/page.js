import Footer from './components/footer';
import Navbar from './components/Navbar';
import ExerciseCard from './components/Exercisecard';
import exercisesData from './data/exercise.json';

export default function Home() {
  // 延伸阅读数据
  const readingList = [
    {
      title: "《深入理解现代JavaScript》",
      description: "全面介绍ES6+特性及JavaScript高级概念",
      link: "https://example.com/book1"
    },
    {
      title: "《CSS揭秘》",
      description: "探索CSS前沿技术和最佳实践",
      link: "https://example.com/book2"
    },
    {
      title: "《React设计模式与最佳实践》",
      description: "学习React组件设计和性能优化",
      link: "https://example.com/book3"
    },
    {
      title: "《Next.js实战》",
      description: "掌握Next.js框架核心功能和项目实战",
      link: "https://example.com/book4"
    },
    {
      title: "《响应式Web设计》",
      description: "构建适配各种设备的现代网页",
      link: "https://example.com/book5"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      {/* 页面头部 */}
      <header className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Web前端技术<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">课程练习汇总</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            探索并实践前端开发核心技能,从基础HTML/CSS到现代JavaScript框架
          </p>
        </div>
      </header>

      {/* 练习卡片区域 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">实践练习</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercisesData.map((exercise) => (
              <ExerciseCard key={exercise.id} {...exercise} />
            ))}
          </div>
        </div>
      </section>

      {/* 延伸阅读区域 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">进一步阅读</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {readingList.map((book, index) => (
              <a
                key={index}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800 rounded-lg shadow p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{book.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{book.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

