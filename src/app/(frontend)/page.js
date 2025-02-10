import Footer from '@/components/footer/footer'
import GalleryPage from '@/components/gallery/gallery'
import Hero from '@/components/hero/page'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

export default function HomePage() {
  return (
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <GalleryPage />
      <Footer />
    </div>
  )
}
