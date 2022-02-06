import React from "react";
import Image from "next/image";
import Link from "next/link"

const Sidebar = ({close, isOpen}) => {
    return (
        <aside
            className={`bg-primary ${
                !isOpen ? "translate-y-full" : ""
            }`}
        >
            <div className="flex justify-between pb-10 pt-2">
                <Link href={"/"} passHref>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="icon" src="/images/white-icon.png" className="object-contain h-8"/>
                </Link>
                <button onClick={close}>
                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.76893 10.4285L18.2044 19.791M1.3334 19.791L9.76893 10.4285L1.3334 19.791ZM18.2044 1.06604L9.76732 10.4285L18.2044 1.06604ZM9.76732 10.4285L1.3334 1.06604L9.76732 10.4285Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </button>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-4">
                    {
                        [
                            {title: "About", link: "/"},
                            {title: "Contact", link: "/contact"}

                        ].map((item, idx) => (
                            <Link
                                className="text-white"
                                key={idx}
                                href={item.link}
                                onClick={close}

                            >
                                {item.title}
                            </Link>
                        ))}
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;