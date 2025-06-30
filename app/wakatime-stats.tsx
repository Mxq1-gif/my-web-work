import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "No activity yet";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "Server Error";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <p className="text-gray-400">
          总编码时长: <span 
            className="font-semibold transition-colors duration-300 hover:text-gold-300"
            style={{ color: '#b49664' }}
          >
            {stats}
          </span>
        </p>
    );
}

export default function WakaTimeStats() {
  return (
    <footer 
      className="text-center p-8 mt-auto w-full z-10 backdrop-blur-md"
      style={{ 
        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
        borderTop: '1px solid rgba(180, 150, 100, 0.2)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 装饰性分隔线 */}
        <div 
          className="w-24 h-0.5 mx-auto rounded-full mb-6"
          style={{ background: 'linear-gradient(to right, transparent, #b49664, transparent)' }}
        ></div>
        
        <p 
          className="mb-4 text-sm md:text-base"
          style={{ color: '#94a3b8' }}
        >
          &copy; {new Date().getFullYear()} Web前端开发课程练习平台.保留所有权利.
        </p>
        
        <p 
          className="mb-4 text-sm md:text-base"
          style={{ color: '#94a3b8' }}
        >
          使用 Next.js 和 Tailwind CSS 构建
        </p>
        
        <Suspense fallback={
          <p 
            className="text-sm md:text-base animate-pulse"
            style={{ color: '#94a3b8' }}
          >
            正在加载编码时长...
          </p>
        }>
          <WakaTimeData />
        </Suspense>
        
        {/* 装饰性元素 */}
        <div className="flex justify-center mt-6 space-x-4">
          {['🌐', '💻', '🎨', '🚀'].map((icon, index) => (
            <div 
              key={index}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
              style={{
                backgroundColor: 'rgba(180, 150, 100, 0.1)',
                border: '1px solid rgba(180, 150, 100, 0.2)',
                color: '#e6c78a'
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}