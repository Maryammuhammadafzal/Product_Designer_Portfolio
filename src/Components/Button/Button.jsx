import React from 'react'

const Button = (props) => {
        console.log(props.bg);
        
  return (
    <>
     <button className={`w-[120px] rounded-sm h-[40px] bg-${props.bg} text-${props.color} border border-[#5E3BEE]`}>{props.text}</button> 
    </>
  )
}

export default Button
