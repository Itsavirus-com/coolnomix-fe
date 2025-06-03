import React from 'react'

const DotsLoading = () => {
  return (
    <div className='flex items-center justify-center space-x-1.5'>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className='animate-pulsing-dot bg-brand-muted h-2 w-2 rounded-full'
          style={{ animationDelay: `calc(${index} * 0.2s)` }}
        />
      ))}
    </div>
  )
}

export default DotsLoading
