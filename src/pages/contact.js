import Head from "next/head";
import React from "react";
import Header from "../components/header.component";
import Footer from "../components/footer.component";
import Image from "next/image"

export default function Contact() {
    return (
        <div className="text-secondary text-base bg-primary">
            <Head>
                <title>Contact</title>

            </Head>
            <Header/>
            <h1>Get In Touch</h1>

            <div>
                <Image src={"/images/phone.svg"} alt={"phone"} width={20} height={20}/>
                <h5>+234 808 123 4567</h5>
            </div>
            <Footer/>
        </div>
    );
}