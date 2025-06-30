export default function MyAppHello() {
  return (
    <div className="p-8 rounded-2xl transition-all duration-300 hover:shadow-sm" style={{ 
      backgroundColor: '#f8fafb', 
      border: '1px solid #e7ecee',
      borderRadius: '1.5rem'
    }}>
      <div className="text-center">
        <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-light" style={{ backgroundColor: '#a7b2af' }}>
          👋
        </div>
        <p className="text-xl font-light" style={{ color: '#7a8a95' }}>
          来自自定义组件的问候
        </p>
        <p className="text-sm mt-4" style={{ color: '#8d9ca6' }}>
          这是一个简洁的问候组件，演示了组件间的通信与复用
        </p>
      </div>
    </div>
  );
} 