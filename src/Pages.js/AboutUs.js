import React from 'react'
import Layout from '../Components/Layout'

const AboutUs = () => {
  const projects=[
   
   { 
    
          name:"HomeStore",
          developedBy:"MERN STACK"  ,
          link:"https://github.com/anuragghimire8/MERN-Ecommerce-HomeStore"  ,
          image:"ecommerce.png"  

    }, 
    {
      
           name:"Anurag's Blogs",
           developedBy:"MERN STACK",
           link:"https://blogs-mern-hezf.onrender.com/",
           image:"mern.png"
         
           
    },
    {

    
    
        name:"movie",
        developedBy:"reduxToolkit",
        image:"movie.png",
        link:"https://github.com/anuragghimire8/Moviewebsite-React-ReduxToolkit"
      },

  
  ]

  return (
    <div className='bg-green-100 h-screen'>
    <Layout>
    <div>
    
   
    <div className='grid grid-cols-4'>
    <div className='bg-green-100 lg:p-[85px] sm:py-[80px] p-[80px]'>
    <div className='rounded-full w-[100px] lg:mt-5   '><img className='rounded-full' src="/anurag.jpg"/> 
    </div>
    <p className='font-bold text-2xl'>Anurag Ghimire Chelsea</p>
   
    </div>
   <div className=' bg-green-100 col-span-3 py-[85px]'>
   <div className=" mt-[100px] px-5">
   <span className=' text-2xl font-bold  '>Iam a <span className='text-4xl bg-gradient-to-r from-blue-500 to-transparent'>Frontend Developer</span></span>
   <p className='ml-[150px] text-xl flex gap-1 font-bold'><p>currently working as a intern in </p><span className=' text-5xl text-blue-800  '><p className='animate-bounce bg-gradient-to-r from-indigo-200 ...'>ONVIRO TECHNOLOGY.</p></span></p>
   
   </div>
   </div>
   
    </div>
    <div>
  </div>
  <div className=' '>
    <div className='text-4xl font-extrabold tracking-wide text-black'>These are the Projects that i have done based on my Skills</div>
    <div className='flex gap-[250px] justify-center'>
      {
        projects.map((project,index)=>{
            return(
                <div className='border border-xl'>
                <div className=''>
                  <a href={project.link}>
                  <img className='h-[100px]' src={project.image}/><p className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-transparent'>Name:{project.name}<br></br>
                  developedBy:{project.developedBy}</p></a>
                  </div>
                </div>
            )
        })
      }
    </div>
  </div>
  </div>
    </Layout>
    </div>
  )
}

export default AboutUs
