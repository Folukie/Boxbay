import React from "react";
import Image from "next/image";


const Main = () => {

    return (
        <div className={"bg-primary h-xl px-24"}>
            <div className={"relative"}>
                <h1 className={"text-xl text-white text-left w-9/12 pt-48 px-6"}>Notify Africa of all that your product
                    offers
                    using Boxbay</h1>
                <div className={"ml-auto absolute right-0 top-72 right-2"}>
                    <Image src="/images/hero.png" alt="hero"
                           width={500}
                           height={500}
                           objectFit="cover "/>
                </div>

            </div>
        </div>
    );
};

export default Main;