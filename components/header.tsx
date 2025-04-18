"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Phone } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#10275d]" : "bg-[#10275d]",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/newlogo[1].png" // ← replace with your actual logo path
              alt="NEO VISION Logo"
              className="h-10 w-auto"
            />
            {/* <span className="font-bold text-xl text-gray-800">NEO VISION</span> */}
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white hover:text-orange-400 transition-colors">About</Link>
            <Link href="#services" className="text-white hover:text-orange-400 transition-colors">Services</Link>
            <Link href="#appointment" className="text-white hover:text-orange-400 transition-colors">Appointment</Link>
            <Link href="#testimonials" className="text-white hover:text-orange-400 transition-colors">Testimonials</Link>
            <Link href="#contact" className="text-white hover:text-orange-400 transition-colors">Contact</Link>
            <a href="tel:+918431145179">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white" />
                <span>+91 97402 27263</span>
              </Button>
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#appointment"
                className="text-gray-700 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Appointment
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a href="tel:+918431145179">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-white" />
                  <span>+91 97402 27263</span>
                </Button>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

