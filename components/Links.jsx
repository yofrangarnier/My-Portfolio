import React from 'react'

const Links = () => {
  return (
    <div className='flex items-center justify-between my-18 mt-1'>
      <div className='grid gap-5 sm:my-4 shadow-lg border-dashed border-2 border rounded-lg shadow-purple-400'>
      <a href="https://www.linkedin.com/in/yofran-garnier-1059a0241/" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="70px"/>
      </a>
      </div>
      
      <div className='grid gap-5 sm:my-4 shadow-lg border-dashed border-2 border rounded-lg shadow-purple-400'>
      <a href="https://github.com/yofrangarnier" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="70px"/>
      </a>
      </div>
    </div>
  )
}

export default Links