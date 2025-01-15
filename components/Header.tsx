'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Simany Driving School</Link>
        <nav>
          <ul className="flex space-x-6">
            {['about', 'services', 'testimonials', 'contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item}`} 
                  onClick={(e) => scrollToSection(e, item)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

