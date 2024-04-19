import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function ContactForm(){
    const notifySucces = () => {
        toast.success('👍 Email sent successfully!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const notifyError = () => {
        toast.error('😔 Unable to send email', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_ft9kedo', 'template_1894ypa', form.current, {
        publicKey: 'eQ8PeiZraWYMv3VKm',
        })
        .then(
        () => {
            console.log('SUCCESS!');
            notifySucces();
        },
        (error) => {
            console.log('FAILED...', error.text);
            notifyError();
        },
        );
    };

    return(
        <div className="contact-form-content w-full">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                <div className="name-container flex items-center gap-6 max-sm:flex-col max-sm:items-start">
                    <input className=" flex-1 w-full text-[0.9rem] text-white bg-[#130f2a] rounded-[0.6rem] border border-solid border-[#6751b9] p-4 max-sm:p-[0.7rem] max-sm:rounded-[0.3rem]" type="text" name="from_name" placeholder="Name" required/>
                </div>
                <input className=" flex-1 w-full text-[0.9rem] text-white bg-[#130f2a] rounded-[0.6rem] border border-solid border-[#6751b9] p-4 max-sm:p-[0.7rem] max-sm:rounded-[0.3rem]" type="email" name="from_email" placeholder="Email" required/>
                <textarea className=" flex-1 w-full text-[0.9rem] text-white bg-[#130f2a] rounded-[0.6rem] border border-solid border-[#6751b9] p-4 max-sm:p-[0.7rem] max-sm:rounded-[0.3rem]" name="message" placeholder="Message" rows={3} required/>
                <input className=" text-[1rem] font-medium text-white border border-solid border-[#a892fe] rounded-[0.6rem] bg-[linear-gradient(90deg,_#a892fe_0%,_#8064e8_100%)] p-[0.7rem] transition-all duration-300 ease-linear cursor-pointer max-sm:text-[0.9rem] max-sm:p-[0.7rem] max-sm:rounded-[0.3rem]" type="submit" value="SEND"/>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    )
}