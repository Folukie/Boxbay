import React from "react";
import Image from "next/image";
import Link from "next/link"

const Sidebar = ({close, isOpen}) => {
    return (
        <aside
            className={`bg-secondary ${
                !isOpen ? "translate-x-full" : ""
            }`}
        >
            <div className="flex justify-between pb-10 pt-2">
                <div className="flex gap-6">
                    <Image alt="icon" src="/images/white-icon.png" className="" width={200} height={200}/>


                </div>
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
                            {label: "About", link: "/"},
                            // {label: "Collection", link: "/"},

                        ].map((item, idx) => (
                            <Link
                                className=""
                                key={idx}
                                href={item.link}
                                onClick={close}

                            >
                                {item.label}
                            </Link>
                        ))}
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;