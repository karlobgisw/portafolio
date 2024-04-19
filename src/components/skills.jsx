import React, { useState } from "react";
import { SkillCard } from "./skillCard";
import { SkillsInfo } from "./skillsInfo";


export function Skills() {
    const SKILLS = [
        {
            title: "Frontend",
            icon: "https://cdn.discordapp.com/attachments/721077787842052136/1230999102230368377/icon-frontend.png?ex=66355c40&is=6622e740&hm=ba72c5bcea54259c7aa51af8fd334262e7412417c67c2962bcecd340180baffe&",
            skills: [
                { skill: "HTML5", percentage: "80%" },
                { skill: "TailWindCSS", percentage: "60%" },
                { skill: "JavaScript", percentage: "75%" },
                { skill: "React.js", percentage: "60%" },
            ],
        },
        {
            title: "Backend",
            icon: "https://cdn.discordapp.com/attachments/721077787842052136/1230999102486216774/icon-backend.png?ex=66355c40&is=6622e740&hm=6fefc177647f604d486fbaca0e7743f1d647f0dfac6157e1e05404c08342dee7&",
            skills: [
                { skill: "Node.js", percentage: "70%" },
                { skill: "Express.js", percentage: "60%" },
                { skill: "PHP", percentage: "70%" },
            ],
        },
        {
            title: "Tools",
            icon: "https://cdn.discordapp.com/attachments/721077787842052136/1230999101995356201/icon-tools.png?ex=66355c40&is=6622e740&hm=eee9a4c294cae75d492a3276baf0c5b0695609dfee0a18b4484240a3e8e6759c&",
            skills: [
                { skill: "Git & GitHub", percentage: "75%" },
                { skill: "Visual Studio Code", percentage: "85%" },
                { skill: "Figma", percentage: "75%" },
            ],
        },
        {
            title: "Soft Skills",
            icon: "https://cdn.discordapp.com/attachments/721077787842052136/1230999102909714533/icon-soft.png?ex=66355c40&is=6622e740&hm=73ee6debef35f34c078a65bff1001868955bcec985a0ced865dd393781f90b30&",
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
