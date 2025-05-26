import React from "react";
import Button from "../Button/Button";
import HeroImage from "../../assets/Images/heroImage.png"
import SubHeading from "../SubHeading/SubHeading";

const Hero = () => {
  return (
    <div className="w-full  h-auto 2xl-h-screen flex-col md:flex-row flex justify-evenly gap-10 md:gap-3 items-center">
      <div className="md:w-[50%] h-[100%] w-full flex flex-col items-center gap-y-5 justify-center ">
        <SubHeading text="Hey I am John"/>
        <h1 className="w-[80%] h-fit leading-10 font-bold text-3xl sm:text-4xl md:leading-12  lg:text-5xl xl:text-6xl xl:leading-16">
          I create <span className="text-[#5E3BEE]">Product Design</span> and brand experience
        </h1>
        <p className="w-[80%] h-fit text-sm md:text-base text-gray-600 lg:text-lg xl:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          eveniet suscipit harum tempora soluta velit nobis alias incidunt
          dolore optio ipsum quo id debitis fugit corrupti tenetur est iure.
          Rem.
        </p>
        <div className="w-[80%] h-fit">
        <Button text="Get in touch" bg="[#5E3BEE]" color="[#fff]"/>
        </div>
      </div>
      <div className="md:w-[50%] w-[90%] h-auto flex justify-between items-center">
        <img src={HeroImage} alt="heroImage" className="w-[90%] h-auto" />
      </div>
    </div>
  );
};

export default Hero;
