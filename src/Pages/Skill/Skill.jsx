import React from "react";
import SubHeading from "../../Components/SubHeading/SubHeading";
import Card from "../../Components/Card/Card";

const Skill = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10 justify-center items-center">
      <div className="lg:w-[90%] xl:w-[80%] w-full h-auto flex flex-col items-center justify-center gap-3">
        <SubHeading text="My Skill" />
        <h2 className="h-fit font-bold text-4xl">My Expertise</h2>
      </div>
      <div className="cards w-full lg:w-[90%] xl:w-[80%] h-auto flex items-center justify-center max-lg:flex-wrap gap-3">
        <Card title="Strategy Direction" image=""/>
        <Card title="Branding & Logo" image=""/>
        <Card title="UI/UX Designer" image=""/>
        <Card title="Webflow Development" image=""/>
      </div>
    </div>
  );
};

export default Skill;