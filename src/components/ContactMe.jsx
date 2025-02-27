import React from "react";

const ContactMe = () => {
    return (
        <>
            <section id="Contact" className="ContactMe my-8 mx-6">
                <h5 className="mb-4 ml-4 text-xl font-extrabold">Contact Me</h5>
                <div className="ContactMe-wrapper flex flex-col gap-8 items-center mx-8">
                    <a href="mailto:hpasham12@gmail.com" className="Email border border-[#6751b9] rounded-md p-4 w-1/2 flex flex-col gap-4 items-center">
                        <img className="h-8" src="./assets/mail.svg" alt="email icon" />
                        <a href="mailto:hpasham12@gmail.com">hpasham12@gmail.com</a>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/harshita-pasham" rel="noreferrer" className="LinkedIn border border-[#6751b9] rounded-md p-4 w-1/2 flex flex-col gap-4 items-center">
                        <img className="h-8" src="./assets/linkedinlogo.svg" alt="linkedin icon" />
                        <a target="_blank" href="https://www.linkedin.com/in/harshita-pasham" rel="noreferrer">linkedin.com/in/harshita-pasham</a>
                    </a>
                </div>
            </section>
        </>
    );
}

export default ContactMe;