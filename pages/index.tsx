import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Head>
    <title>Hassan Shan</title>
   </Head>
   <main>
    <div>
      {/* <h1 className="text-4xl text-blue-900 font-bodyFont">Hello</h1> */}
      <Navbar/>
    </div>
   </main>
   </>
  )
}
