import React from 'react'

const App = () => {
  
  function showProfile(){
    alert("Hi, My name is Nirupama Majhi")
  }

  const skills=['HTML5','CSS3','JS','REACT','Tailwind','Python']
  function showSkills(){
    console.log("Skills are:")
    for(let i=0;i<skills.length;i++){
      console.log(skills[i])
    }
  }

  const projects=[
    {
      title:"Trendiva-A Fashion Website",
      link:"https://trendiva-website.netlify.app/"
    },
    {
      title:"Hacking-Simulation",
      link:"https://nirupama-07.github.io/hacking-simulation/"
    },
    {
      title:"NewsHub",
      link:"https://newshub-live-news.netlify.app/"
    },
    {
      title:"Student-Management Application",
      link:"https://student-managemnt.onrender.com/"
    }
  ]
  function showProjects(){
    console.log("Some of my projects are:")
    for(let i=0;i<projects.length;i++){
      console.log(projects[i])
    }
  }


  const contacts=[
    "Phone:9348200857",
    "email:nirupamamajhi549@gmail.com",
    "linkedin:Nirupama Majhi",
    "Github:Nirupama-07"
  ]
  function showContacts(){
    console.log("You can contact me through the following:-")
    for(let i=0;i<contacts.length;i++){
      console.log(contacts[i])
    }
  }
  return (
    <div>
      <h1 className='text-center text-3xl mt-8 pt-2 pb-2 text-white bg-cyan-950'>Student Dashboard</h1>
      <div className='flex gap-20'>
        <div>
          <img src="https://img.freepik.com/premium-photo/female-developer-background_665280-9650.jpg" className='w-[40vw] h-[80vh]' alt="" />
          <h1 className='ml-46 text-2xl font-bold'>Nirupama Majhi</h1>
        </div>

        <div className='mt-36 flex flex-col gap-9'>
          <div className='flex gap-44'>
              <button className='pt-5 pb-5 pl-10 pr-10 rounded-2xl text-2xl cursor-pointer bg-blue-700 text-cyan-100'onClick={showProfile}>Show Profile</button>
              <button className='pt-5 pb-5 pl-10 pr-10 rounded-2xl text-2xl cursor-pointer bg-blue-700 text-cyan-100' onClick={showSkills}>Show Skills</button>
          </div>
          <div className='flex gap-40'>
              <button className='pt-5 pb-5 pl-10 pr-10 rounded-2xl text-2xl cursor-pointer bg-blue-700 text-cyan-100' onClick={showProjects}>Show Projects</button>
              <button className='pt-5 pb-5 pl-10 pr-10 rounded-2xl text-2xl cursor-pointer bg-blue-700 text-cyan-100' onClick={showContacts}>Show Contacts</button>
          </div>
          
          
        </div>
        
      </div>
      
      
    </div>
  )
}

export default App
