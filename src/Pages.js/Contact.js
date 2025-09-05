import React from 'react'
import Layout from '../Components/Layout'

const Contact = () => {
  return (
    <div className='bg-green-100 h-screen'>
      <Layout>
      <div className='mt-9 py-[90px] px-[250px]'>
      <p className='text-4xl font-bold underline '>Contact Me asdadasdas:</p>
      <div className='flex gap-1 justify-center '>
    <a href="https://github.com/anuragghimire8?tab=repositories"><img  className="lg:h-[150px] hover:scale-110 h-[255px] h-[25px]"src="/github.png"></img></a>
   
   <a href="https://www.facebook.com/ghimire.anurag/"><img  className=" lg:h-[150px] w-[255px] h-[25px] hover:scale-110" src="/facebook.png"></img></a>
   <a href="https://www.linkedin.com/in/anurag-ghimire-777296226/"><img  className="lg:h-[150px]  hover:scale-110 h-[255px] h-[25px]"src="/linkedin.png"></img></a>
   
  
    </div>
    <br></br>
    <span className='  text-2xl font-bold  '>Iam a <span className='text-4xl bg-gradient-to-r from-blue-500 to-transparent'>Frontend Developer</span></span>
    <p className='ml-[150px] text-xl flex gap-1 font-bold'><p>currently working as a intern in </p><span className=' text-5xl text-blue-800  '><p className='animate-bounce bg-gradient-to-r from-indigo-200 ...'>ONVIRO TECHNOLOGY.</p></span></p>
    
      </div>
      </Layout>
    </div>
  )
}

export default Contact
