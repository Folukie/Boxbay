import React from "react";
import Image from "next/image";

const Footer = () => {

    return (
        <footer className={"text-center py-20"}>
            <Image src={"/images/blue-icon.png"} alt={"icon"} width={120} height={60} objectFit={"contain"}/>
            <p className={"opacity-50 font-med"}>&copy; 2022, Boxbay All rights reserved.</p>
        </footer>
    );
};

export default Footer;