import { getPosts } from '@/lib/api'
import PostList from '@/components/blog/PostList'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Homepage featuring a stunning hero section, recent blog posts, 
 * and a clear call-to-action for users.
 */
export default async function HomePage() {
  // Fetch only the 3 most recent posts for the homepage
  const posts = await getPosts({ limit: 3 })
  
  return (
    <div className="space-y-24 py-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Decorative background elements for premium aesthetic */}
        <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-30"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
              🚀 Khám phá tương lai của Web
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
               Tư duy và Kỹ thuật <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">
                Next.js Hiện Đại
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              Nền tảng chia sẻ kiến thức chuyên sâu về Next.js, React và hệ sinh thái Frontend hiện đại. Giúp bạn xây dựng ứng dụng nhanh hơn, mượt hơn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="btn btn-primary px-8 py-4 text-base font-bold shadow-xl shadow-primary-500/25 active:scale-95 transition-transform">
                Xem các bài viết
              </Link>
              <Link href="/about" className="btn bg-white border border-gray-200 text-gray-700 px-8 py-4 text-base font-bold hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all">
                Về chúng tôi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Bài viết mới nhất</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Cập nhật những kỹ thuật mới nhất từ đội ngũ chuyên gia của chúng tôi.</p>
          </div>
          <Link href="/blog" className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-50 text-primary-600 font-bold hover:bg-primary-600 hover:text-white transition-all duration-300">
            Xem tất cả
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <PostList posts={posts} />
      </section>
      
      {/* Featured Callout Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden group">
          {/* Abstract background graphics */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Học Next.js qua các dự án <span className="text-primary-400 font-serif italic font-normal text-6xl">thực tế</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-12">
                Đừng chỉ dừng lại ở lý thuyết. Chúng tôi hướng dẫn bạn cách xây dựng, tối ưu và triển khai sản phẩm lên môi trường thực tế.
              </p>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white mb-1">10+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Khóa học</span>
                </div>
                <div className="flex flex-col border-l border-gray-800 pl-8">
                  <span className="text-4xl font-bold text-white mb-1">500+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Học viên</span>
                </div>
                <div className="flex flex-col border-l border-gray-800 pl-8">
                  <span className="text-4xl font-bold text-white mb-1">100+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Bài viết</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
                <p className="text-white text-lg font-medium italic mb-6 leading-relaxed">
                  "Đây là tài liệu chất lượng nhất về Next.js mà tôi từng đọc. Cách trình bày rất hệ thống và dễ hiểu."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">JD</div>
                  <div>
                    <p className="text-white font-bold">John Doe</p>
                    <p className="text-gray-500 text-sm">Senior Frontend Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
