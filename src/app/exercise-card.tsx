import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function ExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {tags && tags.length > 0 && tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:bg-gold-500 group-hover:text-gray-900"
                style={{ 
                  backgroundColor: 'rgba(180, 150, 100, 0.2)', 
                  color: '#e6c78a',
                  border: '1px solid rgba(180, 150, 100, 0.3)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="bg-gold-500/10 text-gold-500 px-2 py-1 rounded text-xs font-medium">NEW</div>
        </div>
        <p className="text-gray-400 mb-6 leading-relaxed flex-grow" style={{ minHeight: '4.5rem' }}>{description}</p>
        <div className="mt-auto pt-4 border-t border-gray-700/50 group-hover:border-gold-500/30 transition-colors duration-300">
          <div className="font-medium transition-colors duration-300 flex items-center gap-2 text-gold-500 group-hover:text-gold-300">
            <span>查看练习</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group">
      {/* 悬浮光效 */}
      <div className="absolute -inset-1 rounded-xl transition-all duration-500 group-hover:opacity-100 opacity-0" 
           style={{ 
             background: 'linear-gradient(135deg, rgba(180, 150, 100, 0.3), rgba(120, 100, 70, 0.1))',
             filter: 'blur(12px)'
           }}></div>
      
      {/* 卡片主体 */}
      <div className="relative rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-1.5 group-hover:shadow-gold-500/10"
           style={{ 
             backgroundColor: 'rgba(15, 23, 42, 0.8)', 
             border: '1px solid rgba(180, 150, 100, 0.15)',
             backdropFilter: 'blur(10px)',
             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
           }}>
        {/* 顶部金色装饰条 */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
        
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
            {cardContent}
          </Link>
        ) : (
          <div className="flex flex-col h-full">{cardContent}</div>
        )}
      </div>
    </div>
  );
}