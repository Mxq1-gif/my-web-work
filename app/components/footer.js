// src/components/Footer.js
"use client"; // 声明为客户端组件，因为使用了 useState 和 useEffect

import React, { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [wakatimeText, setWakatimeText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWakatimeStats = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // 使用正确的WakaTime API端点（需替换为实际API URL）
        const apiUrl = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';
        // 替换为您的实际API密钥
        const apiKey = 'waka_c8130531-fdc0-49f0-9387-3b3a3cd7ec43';
        
        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': `Basic ${btoa(apiKey + ':')}`
          }
        });

        if (!response.ok) {
          throw new Error(`API请求失败: ${response.status}`);
        }

        const data = await response.json();
        // 添加数据结构检查
        if (!data || !data.data || typeof data.data.total_seconds === 'undefined') {
          console.error('WakaTime响应结构异常:', data);
          setWakatimeText('数据格式错误');
          return;
        }
        const totalHours = (data.data.total_seconds / 3600).toFixed(1);
        setWakatimeText(`本周编码时长: ${totalHours}小时`);
      } catch (err) {
        console.error('获取WakaTime数据失败:', err);
        // 显示更详细的错误信息
        setError(`(${err.message})`);
        setWakatimeText('数据加载失败');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWakatimeStats();
  }, []);

  return (
    <footer className="bg-slate-800 text-slate-300 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} 《Web前端开发》课程练习平台. 保留所有权利.
        </p>
        <p className="text-xs mt-2">使用 Next.js 和 Tailwind CSS 构建</p>
        <p className="text-xs mt-2">
          Wakatime :{" "}
          {isLoading ? "Loading..." : error ? `Error: ${error}` : wakatimeText}
        </p>

      </div>
    </footer>
  );
}