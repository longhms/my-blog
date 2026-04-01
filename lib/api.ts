import { Post, Category } from '@/types'
import postsData from '@/data/posts.json'

/**
 * Simulates data fetching from an API or database.
 * Supports filtering by search query and category, as well as limiting results.
 */
export async function getPosts(options?: {
  limit?: number
  search?: string
  category?: string
}): Promise<Post[]> {
  // Simulate network latency for a realistic loading experience
  await new Promise(resolve => setTimeout(resolve, 500))
  
  let posts = postsData as Post[]
  
  // Apply Search Filter
  if (options?.search) {
    const query = options.search.toLowerCase()
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.excerpt.toLowerCase().includes(query)
    )
  }
  
  // Apply Category Filter
  if (options?.category) {
    posts = posts.filter(post => 
      post.category.slug.toLowerCase() === options.category?.toLowerCase()
    )
  }
  
  // Sort: most recent posts first
  posts = [...posts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  
  // Apply limit
  if (options?.limit) {
    posts = posts.slice(0, options.limit)
  }
  
  return posts
}

/**
 * Fetches a single post by its unique slug.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  await new Promise(resolve => setTimeout(resolve, 300))
  const post = postsData.find(p => p.slug === slug)
  return (post as Post) || null
}

/**
 * Returns all available posts without filtering.
 */
export async function getAllPosts(): Promise<Post[]> {
  return postsData as Post[]
}

/**
 * Extracts unique categories from the posts dataset.
 */
export async function getCategories(): Promise<Category[]> {
  const posts = postsData as Post[]
  const categoryMap = new Map<string, Category>()
  
  posts.forEach(post => {
    categoryMap.set(post.category.id, post.category)
  })
  
  return Array.from(categoryMap.values())
}
