import React from "react";

export function SkillCard({ title, iconUrl, isActive, onClick}){
    return(
        <div className={`skills-card ${isActive ? "active" : ""}`} onClick={()=>onClick()}>
            <div className="w-16 h-16 flex items-center justify-center bg-[#2a2252] rounded-[0.65rem] border border-solid border-[#6852ba] absolute top-[-1rem] left-[-1rem] max-lg:w-12  max-lg:h-12">
                <img className=" w-[2.4rem] h-auto object-contain max-lg:w-[1.8rem]" src={iconUrl} alt={title} />
            </div>
            <span className=" text-[1.3rem] font-medium text-white max-sm:text-[0.2rem]">
                {title}
            </span>
        </div>
    )
}