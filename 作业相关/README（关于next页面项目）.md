This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Web前端作业展示平台 
一、项目简介
这是一个基于Next.js的高级Web前端作业展示平台，主要功能包括：
展示学生在Web前端开发课程中的各项作业
提供响应式设计的现代化UI界面
集成WakaTime编程时长统计
采用深色主题搭配金色点缀的高级设计风格
卡片式布局展示各项前端技术实践

二、QAnything集成路径与实现细节
集成路径
/practice/embed-demo

实现方式
在智能问答演示页面中，通过iframe安全嵌入第三方问答服务：
// app/practice/embed-demo/page.tsx
export default function EmbedDemoPage() {
  return (
    <div className="h-screen w-full bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gold-500/30">
        <div className="p-4 bg-gray-800 border-b border-gold-500/20">
          <h1 className="text-2xl font-bold text-gold-300">智能问答服务演示</h1>
          <p className="text-gray-400">安全嵌入第三方问答平台</p>
        </div>
        
        <iframe 
          src="https://qanything.ai/demo" 
          className="w-full h-[70vh] border-0"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups"
        />
        
        <div className="p-4 bg-gray-800 text-sm text-gray-500 border-t border-gold-500/20">
          安全提示：此演示在沙盒环境中运行，不会访问您的本地数据
        </div>
      </div>
    </div>
  );
}
选择原因
安全隔离：使用sandbox属性创建安全沙盒环境

无缝集成：iframe是最简单可靠的第三方服务嵌入方式

维护简便：无需处理API密钥和认证流程

响应式设计：适配各种屏幕尺寸

视觉一致性：保持与整体设计风格统一的金色边框和深色背景

三、WakaTime API集成方法
实现步骤
获取API密钥：
在WakaTime官网创建账号
在个人设置中生成API密钥

环境变量配置（.env.local）：
WAKATIME_API_KEY="waka_c8130531-fdc0-49f0-9387-3b3a3cd7ec43"
API调用函数：
async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) return "API Key Not Configured";

  try {
    const response = await fetch(
      `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`,
      { next: { revalidate: 3600 } } // 每小时更新
    );

    if (!response.ok) return "Error Fetching Data";
    
    const stats = await response.json();
    return stats.data?.text || "No activity yet";
  } catch (error) {
    return "Server Error";
  }
}
组件实现：
async function WakaTimeData() {
  const stats = await getWakaTimeStats();
  return <p>总编码时长: <span className="font-semibold text-gold-300">{stats}</span></p>;
}

export default function WakaTimeStats() {
  return (
    <div>
      <Suspense fallback={<p>正在加载编码时长...</p>}>
        <WakaTimeData />
      </Suspense>
    </div>
    <p>
      注意：编码时长数据基于WakaTime实时统计，可能存在延迟。
    </p>
    );}

安全措施
API密钥存储在环境变量中，不暴露在客户端代码
使用Next.js的服务器端数据获取
设置合理的revalidate时间(1小时)
完善的错误处理机制

四、Next.js项目结构

frontend-showcase/
├── app/
│   ├── practice/
│   │   ├── embed-demo/         # 智能问答演示
│   │   │   └── page.tsx
│   │   ├── my-app/             # React组件开发
│   │   │   └── page.tsx
│   │   └── ...                 # 其他练习页面
│   ├── components/             # 公共组件
│   │   ├── exercise-card.tsx   # 作业卡片
│   │   └── wakatime-stats.tsx  # 统计组件
│   ├── layout.tsx              # 全局布局
│   └── page.tsx                # 首页
├── lib/
│   └── data.ts                 # 数据处理
├── public/                     # 静态资源
├── styles/                     # 全局样式
├── next.config.js              # Next.js配置
├── exercises.json              # 作业数据
└── package.json

关键特点
App Router：使用Next.js 13+的App Router架构
服务端组件：数据获取在服务端完成
代码分割：自动按路由分割代码
静态资源优化：通过/public目录管理
环境隔离：清晰的开发/生产环境配置

五、旧作业整合方式
整合策略
统一数据管理：使用exercises.json集中管理所有作业数据
[
  {
    "id": 1,
    "title": "智能问答服务演示",
    "description": "展示第三方服务集成技术...",
    "link": "/practice/embed-demo",
    "imageUrl": "https://images.unsplash.com/...",
    "tags": ["服务集成", "iframe", "API"]
  },
  ...
]

文件系统路由：每个作业对应一个路由路径
/practice/embed-demo → app/practice/embed-demo/page.tsx
动态卡片生成：首页通过映射JSON数据生成卡片
{exercisesData.map((exercise) => (
  <ExerciseCard key={exercise.id} {...exercise} />
))}

渐进增强：
为旧作业添加统一的布局包装器
逐步重构为响应式设计
保持原有功能的同时更新UI

优势
集中管理：所有作业元数据在单一文件中管理
维护简便：添加新作业只需更新JSON文件
一致性：通过卡片组件保持统一风格
可扩展：支持按标签分类、搜索等功能扩展

六、项目运行指南
环境要求
Node.js v18+

npm v9+

WakaTime API密钥（可选）

运行步骤
克隆仓库：
bash
git clone https://github.com/your-repo/frontend-showcase.git
cd frontend-showcase

安装依赖：
bash
npm install

配置环境变量：
创建.env.local文件：
env
# 可选，用于WakaTime统计
WAKATIME_API_KEY=your_api_key_here

运行开发服务器：
bash
npm run dev

访问项目：
打开浏览器访问 http://localhost:3000
生产部署

构建生产版本：
bash
npm run build

启动生产服务器：
bash
npm run start

Vercel部署（推荐）：
连接GitHub仓库
自动检测Next.js项目
添加WAKATIME_API_KEY环境变量
一键部署

项目自定义
更新作业数据：修改exercises.json

调整配色：修改组件中的颜色变量

添加新功能：在app/components创建新组件

集成新API：在lib目录添加服务函数

七、技术亮点总结
高级视觉设计：
深色主题与金色点缀
精致的卡片悬浮动画
响应式布局适配所有设备

现代化架构：
Next.js App Router
服务端组件数据获取
静态资源优化

无缝集成：
WakaTime API统计
第三方服务嵌入
环境安全配置

可维护结构：
组件化架构
数据与UI分离
清晰的目录结构

此项目不仅展示了Web前端开发的各种技术实践，其本身也是一个使用现代前端技术构建的示例，体现了从基础HTML/CSS到高级React开发的完整学习路径。

运行截图：
1、QAnything运行截图：
![QAnything运行截图](https://raw.githubusercontent.com/Mxq1-gif/my-web-work/master/images/QAnything.png)
2、WakaTime API集成与展示截图：
![WakaTime API集成截图](https://raw.githubusercontent.com/Mxq1-gif/my-web-work/master/images/wakatime集成1.png)
![wakatime API集成截图](https://raw.githubusercontent.com/Mxq1-gif/my-web-work/master/images/wakatime集成2.png)
![wakatime API集成截图](https://raw.githubusercontent.com/Mxq1-gif/my-web-work/master/images/wakatime集成3.png)
![wakatime API展示页面截图](https://raw.githubusercontent.com/Mxq1-gif/my-web-work/master/images/wakatime展示页面.png)
3、Next.js组织课程练习作业运行截图：
![Next.js组织课程练习截图](https://graw.githubusercontent.com/Mxq1-gif/my-web-work/master/images/练习导航页.png)
![Next.js具体练习运行截图](https://raw.githubusercontent.com/Mxq1-gif/my-web-work/master/images/具体练习运行界面.png)
