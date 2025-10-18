import Homepage from "../../app/Ex/Homepage/page";
import AboutPage from "./Aboutpage/page";
import Skills from "@/app/Ex/Skills/page"
import Services from "./Services/page";
import Team from "./Teampage/page";
import Testimonies from "./Testimonials/page";
import fFAQs from "../../app/Ex_pages/fFAQs/page"

export default function Ex() {
    return(
        <div>
            <Homepage/>
            <AboutPage/>
            <Services/>
            <Skills/>
            <Team/>
            <fFAQs/>
            <Testimonies/>
        </div>
    )
}