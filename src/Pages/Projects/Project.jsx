import React from 'react'
import Card from '../../Components/Card/Card'

const Project = () => {
  return (
        <div className="w-[100%] h-screen flex flex-col justify-around">
      <div className="ProjectHeading w-[100%] h-[30%] flex justify-center items-center ">
      <h2 className="w-[80%] text-center h-fit font-bold text-4xl">Projects</h2>
            </div>
      <div className="ProjectCards w-[100%] h-[70%] gap-4 flex justify-center  items-center">
       <Card title="Project 1"/>
       <Card title="Project 2"/>
       <Card title="Project 3"/>
            </div>
        </div>
  )
}

export default Project
