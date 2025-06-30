import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md p-6 shadow-lg w-full z-50" 
         style={{ 
           backgroundColor: 'rgba(15, 23, 42, 0.9)', 
           borderBottom: '1px solid rgba(180, 150, 100, 0.2)'
         }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" 
              className="text-2xl font-light transition-colors duration-300 tracking-wide hover:text-gold-300"
              style={{ color: '#e6c78a' }}>
          Web前端作业展示
        </Link>
        <div className="space-x-8 text-lg">
          <Link href="/" 
                className="transition-colors duration-300 font-light hover:text-white"
                style={{ color: '#b49664' }}>
            首页
          </Link>
          <Link href="/archive" 
                className="transition-colors duration-300 font-light hover:text-white"
                style={{ color: '#b49664' }}>
            归档
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center overflow-hidden" 
         style={{ 
           backgroundColor: '#0f172a',
           backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(180, 150, 100, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(138, 109, 60, 0.1) 0%, transparent 50%)'
         }}>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] opacity-5 -z-10 rounded-full blur-3xl" 
           style={{ background: 'radial-gradient(circle, rgba(180, 150, 100, 0.3), transparent)' }}></div>
      
      <Navbar />

      <main className="flex-grow container mx-auto px-8 py-16 pt-32 w-full z-10">
        <header className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-extralight mb-8" 
              style={{ color: '#e6c78a' }}>
            《Web前端开发》课程作业
          </h1>
          <div className="w-24 h-0.5 mx-auto rounded-full mb-8" 
               style={{ backgroundColor: '#b49664' }}></div>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed" 
             style={{ color: '#94a3b8' }}>
            探索学习的前沿，见证技术的演进
          </p>
          <p className="text-lg mt-6 font-light max-w-3xl mx-auto" 
             style={{ color: '#94a3b8' }}>
            这里展示了从基础HTML/CSS到现代React开发的完整学习历程,
            每个页面都体现了不同阶段的技术掌握与创新应用。
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>

        <section className="mt-24 max-w-4xl mx-auto p-12 rounded-[2.5rem] backdrop-blur-lg"
                 style={{ 
                   backgroundColor: 'rgba(15, 23, 42, 0.6)', 
                   border: '1px solid rgba(180, 150, 100, 0.2)',
                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                 }}>
          <h2 className="text-3xl font-light text-center mb-8" 
              style={{ color: '#e6c78a' }}>
            技术栈与工具
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-2xl backdrop-blur-md"
                   style={{ 
                     backgroundColor: 'rgba(180, 150, 100, 0.1)',
                     border: '1px solid rgba(180, 150, 100, 0.2)',
                     color: '#e6c78a'
                   }}>
                ⚛️
              </div>
              <p className="font-medium" style={{ color: '#b49664' }}>React</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-2xl backdrop-blur-md"
                   style={{ 
                     backgroundColor: 'rgba(180, 150, 100, 0.1)',
                     border: '1px solid rgba(180, 150, 100, 0.2)',
                     color: '#e6c78a'
                   }}>
                🎨
              </div>
              <p className="font-medium" style={{ color: '#b49664' }}>CSS</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-2xl backdrop-blur-md"
                   style={{ 
                     backgroundColor: 'rgba(180, 150, 100, 0.1)',
                     border: '1px solid rgba(180, 150, 100, 0.2)',
                     color: '#e6c78a'
                   }}>
                💻
              </div>
              <p className="font-medium" style={{ color: '#b49664' }}>JavaScript</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-2xl backdrop-blur-md"
                   style={{ 
                     backgroundColor: 'rgba(180, 150, 100, 0.1)',
                     border: '1px solid rgba(180, 150, 100, 0.2)',
                     color: '#e6c78a'
                   }}>
                🚀
              </div>
              <p className="font-medium" style={{ color: '#b49664' }}>Next.js</p>
            </div>
          </div>
        </section>
      </main>

      <WakaTimeStats />
    </div>
  );
}