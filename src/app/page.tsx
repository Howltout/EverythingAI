/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
  
'use client'

import Image from 'next/image'
import { ChevronRight, ThumbsUp, Rocket, Layers, Eye, Users, Shield, ChartBar, Settings, Cpu, Award, Heart, Globe } from 'lucide-react'
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { motion, useScroll, useSpring } from 'framer-motion'

const values = [
  { icon: <ThumbsUp className="h-10 w-10" />, title: 'Customer Success', description: "'We prioritize our customers' success above all else, ensuring they achieve their hiring goals efficiently.' "},
  { icon: <Rocket className="h-10 w-10" />, title: 'Innovation', description: "'We constantly push the boundaries of what's possible in recruitment technology.' "},
  { icon: <Layers className="h-10 w-10" />, title: 'Simplicity', description: "'We believe in making complex processes simple and user-friendly.' "},
  { icon: <Eye className="h-10 w-10" />, title: 'Transparency', description: "'We maintain open and honest communication with our clients and within our team.' "},
  { icon: <Users className="h-10 w-10" />, title: 'Inclusivity', description: "'We champion diversity and ensure our tools promote fair and unbiased hiring.' "},
  { icon: <Shield className="h-10 w-10" />, title: 'Security', description: "'We prioritize the protection of our clients' data and maintain the highest security standards.' "},
  { icon: <Heart className="h-10 w-10" />, title: 'Empathy', description: "We understand the challenges of hiring and strive to create compassionate solutions." },
  { icon: <Globe className="h-10 w-10" />, title: 'Global Impact', description: "We aim to transform recruitment practices worldwide, fostering better workplaces." },
]

const journey = [
  { date: 'Aug 2021', title: 'IDC Names Arctic Wolf a Leader', icon: <ChartBar />, description: 'Our journey began with a vision to revolutionize the hiring process.' },
  { date: 'Feb 2022', title: 'Arctic Wolf Incident Launch', icon: <Settings />, description: 'We introduced our groundbreaking AI-powered assessment tools.' },
  { date: 'Oct 2022', title: 'Arctic Wolf Expands to ANZ', icon: <Cpu />, description: 'Our solutions went global, entering key European markets.' },
  { date: 'May 2023', title: 'Arctic Wolf on CNBC Disruptor 50', icon: <Award />, description: 'Recognition of our innovative approach to recruitment technology.' },
]

// Add this experts array before your component
const experts = [
  { name: "Sarah Johnson", role: "Chief Technology Officer" },
  { name: "Michael Chen", role: "Head of AI Research" },
  { name: "Emily Rodriguez", role: "Lead Product Designer" },
  { name: "David Kim", role: "Senior Data Scientist" },
  { name: "Lisa Thompson", role: "UX Research Lead" },
  { name: "James Wilson", role: "Engineering Manager" },
  { name: "Anna Martinez", role: "Cloud Architecture Lead" },
  { name: "Robert Lee", role: "Security Specialist" },
  { name: "Sophie Turner", role: "Frontend Developer" },
  { name: "Marcus Brown", role: "Backend Engineer" },
  { name: "Elena Costa", role: "ML Engineer" },
  { name: "Alex Wong", role: "DevOps Lead" },
  { name: "Rachel Green", role: "UI/UX Designer" },
  { name: "Chris Taylor", role: "System Architect" },
  { name: "Maria Garcia", role: "Data Engineer" },
  { name: "Tom Anderson", role: "Quality Assurance Lead" }
];

