import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card hover:border-b-[#5E3BEE] hover:border-b-[4px] shadow-md w-[23%] h-[300px] bg-[#f3f2fb] rounded-md">
          <div className="icon w-[100px] h-[90px] flex justify-center items-center">
            <div className="iconBox icon w-[60px] rounded-md h-[60px] flex justify-center bg-[#dcd9f4] items-center">
                <img src={props.image} alt="" />
            </div>
          </div>
          <div className="text w-full h-[50px] items-center flex justify-center px-3">
            <h2 className="w-[95%] h-fit font-bold text-2xl">{props.title}</h2>
          </div>
          <div className="text w-full h-[120px] items-center flex justify-center px-1">
            <p className="w-[90%] h-fit text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, eveniet suscipit harum tempora soluta velit nobis alias
              incidunt
            </p>
          </div>
        </div>
    </>
  )
}

export default Card
