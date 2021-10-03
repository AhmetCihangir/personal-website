import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Introduce from '../components/Introduce/Introduce'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-ghostWhite">
      <div className="h-16" />
      <Header />
      <Introduce />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
