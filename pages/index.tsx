import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


export default function Home() {
  return (
    <div className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-navyBlue to-black '>
      <Head>
        <title>Elizabeth | Portfolio</title>
        <meta name="description" content="Elizabeth Portfolio" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      {/**Hero Section */}
      <Hero />
      {/**About Section */}
      <About />
      {/**Skills */}
      <Skills />
      {/**Work */}
      <Projects />
      {/**Contact */}
      <Contact />
    </div>
  )
}

