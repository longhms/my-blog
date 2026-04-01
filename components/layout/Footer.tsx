import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & Mission */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white text-sm font-bold">
              B
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              NextJS Blog
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Nền tảng học tập Next.js thực chiến. Xây dựng các ứng dụng Web hiện đại với hiệu suất tối ưu và trải nghiệm người dùng tuyệt vời.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholders */}
            {['Twitter', 'GitHub', 'LinkedIn'].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-primary-50 hover:text-primary-600 flex items-center justify-center transition-all"
                aria-label={platform}
              >
                <span className="sr-only">{platform}</span>
                <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-mono">Chủ đề</h4>
          <ul className="space-y-4">
            {['Lập trình Frontend', 'Tư duy thiết kế', 'Xây dựng Backend', 'Kinh nghiệm Dev'].map((category) => (
              <li key={category}>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary-600 hover:translate-x-1 inline-flex transition-all">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-mono">Hỗ trợ</h4>
          <ul className="space-y-4">
            {['Câu hỏi thường gặp', 'Chính sách bảo mật', 'Điều khoản sử dụng', 'Liên hệ chúng tôi'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary-600 hover:translate-x-1 inline-flex transition-all">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div className="col-span-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-mono">Trạng thái</h4>
          <div className="p-6 rounded-2xl bg-primary-50/50 border border-primary-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -m-4 w-20 h-20 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors"></div>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 mb-3 animate-pulse">
              System Online
            </span>
            <p className="text-sm font-semibold text-gray-900 mb-2">Đăng ký bản tin</p>
            <p className="text-[12px] text-gray-500 mb-4 leading-normal">Đừng bỏ lỡ bất kỳ bài viết chất lượng nào từ chúng tôi.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email của bạn..." 
                className="flex-1 bg-white px-3 py-2 rounded-lg text-xs border border-primary-100 outline-none focus:ring-2 focus:ring-primary-500/20 transition-all shadow-sm"
              />
              <button className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition shadow-md shadow-primary-500/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
        <p>© {currentYear} NextJS Blog Platform. All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-widest font-mono">
          <Link href="/privacy" className="hover:text-primary-600 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary-600 transition-colors">Terms</Link>
          <Link href="/sitemap" className="hover:text-primary-600 transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}
