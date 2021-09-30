import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../../styles/Home.module.css'
import Introduce from '../components/Introduce/Introduce'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Introduce />
      <Skills />
      <Projects />
    </div>
  )
}
