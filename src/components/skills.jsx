import React, { useState } from "react";
import { SkillCard } from "./skillCard";
import { SkillsInfo } from "./skillsInfo";

export function Skills() {
    const SKILLS = [
        {
            title: "Frontend",
            icon: "../src/assets/images/Front.png",
            skills: [
                { skill: "HTML5", percentage: "80%" },
                { skill: "TailWindCSS", percentage: "60%" },
                { skill: "JavaScript", percentage: "75%" },
                { skill: "React.js", percentage: "60%" },
            ],
        },
        {
            title: "Backend",
            icon: "../src/assets/images/Back.png",
            skills: [
                { skill: "Node.js", percentage: "70%" },
                { skill: "Express.js", percentage: "60%" },
                { skill: "PHP", percentage: "70%" },
            ],
        },
        {
            title: "Tools",
            icon: "../src/assets/images/tools.png",
            skills: [
                { skill: "Git & GitHub", percentage: "75%" },
                { skill: "Visual Studio Code", percentage: "85%" },
                { skill: "Figma", percentage: "75%" },
            ],
        },
        {
            title: "Soft Skills",
            icon: "../src/assets/images/soft.png",
            skills: [
                { skill: "Problem Solving", percentage: "80%" },
                { skill: "Collaboration", percentage: "90%" },
                { skill: "Attention to detail", percentage: "75%" },
                { skill: "Persistence", percentage: "90%" },
            ],
        },
    ];

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    }

    return (
        <div className=" w-full h-auto bg-gradient-to-t from-[#0c0c1d] to-[#111132] max-sm:flex max-sm:flex-col max-sm:items-center">
            <div className=" skill-container relative mx-12 max-sm:p-0 max-sm:mx-0 max-sm:w-4/5">
                <br />
                <br />
                <br />
                <br />
                <br />
                <h5 className="mb-14 text-white text-[50px] tracking-[10px] font-bold max-md:text-[1.3rem] max-md:mb-[2rem]">MY <span className="text-purple-700">SKILLS</span></h5>
                <div className="skill-content flex items-start gap-12 max-lg:gap-8 max-md:flex-col-reverse max-md:gap-12">
                    <div className="skills flex-[1] grid gap-12 grid-cols-[repeat(2,_1fr)] max-lg:pl-0 max-lg:gap-8 max-sm:gap-[1.5rem] max-md:w-full">
                        {SKILLS.map((item) => (
                            <SkillCard key={item.title} iconUrl={item.icon} title={item.title} isActive={selectedSkill.title === item.title} onClick={()=>{handleSelectedSkill(item);}}/>
                        ))}
                    </div>
                    <div className="skills-info flex-[1] max-md:w-full">
                        <SkillsInfo
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
