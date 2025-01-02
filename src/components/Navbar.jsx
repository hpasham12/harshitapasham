import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="Navbar py-2 sticky top-0 z-30 backdrop-blur-2xl">
                <div className="Navbar-content flex items-center justify-between p-4 mx-auto">
                    <img className="Navbar-logo h-16" src="./assets/flower.svg" alt="site logo" />
                    <ul className="flex items-center gap-2 list-none">
                        <li className="mx-6">
                            <a className="menu-item" href="#Hero">Home</a>
                        </li>
                        {/* <li className="mx-6">
                            <a className="menu-item" href="google.com">Skills</a>
                        </li> */}
                        <li className="mx-6">
                            <a className="menu-item" href="#Experience">Work Experience</a>
                        </li>
                        <li className="mx-6">
                            <a className="menu-item" href="#Contact">Contact Me</a>
                        </li>
                        <a href="mailto:hpasham12@gmail.com">
                            <button className="contact-button bg-white text-black px-4 rounded-sm" onClick={() => {}}>
                                Hire Me
                            </button>
                        </a>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;