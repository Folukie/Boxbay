import React from "react";

import Link from "next/link";
import Image from "next/image";

const Header = () => {

    return (
        <div className="bg-primary px-14 py-6 sticky top-0 w-full z-20">
            <div className="flex justify-between gap-8">

                <Link href={"/"} passHref>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="icon" src="/images/white-icon.png" className="object-contain h-8"/>
                </Link>
                <div className="flex items-center gap-10 cursor-pointer ">

                    {[
                        {title: "About", link: "/"},
                        {title: "Contact", link: "/#contact"}].map((item, idx) => (
                        <a href={item.link} className="text-white text-med" key={idx}>
                            {item.title}
                        </a>
                    ))}


                </div>
            </div>


        </div>
    );
};

export default Header;