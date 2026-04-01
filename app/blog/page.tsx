import { getPosts, getCategories } from '@/lib/api'
import PostList from '@/components/blog/PostList'
import SearchBar from '@/components/blog/SearchBar'
import Link from 'next/link'
import { clsx } from 'clsx'

interface BlogPageProps {
  searchParams: {
    q?: string
    category?: string
  }
}

/**
 * Main Blog Listing Page with support for category filtering and search.
 * Utilizes Server Side logic for fetching and initial rendering.
 */
export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Resolve searchParams before using them to comply with Next.js 15 requirements
  const { q, category } = await searchParams;

  const posts = await getPosts({
    search: q,
    category: category,
  })
  
  const categories = await getCategories()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest mb-6">
          Kho tài nguyên kiến thức
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Blog & Insight</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Nơi cập nhật thông tin mới nhất và hướng dẫn chuyên sâu giúp bạn làm chủ Next.js và hệ sinh thái Web.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Sticky Sidebar for Filters */}
        <aside className="lg:w-1/4 w-full lg:sticky lg:top-24 space-y-12">
          {/* Search Module */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 font-mono">Tìm kiếm nhanh</h3>
            <SearchBar />
          </div>

          {/* Category Filter Module */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 font-mono">Danh mục bài viết</h3>
            <div className="flex flex-wrap lg:flex-col gap-2.5">
               <Link 
                href="/blog" 
                className={clsx(
                  "px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 border",
                  !category 
                    ? "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/25 ring-4 ring-primary-50" 
                    : "bg-gray-50 text-gray-600 border-transparent hover:bg-white hover:border-primary-200 hover:text-primary-600"
                )}
              >
                Tất cả chủ đề
              </Link>
              {categories.map((cat) => (
                <Link 
                  key={cat.id}
                  href={`/blog?category=${cat.slug}${q ? `&q=${q}` : ''}`}
                  className={clsx(
                    "px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 border",
                    category === cat.slug 
                      ? "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/25 ring-4 ring-primary-50" 
                      : "bg-gray-50 text-gray-600 border-transparent hover:bg-white hover:border-primary-200 hover:text-primary-600 shadow-sm"
                  )}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Subscribe Widget (Visual Polish) */}
          <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-primary-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Newsletter</p>
                <h4 className="text-xl font-bold mb-4 leading-tight">Đăng ký nhận thông báo mới nhất</h4>
                <button className="w-full py-3 bg-white text-gray-900 rounded-2xl font-bold text-sm hover:bg-primary-50 transition-colors">
                  Đăng ký ngay
                </button>
             </div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
          </div>
        </aside>

        {/* Post Grid Section */}
        <div className="lg:w-3/4 w-full">
           <div className="mb-10 flex items-center justify-between">
              <div className="text-sm font-medium text-gray-500">
                Hiển thị <span className="text-gray-900 font-bold">{posts.length}</span> bài viết
              </div>
              {/* Optional sorting/view toggle could go here */}
           </div>
           
           <PostList posts={posts} />
        </div>
      </div>
    </div>
  )
}
