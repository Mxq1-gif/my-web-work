export default function MyAppDemo() {
  return (
    <div className="p-8 rounded-2xl transition-all duration-300 hover:shadow-sm" style={{ 
      backgroundColor: '#fafbfa', 
      border: '1px solid #e4e8e4',
      borderRadius: '1.5rem'
    }}>
      <h2 className="text-2xl font-light mb-4" style={{ color: '#7a8a95' }}>
        组件演示卡片
      </h2>
      <p className="text-lg leading-relaxed" style={{ color: '#8d9ca6' }}>
        这是我的第一个 React 组件！展示了组件化开发的基本概念，
        通过简洁的代码结构实现可重用的界面元素。
      </p>
      <div className="mt-6 flex gap-3">
        <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#9eb4bb' }}>
          React
        </span>
        <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#c6cfc7' }}>
          组件化
        </span>
      </div>
    </div>
  );
} 