const positions = [
  { left: '50%', top: '5%' },     // Top center
  { left: '35%', top: '20%' },    // Second row left
  { left: '65%', top: '20%' },    // Second row right
  { left: '20%', top: '35%' },    // Third row far left
  { left: '50%', top: '35%' },    // Third row center
  { left: '80%', top: '35%' },    // Third row far right
  { left: '10%', top: '50%' },    // Fourth row leftmost
  { left: '35%', top: '50%' },    // Fourth row left-center
  { left: '65%', top: '50%' },    // Fourth row right-center
  { left: '90%', top: '50%' },    // Fourth row rightmost
  { left: '20%', top: '65%' },    // Fifth row left
  { left: '50%', top: '65%' },    // Fifth row center
  { left: '80%', top: '65%' },    // Fifth row right
  { left: '35%', top: '80%' },    // Bottom row left
  { left: '65%', top: '80%' },    // Bottom row right
  { left: '50%', top: '95%' },    // Bottom center
];

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-zinc-900">
      <header role="banner" className="sticky inset-x-0 w-full top-0 z-50 border-b backdrop-blur bg-white">
        <nav className="flex items-center w-full h-[54px] md:container justify-between px-6 md:px-8">
          {/* Convert HTML comments to JSX comments */}
          {/* Logo Section */}
          <div className="flex space-x-8">
            <a className="font-bold text-xl" href="/">
              <div className="relative flex space-x-2 h-10 md:w-fit items-center justify-center text-black -ml-2">
                {/* Light Mode Logo */}
                <img alt="logo" 
                     className="dark:hidden block h-8 w-8" 
                     src="/logo.webp" 
                     width="40" 
                     height="40" />
                <span className="lg:hidden font-bold">Everything Talent</span>
                <span className="hidden font-bold lg:inline-block">Everything Talent</span>
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex gap-8 font-medium items-center">
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Home</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>About</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Use Cases</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Pricing</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Resources</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Blog</span>
            </li>
            <li className="font-regular text-gray-600 text-sm hover:text-gray-800">
              <span>Support</span>
            </li>
          </ul>

          {/* Right Side Actions */}
          <div className="flex gap-5">
            {/* Login Button */}
            <div className="ml-6 hidden lg:block">
              <a className="w-full" href="/login">
                <button className="inline-flex items-center justify-center text-sm font-medium bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 hover:opacity-90 text-white h-10 px-4 py-2 rounded-lg group w-full transition-all duration-300 hover:scale-105">
                  Login
                  <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu hover:cursor-pointer lg:hidden -mr-2">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </div>
        </nav>
      </header>

      {/* Add ref to main content for animations */}
      <main role="main" className="bg-gradient-to-b from-white via-purple-50/30 to-yellow-50/30">
        {/* Hero Section - updated styling and layout */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50/50 via-white to-yellow-50/50 py-20 md:py-32">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <motion.div
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-purple-100/40 via-blue-100/40 to-yellow-100/40 rounded-full blur-3xl"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-yellow-100/40 via-purple-100/40 to-blue-100/40 rounded-full blur-3xl"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >
                <h1 className="text-[3.5rem] md:text-[5rem] font-bold leading-tight tracking-tight mb-8">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-500 bg-clip-text text-transparent">
                    Revolutionizing
                    <br />
                    Talent Acquisition
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
                  Everything Talent simplifies hiring with AI-driven assessments and a free ATS, empowering businesses to find the perfect match effortlessly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-500 hover:opacity-90 text-white group px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-purple-500 hover:border-yellow-500 hover:text-yellow-600 px-8 py-6 text-lg transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Card className="relative bg-background/80 backdrop-blur-sm border-none shadow-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <Image
                        src="/placeholder_landscape.svg"
                        alt="AI-Powered Hiring"
                        width={200}
                        height={200}
                        className="rounded-lg object-cover w-full h-full"
                      />
                      <Image
                        src="/placeholder_landscape.svg"
                        alt="Talent Matching"
                        width={200}
                        height={200}
                        className="rounded-lg object-cover w-full h-full"
                      />
                      <Image
                        src="/placeholder_landscape.svg"
                        alt="Diverse Workforce"
                        width={200}
                        height={200}
                        className="rounded-lg object-cover w-full h-full"
                      />
                      <Image
                        src="/placeholder_landscape.svg"
                        alt="Data-Driven Insights"
                        width={200}
                        height={200}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <style jsx>{`
            .bg-grid-pattern {
              background-image: 
                linear-gradient(to right, rgba(147, 51, 234, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(147, 51, 234, 0.05) 1px, transparent 1px);
              background-size: 50px 50px;
            }

            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
              100% { transform: translateY(0px); }
            }

            .floating {
              animation: float 6s ease-in-out infinite;
            }

            .gradient-text {
              background: linear-gradient(to right, #9333ea, #3b82f6, #eab308);
              -webkit-background-clip: text;
              color: transparent;
            }
            
            .gradient-border {
              border-image: linear-gradient(to right, #9333ea, #3b82f6, #eab308) 1;
            }
            
            .gradient-hover {
              background-size: 200% 100%;
              background-position: 100% 0;
              transition: background-position .5s;
            }
            
            .gradient-hover:hover {
              background-position: 0 0;
            }
          `}</style>
        </section>

        <section id="our-story" className="py-14 md:py-24 bg-gradient-to-b from-white/80 via-blue-50/30 to-violet-50/30">
          <div className="container px-4 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-zinc-900">Our Story</h2>
              <p className="text-xl text-zinc-600 mb-4 max-w-2xl mx-auto">
                We not only make the world's most comfortable hammocks, but through training and sustainable job creation, we empower our weavers and their families to break the cycle of poverty and build a brighter future.
              </p>
            </motion.div>
            {['The Journey to Transform Recruitment', 'Combining Innovation with Efficiency', 'Democratizing Recruitment Tools'].map((title, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true }}
              >
                <Card className="mt-12 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      {/* Content Section */}
                      <div className={`${index === 1 ? 'order-2' : 'order-1'}`}>
                        <CardTitle className="text-2xl font-bold mb-4">{title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed text-muted-foreground">
                          Our journey began with a simple yet powerful idea: to make hiring easier, fairer, and more efficient for companies of all sizes. We've combined cutting-edge AI technology with user-friendly interfaces to create a platform that transforms the recruitment process.
                        </CardDescription>
                      </div>
                      {/* Image Section */}
                      <div className={`${index === 1 ? 'order-1' : 'order-2'}`}>
                        <Image
                          src="/placeholder_landscape.svg"
                          width={400}
                          height={300}
                          alt={title}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="our-values" className="py-20 bg-gradient-to-br from-purple-50/30 via-white to-yellow-50/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-zinc-900">Our Core Values</h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                At Everything Talent, our values are the foundation of our culture and guide every decision we make.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300 border-purple-100/50">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        {value.icon}
                      </div>
                      <CardTitle className="text-center text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-zinc-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Add commitment card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <Card className="bg-gradient-to-br from-purple-600 via-blue-600 to-yellow-500 text-white p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-4">Our Commitment to Excellence</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    We're dedicated to revolutionizing the recruitment industry through our innovative solutions and unwavering commitment to our values.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mt-6">
                    <Image
                      src="/placeholder_landscape.svg"
                      width={400}
                      height={300}
                      alt="Futuristic Business Environment"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Add Learn More button */}
            <div className="mt-16 text-center">
              <Button size="lg" className="group">
                Learn More About Our Approach
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </Button>
            </div>
          </div>
        </section>

        <section id="our-experts" className="py-16 bg-gradient-to-br from-white via-purple-50/20 to-yellow-50/20">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Our Expert Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals behind our success
              </p>
            </motion.div>

            <div className="flex flex-col gap-16">
              {/* First Row - 5 images */}
              <div className="flex justify-center gap-16">
                {experts.slice(0, 5).map((expert, index) => (
                  <motion.div
                    key={`top-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                    className="w-[120px]"
                  >
                    <div className="relative aspect-square rounded-full overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src="/dummy-man-570x570-1.png"
                        alt={expert.name}
                        width={240}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <p className="text-white text-sm text-center px-2">
                          {expert.name}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Middle Row - 6 images, extended */}
              <div className="flex justify-center gap-16 -mx-24">
                {experts.slice(5, 11).map((expert, index) => (
                  <motion.div
                    key={`middle-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: (index + 5) * 0.1
                    }}
                    className="w-[120px]"
                  >
                    <div className="relative aspect-square rounded-full overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src="/dummy-man-570x570-1.png"
                        alt={expert.name}
                        width={240}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <p className="text-white text-sm text-center px-2">
                          {expert.name}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Row - 5 images */}
              <div className="flex justify-center gap-16">
                {experts.slice(11, 16).map((expert, index) => (
                  <motion.div
                    key={`bottom-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: (index + 11) * 0.1
                    }}
                    className="w-[120px]"
                  >
                    <div className="relative aspect-square rounded-full overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src="/dummy-man-570x570-1.png"
                        alt={expert.name}
                        width={240}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <p className="text-white text-sm text-center px-2">
                          {expert.name}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="py-12 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <Card className="max-w-3xl mx-auto bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold tracking-tighter mb-3 text-left">
                    Our Culture
                  </CardTitle>
                  <CardDescription className="text-base text-zinc-600 text-left">
                    We believe in fostering a culture of innovation, collaboration, and continuous learning. Our team members are empowered to think creatively, take initiative, and make a real impact in transforming the recruitment landscape.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.2
                      }}
                    >
                      <h3 className="text-lg font-semibold mb-2 text-left">
                        Innovation at Our Core
                      </h3>
                      <p className="text-sm text-zinc-600 text-left">
                        We encourage creative thinking and embrace new technologies.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.4
                      }}
                    >
                      <h3 className="text-lg font-semibold mb-2 text-left">
                        Growth Mindset
                      </h3>
                      <p className="text-sm text-zinc-600 text-left">
                        We invest in our team's professional development and celebrate continuous learning.
                      </p>
                    </motion.div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="text-left text-sm">
                    <span>Contact Us</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Journey section - updated timeline styling */}
        <section id="our-journey" className="relative bg-gradient-to-b from-blue-50/20 to-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="w-full md:container px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="flex justify-center md:container px-4 sm:px-6 mb-6 md:mb-[10rem]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-zinc-900">Our Journey</h2>
                <p className="text-xl text-zinc-600 mb-4 max-w-[1400px] mx-auto">
                  Since our founding in 2021, Arctic Wolf has risen to the rank of market leader in security operations, adding thousands of employees and customers, as well as a trophy case of awards along the way.
                </p>
              </motion.div>
            </div>
            <div className="relative mx-auto flex">
              <div className="flex flex-col justify-between gap-0 w-full">
                {journey.map((event, index) => (
                  <div key={index} className={`relative -mt-20 flex justify-start h-fit w-1/2 flex-col ${index % 2 === 0 ? '' : 'self-end'}`}>
                    <div className={`sticky flex flex-col mt-3 border border-[#3577f39a] py-[10px] md:flex-row z-10 items-end top-60 ${index % 2 === 0 ? 'self-end rotate-180' : 'self-start'} bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff]`}>
                      <div className="h-14 absolute w-14 -left-[15%] -top-[18px] flex self-end rounded-full bg-sky-500 items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-black border border-[rgb(14,165,233)] flex items-center justify-center">
                          <span className="text-white">{event.icon}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`relative flex -mt-6 h-fit md:w-[90%] lg:w-[80%] ${index % 2 === 0 ? 'justify-end' : 'self-end'} z-20`}>
                      <div className="relative border border-purple-300 py-4 px-8 max-w-[24rem] bg-gradient-to-br from-purple-900 via-blue-800 to-yellow-700 transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(147,51,234,0.5)] rounded-lg">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 font-bold text-xl">
                          {event.date}
                        </p>
                        <div>
                          <Image
                            src="/placeholder_landscape.svg"
                            width={317}
                            height={212}
                            alt={event.title}
                            className="rounded-lg border max-h-[212px] w-[317px] h-full"
                          />
                        </div>
                        <h3 className="text-[16px] flex gap-2 items-center font-bold text-white mt-2 opacity-100">
                          {event.title}
                          <ChevronRight />
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ height: 'calc(100% + 176px)' }} className="absolute -mt-40 left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-4 h-[calc(100%+10rem)] bg-gradient-to-r from-purple-100 via-blue-300 to-yellow-200">
                <div style={{ height: '0px', opacity: 1 }} className="absolute inset-x-0 top-8 w-4 bg-gradient-to-t from-sky-500 via-sky-400 to-transparent from-[0%] via-[10%] rounded-sm"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Create footer */}
      <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-black border-t py-12">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.webp"
                  alt="Everything Talent Logo"
                  width={40}
                  height={40}
                  className="dark:invert"
                />
                <span className="font-bold text-xl text-white">Everything Talent</span>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                {['Blogs', 'Success Stories', 'Case Studies', 'Whitepapers', 'FAQs', 'Hiring Guides', 'Support']
                  .map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-gray-200">
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Get Started</h3>
              <ul className="space-y-2">
                {['Pricing', 'Hiring Solutions', 'Funded Startups', 'Free Trial', 'Contact Support', 'Request Demo', 'Trust']
                  .map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-gray-200">
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'CCPA Compliance']
                  .map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-gray-200">
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div>
            <Image
              src="/skyline.webp"
              alt="San Francisco skyline"
              width={1000}
              height={60}
              className="mb-4 md:mb-0 dark:invert mx-auto"
            />
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2024 Everything Talent Labs, LLC. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Add a floating scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-500 z-50 origin-left"
        style={{ scaleX }}
      />
    </div>
  )
}

// Separate component for team member card
const TeamMember = ({ expert }: { expert: { name: string; role: string } }) => (
  <div className="group">
    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
      <Image
        src="/dummy-man-570x570-1.png"
        alt={expert.name}
        width={200}
        height={200}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-black/60 flex items-center justify-center"
      >
        <div className="text-center p-1">
          <p className="text-white text-xs font-medium line-clamp-1">{expert.name}</p>
          <p className="text-gray-200 text-[10px] line-clamp-1">{expert.role}</p>
        </div>
      </motion.div>
    </div>
  </div>
);
