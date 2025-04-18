"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function TeamSection() {
  const team = [
    {
      name: "Dr. Anil Sharma",
      role: "Chief Ophthalmologist",
      bio: "Dr. Anil Sharma has over 15 years of experience in ophthalmology with a specialization in LASIK and cataract surgery.",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Williams",
    },
    {
      name: "Dr. Arvind Patel",
      role: "Pediatric Specialist",
      bio: "Dr. Arvind Patel focuses on children's eye health and has pioneered several techniques for early vision problem detection.",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Chen",
    },
    {
      name: "Dr. Pradeep Srinivasan",
      role: "Retina Specialist",
      bio: "Dr. Pradeep Srinivasan is an expert in retinal diseases and treatments, with numerous published research papers.",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Rodriguez",
    },
    {
      name: "Dr. Pooja Desai",
      role: "Optometrist",
      bio: "Dr. Pooja Desai specializes in comprehensive eye exams and fitting patients with the perfect corrective lenses.",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Wilson",
    },
  ]

  return (
    <section className="py-20 bg-blue-50" id="teams">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Specialists</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of experienced eye care professionals is dedicated to providing you with the highest quality of
            care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg h-full">
                <div className="relative overflow-hidden group">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

