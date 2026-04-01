'use client'

import React from 'react'

/**
 * Placeholder for SearchBar component.
 * To be implemented in the next step with full filtering logic.
 */
export default function SearchBar() {
  return (
    <div className="relative group">
      <input 
        type="text" 
        placeholder="Tìm bài viết..." 
        disabled
        className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-sm text-gray-400 cursor-not-allowed"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  )
}
