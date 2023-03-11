import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col mx-auto my-5 items-center justify-center w-full py-10'>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl font-bold shadow-gray-400 text-center p-6 text-white'>Skills</h1>
        </div>
      <div className='grid grid-cols-3 gap-5 sm:my-4 shadow-lg border-dashed border rounded-lg shadow-purple-400 py-6 px-4'>
        <div>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  width={100} height={100} />
      <p className='text-2xl font-bold text-white'>HTML</p>
      </div>
      <div>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={100} height={100}/>
              <p className='text-2xl font-bold text-white'>CSS</p>
      </div>
      <div>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={100} height={100}/>
              <p className='text-2xl font-bold text-white'>Javascript</p>
      </div>
      <div>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={100} height={100}/>
              <p className='text-2xl font-bold text-white'>React</p>
              </div>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width={100} height={100}/>
              <p className='text-2xl font-bold text-white'>Redux</p>
              </div>
              <div >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={100} height={100}/>
              <p className='text-2xl font-bold text-white'>Node Js</p>
            </div>

            <div >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width={100} height={100}/>
              <p className='text-2xl font-bold text-white'>Express</p>
            </div>

            <div >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" width={100} height={100}/>
              <p className='text-2xl font-bold text-white'>Sequelize</p>
            </div>

            <div >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width={100} height={100}/>
              <p className='text-2xl font-bold text-white'>PostgreSQL</p>
            </div>
    </div>
    </div>
  )
}

export default Skills