import React from 'react'
import TestimonialCard from '../../Components/TestimonialCard/TestimonialCard'
import SubHeading from '../../Components/SubHeading/SubHeading'

const Testimonial = () => {
  return (
        <div className="w-[100%] h-screen flex flex-col items-center justify-around">
     <div className="w-[100%] h-[30vh] flex flex-col items-center justify-center gap-y-3">
        <SubHeading text="Client Feedback"/>
        <h2 className="w-[80%] h-fit font-bold text-4xl">Customer Testimonial</h2>
      </div>
            
      <div className="TestimonialCards w-[100%] h-[70vh] gap-3 flex justify-center  items-center">
     
     <TestimonialCard/>
     <TestimonialCard/>
     <TestimonialCard/>
            </div>
        </div>
  )
}

export default Testimonial
