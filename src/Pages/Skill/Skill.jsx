import React from "react";
import SubHeading from "../../Components/SubHeading/SubHeading";
import Card from "../../Components/Card/Card";

const Skill = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10 justify-center items-center">
      <div className="w-[90%] h-auto flex flex-col items-start justify-center gap-3">
        <SubHeading text="My Skill" />
        <h2 className="h-fit font-bold text-4xl">My Expertise</h2>
      </div>
      <div className="cards w-[90%] h-auto flex items-center justify-start gap-3">
        <Card title="Strategy Direction" image=""/>
        <Card title="Branding & Logo" image=""/>
        <Card title="UI/UX Designer" image=""/>
        <Card title="Webflow Development" image=""/>
      </div>
    </div>
  );
};

export default Skill;