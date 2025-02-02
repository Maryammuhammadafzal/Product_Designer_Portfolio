import React from "react";
import Button from "../Button/Button";
import HeroImage from "../../assets/Images/heroImage.png"
import SubHeading from "../SubHeading/SubHeading";

const Hero = () => {
  return (
    <div className="w-[100%] h-[90vh] flex justify-evenly  items-center">
      <div className="w-[50%] h-[100%] flex flex-col items-center gap-y-5 justify-center ">
        <SubHeading text="Hey I am John"/>
        <h1 className="w-[80%] h-fit leading-14 font-bold text-5xl">
          I create <span className="text-[#5E3BEE]">Product Design</span> and brand experience
        </h1>
        <p className="w-[80%] h-fit text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          eveniet suscipit harum tempora soluta velit nobis alias incidunt
          dolore optio ipsum quo id debitis fugit corrupti tenetur est iure.
          Rem.
        </p>
        <div className="w-[80%] h-fit">
        <Button text="Get in touch" bg="[#5E3BEE]" color="[#fff]"/>
        </div>
      </div>
      <div className="w-[40%] h-[100%] flex justify-between items-center ">
        <img src={HeroImage} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
