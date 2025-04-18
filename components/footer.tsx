import Link from "next/link"
import { Eye, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    services: [
      { name: "Eye Scanning", href: "#services" },
      { name: "LASIK Surgery", href: "#services" },
      { name: "PRK", href: "#services" },
      { name: "Pediatric Eye Care", href: "#services" },
      { name: "Prescription Eyewear", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#teams" },
      { name: "Appointment", href: "#appointment" },
      { name: "Contact", href: "#contact" },
    ],
  }

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">

              <img
                src="/newlogo[1].png" // ← replace with your actual logo path
                alt="NEO VISION Logo"
                className="h-10 w-auto"
              />
              {/* <span className="font-bold text-xl text-gray-800">NEO VISION</span> */}

            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              NEO VISION EYE CENTER is committed to providing exceptional eye care services using cutting-edge
              technology and a patient-centered approach.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:space-x-4 items-center text-sm text-gray-400">
            <p>&copy; {currentYear}All rights reserved to<span className="text-white font-normal"> NEO VISION EYE CENTER.</span> Designed by <span className="text-white font-medium">IUKMICRO</span></p>

          </div>

        </div>
      </div>
    </footer>
  )
}

