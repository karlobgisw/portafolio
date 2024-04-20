import React from "react"
import { ContactCard } from "./contactinfocard"
import { ContactForm } from "./contactform"
import telephone from "../assets/telephone.svg"
import email from "../assets/email.svg"

export function ContactMe(){
    return(
        <div className="w-full h-auto bg-gradient-to-t from-[#111132] to-[#0c0c1d]">
                <br />
                <br />
                <br />
                <br />
                <br />
            <div className="contact-container mx-12 relative">
                <h5 className="mb-14 text-white text-[50px] tracking-[10px] font-bold max-md:text-[1.3rem] max-md:mb-[2rem]">CONTACT <span className="text-purple-700">ME</span></h5>
                <div className="contact-content flex gap-12 max-md:flex-col-reverse">
                    <div style={{flex: 1}}>
                        <ContactCard iconUrl={email} text="karlobgisw@gmail.com"></ContactCard>
                        <ContactCard iconUrl={telephone} text="(+52) 618-290-9507"></ContactCard>
                    </div>
                    <div style={{flex: 1}}>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}