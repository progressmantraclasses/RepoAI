import React from "react";
import { Brain, GraduationCap, Users } from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Ayush Sarkar",
      role: "Co-Founder",
      image:
      "https://static.wixstatic.com/media/a38d20_47cdcb0b05e94531b0264572308ba247~mv2.jpg/v1/fill/w_248,h_328,fp_0.58_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-09%20at%2013_42_edited.jpg",
      description: "Innovative approach with strong technical and design skills",
    },
    {
      name: "Jayant",
      role: "Co-Founder",
      image:
       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60",
      description: "Deep thinking and innovative mindset",
    },
    {
      name: "Himal Thapa",
      role: "Co-Founder",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60",
      description: "Strong analytical skills and inventive thinking",
    },
    {
      name: "Kavya Kapoor",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60",
      description: "Strong problem-solving abilities and coding enthusiast",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-600 via-purple-700 to-indigo-800 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Users className="h-16 w-16 text-purple-200 animate-bounce" />
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Our Team
              </h1>
              <p className="max-w-[900px] text-purple-200 text-lg md:text-xl">
                Meet the innovative minds behind Neuroxo Labs
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-purple-700 flex items-center gap-3">
                    <Brain className="h-8 w-8" />
                    The Driving Force
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Neuroxo Labs, our team is the driving force behind our innovative journey. We bring together a blend
                  of creativity, technical expertise, and a shared vision to revolutionize prosthetic technology.
                </p>
                <ul className="space-y-6">
                  {teamMembers.map((member) => (
                    <li
                      key={member.name}
                      className="transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg shadow-sm"
                    >
                      <strong className="text-purple-700 text-lg">{member.name}</strong>
                      <p className="text-gray-600 mt-2">{member.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side Images Grid */}
              <div className="grid grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className={`transform hover:-translate-y-2 transition-all duration-500 ${
                      teamMembers.length % 2 !== 0 && index === teamMembers.length - 1
                        ? "col-span-2 mx-auto w-3/4"
                        : ""
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl shadow-lg bg-white group">
                      <div className="relative h-64">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="font-bold">{member.name}</h3>
                            <p className="text-sm text-purple-200">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Institute Section */}
        <section className="py-20 bg-gradient-to-b from-[#241E41] to-[#0F0F15]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <GraduationCap className="h-16 w-16 text-purple-400 animate-pulse" />
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Institution</h2>
                <p className="text-xl text-purple-300">GL BAJAJ Institute of Technology & Management</p>
              </div>
              <div className="overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-4xl w-full">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop&q=60"
                  alt="GL BAJAJ Institute"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
