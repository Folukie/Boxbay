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

            </Head>

            <Header/>
            <Main/>
            <Services/>
            <GetInTouch/>

            <Footer/>
        </div>
    )
}
