import Head from 'next/head'
import Header from "../components/header.component";
import Footer from "../components/footer.component";
import Main from "../components/main.component";
import Services from "../components/services.component";
import GetInTouch from "../components/getintouch.component";


export default function Home() {
    return (
        <div>
            <Head>
                <title>boxbay</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
                      rel="stylesheet"/>
            </Head>

            <Header/>
            <Main/>
            <Services/>
            <GetInTouch/>

            <Footer/>
        </div>
    )
}