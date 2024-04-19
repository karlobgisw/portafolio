import React from "react"

export function SkillsInfo({heading, skills}) {
    return (
        <div className=" text-white min-h-[23rem] rounded-[0.65rem] border-[1.5px] border-solid border-[#6751b9] bg-[rgba(22,_17,_47,_0.398)] backdrop-blur-[1rem]">
            <h6 className="text-[1.2rem] font-medium px-[0.8rem] py-[2rem] bg-[linear-gradient(180deg,_#aa94fe_0%,_#7c5fe6_100%)] bg-clip-text border-b-[1.5px] border-solid border-b-[#6751b9]">{heading}</h6>
            <div className="skill-info-content p-[2rem]">
                {skills.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="skill-info flex items-center justify-between mb-3 mt-3 ml-4">
                            <p className=" text-[1rem] font-medium mr-2">{item.skill}</p>
                            <p className="percentage text-[1rem] font-medium text-[#dd8cfa]">{item.percentage}</p>
                        </div>
                        
                        <div className="skill-progress-bg w-full h-[0.5rem] bg-[#382e68] rounded-[0.5rem] mx-[0rem] my-0 overflow-hidden">
                            <div className="skill-progress w-[0%] h-[0.5rem] bg-[linear-gradient(180deg,_#aa94fe_0%,_#7c5fe6_100%)] rounded-[0.5rem] transition-all duration-500 ease-in-out" style={{width: item.percentage}}></div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}