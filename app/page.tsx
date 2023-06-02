import { Header } from '@/components/header'
import { SloganSection } from '@/components/sloganSection'
import Image from 'next/image'

export default function Home() {
  return (
   <>
    <Header />

    <main className='w-full p-2 bg-gray-50' >
      
      <div className='mt-20' >
        <SloganSection />

      </div>
    </main>
   </>
  )
}
