import ClientSection from "../components/clientSection"
import ContactSection from "../components/contactSection"
import ProjectSection from "../components/projecSection"
import NewsletterSection from "../components/NewsletterList";
// import './landingPage.css';?

function LandingPage(){
    return(
        <>

        <div>
            <h1>Welcome to Projects</h1>
            <ProjectSection />
            <ClientSection />
            <ContactSection />
            <NewsletterSection />
        </div>
        </>
    )
}

export default LandingPage; 



