import { FaqSection } from "./faq-section";
import { FinalCta } from "./final-cta";
import { FoundersSection } from "./founders-section";
import { Hero } from "./hero";
import { ServicesPreview } from "./services-preview";
import { WhyValora } from "./why-valora";

function Home() {
    return (
        <>
            <Hero />
            <ServicesPreview />
            <WhyValora />
            <FoundersSection/>
            <FaqSection />
            <FinalCta />
        </>
    );
}

export default Home;