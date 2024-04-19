import React from "react"

export function WorkExpCard({details}){
    return(
        <div className="work-experience-card bg-[#130f2a] rounded-[0.65rem] border border-solid border-[#6751b9] p-[1.5rem] mx-4 my-4 max-md:m-1">
            <h6 className="text-[1.05rem] font-medium mb-[0.7rem] text-white max-md:text-[0.95rem]">{details.title}</h6>
            <div className="work-duration text-white inline-block text-[0.7rem] font-normal bg-[rgba(103,_81,_185,_0.5)] rounded-[0.3rem] px-[0.4rem] py-[0.6rem] mb-[1.3rem]">{details.date}</div>
            <ul className="mx-10">
                {details.responsabilities.map((item) => (
                    <li className=" list-none text-white text-[0.8rem] font-normal mb-[0.5rem] relative after:content-[' '] after:w-[0.5rem] after:h-[0.5rem] after:bg-[#6751b9] after:rounded-[0.5rem] after:absolute after:left-[-1.3rem] after:top-[0.35rem] max-md:text-[0.75rem]" key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};