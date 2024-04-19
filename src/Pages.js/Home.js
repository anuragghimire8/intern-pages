import React from 'react'

const Home = () => {
  return (
    <div className=''>
    <div className='animate-bounce' >
    <h1 className='flex justify-center items-center lg:mt-[300px] sm:mt-[400px] mt-[350px]'> <span className='mr-2 lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold'>Welcome</span><p className='lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-red-500 font-bold lg:mt-[150px] mt-[80px]'>to the My  Page</p> </h1>
    </div> 
    <div className='flex gap-1  justify-center'>
    <a href="https://github.com/anuragghimire8?tab=repositories"><img  className="hover:scale-110 lg:h-[35px] h-[25px]"src="/github.png"></img></a>
   
   <a href="https://www.facebook.com/ghimire.anurag/"><img  className=" hover:scale-110 lg:h-[35px] h-[25px]"src="/facebook.png"></img></a>
   <a href="https://www.linkedin.com/in/anurag-ghimire-777296226/"><img  className="hover:scale-110 lg:h-[35px] h-[25px]"src="/linkedin.png"></img></a>
  
    </div>
    </div>
  )
}

export default Home
