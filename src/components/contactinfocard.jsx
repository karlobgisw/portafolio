import React from "react";

export function ContactCard({iconUrl, text}){
    return(
        <div className="contact-details-card flex flex-col items-center justify-center bg-[#130f2a] rounded-[0.65rem] border border-solid border-[#6751b9] p-[1.5rem] mb-8">
            <div className="icon w-16 h-16 flex items-center justify-center rounded-[0.5rem] bg-[#3d3072] mb-[0.8rem]">
                <img className="w-[1.8rem] h-auto object-contain fill-white" src={iconUrl} alt={text} />
            </div>
            <p className="text-[0.9rem] font-normal text-white">{text}</p>
        </div>
    )
}