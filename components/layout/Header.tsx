'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import { clsx } from 'clsx'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-transform active:scale-95"
        >
          <div className="relative w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white overflow-hidden shadow-lg group-hover:shadow-primary-500/25">
            {/* Logo image if exists, or stylized icon */}
            <span className="text-xl font-bold tracking-tight">B</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              NextJS Blog
            </span>
            <span className="text-xs text-secondary-500 font-medium">Learning Platform</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navigation />

        {/* Action Buttons (Right side) */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="btn btn-primary shadow-lg shadow-primary-500/20 active:translate-y-px transition-all"
          >
            Liên hệ ngay
          </Link>
          
          {/* Mobile menu toggle (Placeholder for layout stage) */}
          <button className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
