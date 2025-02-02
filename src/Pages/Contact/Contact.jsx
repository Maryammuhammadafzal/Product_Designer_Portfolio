import React from 'react'


const Contact = () => {
  return (
        <div className="w-[100%] h-screen flex flex-col items-center justify-center">
     <div className="w-[100%] h-[15vh] flex flex-col items-center justify-center gap-3">
     <h3 className=" h-[20px] font-bold text-base">Get In Touch</h3>
        <h2 className="h-fit font-bold text-4xl">Contact me</h2>
        <p className="w-[100%] text-center h-fit text-sm text-gray-600">
              Lorem ipsum dolor sit, amet consectetur
            </p>
      </div>
<form action="" className="w-[70%] h-[80vh] flex flex-col items-center justify-center gap-3">

        <div className="w-[100%]  h-[15vh] flex  justify-center gap-3 items-center"> 
                <label For="fName" className="w-[45%] h-fit text-sm  text-gray-600">First Name:
                        <input className='block border-[2px] rounded-md w-[100%] border-[#5E3BEE] p-3' type="text" id="fName" />
                </label>
                <label For="fName" className="w-[45%] h-fit text-sm text-gray-600">Last Name:
                        <input className='block border-[2px] rounded-md w-[100%] border-[#5E3BEE] p-3' type="text" id="fName" />
                </label>
        </div>
        <div className="w-[100%]  h-[15vh] flex justify-center gap-3 items-center"> 
                <label For="fName" className="w-[45%] h-fit text-sm text-gray-600">Eamil:
                        <input className='block border-[2px] rounded-md w-[100%] border-[#5E3BEE] p-3' type="text" id="fName" />
                </label>
                <label For="fName" className="w-[45%] h-fit text-sm text-gray-600">Password:
                        <input className='block border-[2px] rounded-md w-[100%] border-[#5E3BEE] p-3' type="text" id="fName" />
                </label>
        </div>
        <div className="w-[100%]  h-[15vh] flex justify-center items-center"> 
                <label For="fName" className="w-[92%]  h-fit text-sm text-gray-600">Select Item:
                        <input className='block border-[2px] mx-auto rounded-md w-[100%] border-[#5E3BEE] p-3' type="text" id="fName" />
                </label>
                
        </div>
        <div className="w-[100%] h-[15vh] flex justify-center items-center"> 
                <label For="fName" className="w-[92%] h-fit text-sm text-gray-600">Message:
                        <textarea className='block border-[2px] mx-auto rounded-md w-[100%] h-[100px] border-[#5E3BEE] p-3' type="text" id="fName" ></textarea>
                </label>

        </div>
</form>
</div>
  )
}

export default Contact
