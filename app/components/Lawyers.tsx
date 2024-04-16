import React from 'react'
import LawyerCard from './LawyerCard'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const Lawyers = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white text-[#2D4768] font-Almarai font-bold py-20 text-center">
    <h1 className="text-5xl mb-12">محامي مرخص</h1>
    <SearchBar/>
    </div>
    <div className='grid gap-4 grid-cols-3 grid-rows-3'>
    <LawyerCard name={'عبد العزيز عبد الرحمن'} position={'مستشار قانوني'} rating={'4.56 (35 مراجعة)'}/>
    <LawyerCard name={'عبد العزيز عبد الرحمن'} position={'مستشار قانوني'} rating={'4.56 (35 مراجعة)'}/>
    <LawyerCard name={'عبد العزيز عبد الرحمن'} position={'مستشار قانوني'} rating={'4.56 (35 مراجعة)'}/>
    <LawyerCard name={'عبد العزيز عبد الرحمن'} position={'مستشار قانوني'} rating={'4.56 (35 مراجعة)'}/>
    <LawyerCard name={'عبد العزيز عبد الرحمن'} position={'مستشار قانوني'} rating={'4.56 (35 مراجعة)'}/>
    <LawyerCard name={'عبد العزيز عبد الرحمن'} position={'مستشار قانوني'} rating={'4.56 (35 مراجعة)'}/>
    </div>
</>
  )
}

export default Lawyers