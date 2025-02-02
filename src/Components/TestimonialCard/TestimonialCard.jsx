import React from 'react'

const TestimonialCard = () => {
  return (
    <>
          <div className="card border-[#5E3BEE] gap-y-4 border shadow-md w-[26%] h-[250px] bg-[#f3f2fb]  rounded-md">
          <div className="icon w-[100%] h-[60px]  flex items-center">
                <img src=""alt="" />
          </div>
          
          <div className="text w-[100%] h-[100px] items-center flex justify-center">
            <p className="w-[90%] h-fit text-sm text-gray-600">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, eveniet suscipit harum tempora soluta velit nobis alias
              incidunt"
            </p>
          </div>
          <div className="client flex items-center w-[100%]  h-[80px]">
                <div className="clientImg items-center justify-center flex h-[60px] w-[30%]">
                        <img src="" className='rounded-full w-[45%] h-[55px]' alt="clientImage" />
                </div>
                <div className="clientName justify-start flex flex-col h-[60px] w-[70%]">
                        <h2 className="text-base font-[500] text-gray-600">Client Name</h2>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
                </div>
          </div>
        </div>
    </>
  )
}

export default TestimonialCard
