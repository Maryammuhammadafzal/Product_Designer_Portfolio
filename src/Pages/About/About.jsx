import React from "react";
import SubHeading from "../../Components/SubHeading/SubHeading";
import AboutImage from "../../assets/Images/aboutImage.png"

const About = () => {
  return (
    <div className="w-[100%] h-screen flex justify-around">
      <div className="AboutImage w-[40%] h-[100%]  flex justify-center items-center ">
              <img className="w-full h-[100%] " src={AboutImage} alt="heroImage" />
            </div>
      <div className="AboutImage w-[50%] h-[100%] gap-4 flex justify-center flex-col items-center">
        <SubHeading text="About" />
        <h2 className="w-[80%] h-fit font-bold text-4xl">About Me</h2>
        <p className="w-[80%] h-fit text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          eveniet suscipit harum tempora soluta velit nobis alias incidunt
          dolore optio ipsum quo id debitis fugit corrupti tenetur est iure.
          Rem.
        </p>
        <p className="w-[80%] h-fit text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          eveniet suscipit harum tempora soluta velit nobis alias incidunt
          dolore optio ipsum quo id debitis fugit corrupti tenetur est iure.
          Rem.
        </p>  
            </div>
    </div>
  );
};

export default About;
