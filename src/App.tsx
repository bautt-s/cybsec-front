import HeroSection from "./components/hero";
import FeaturesSection from "./components/features";
import PlansSection from "./components/plans";
import TestimonialsSection from "./components/testimonials";
import ContactSection from "./components/contact";
import FooterSection from "./components/footer";

function App() {
    return (
        <div className="overflow-hidden rubik">
            <HeroSection />
            <FeaturesSection />
            <PlansSection />
            <TestimonialsSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}

export default App;