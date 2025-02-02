import React from "react";
import SubHeading from "../../Components/SubHeading/SubHeading";
import Card from "../../Components/Card/Card";

const Skill = () => {
  return (
    <div className="w-[100%] h-screen  flex flex-col justify-between">
      <div className="w-[100%] h-[30vh] flex flex-col items-center justify-center gap-3">
        <SubHeading text="My Skill" />
        <h2 className="w-[80%] h-fit font-bold text-4xl">My Expertise</h2>
      </div>
      <div className="cards w-[100%] h-[70vh]  flex items-center justify-center gap-3">
        <Card title="Strategy Direction" image=""/>
        <Card title="Branding & Logo" image=""/>
        <Card title="UI/UX Designer" image=""/>
        <Card title="Webflow Development" image=""/>
      </div>
    </div>
  );
};

export default Skill;