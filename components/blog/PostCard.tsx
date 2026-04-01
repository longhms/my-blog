'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'
import { Post } from '@/types'
import { Clock, ArrowUpRight } from 'lucide-react'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="card p-0 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 border border-transparent hover:border-primary-100 group">
        {/* Cover Image Container */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          {/* Category Badge overlay */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-primary-600 uppercase tracking-wider shadow-sm border border-white/50">
              {post.category.name}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-7 flex flex-col flex-grow">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
            <time className="flex items-center gap-1.5 capitalize">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
              {format(new Date(post.publishedAt), 'dd MMM yyyy', { locale: vi })}
            </time>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime} phút đọc
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & CTA footer */}
          <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-gray-50">
                <Image 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-semibold text-gray-700">{post.author.name}</span>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
