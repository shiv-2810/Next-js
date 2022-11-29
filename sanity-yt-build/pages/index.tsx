import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import mediumIcon from '../assets/kisspng-medium-logo-publishing-blog-i-5abb6adccf05a3.689953461522232028848.png'
const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-yellow-400  py-10 lg:py-0 rounded-md'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-4'>Medium</span> is a place to write, read and connect</h1>
          <h2>IT'S EASY AND FREE TO POST YOUR THINKING ON ANY TOPIC AND CONNECT WIH MILLION OF READERS.</h2>
        </div>
        <Image className='hidden md:inline-flex h-44 w-44 lg:h-80 lg:w-80 mx-8' src={mediumIcon} alt='mediumIcon' />
      </div>
      
    </div>
  )
}

export default Home
