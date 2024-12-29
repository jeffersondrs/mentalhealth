import DiscoveryBlock from "./components/DicoveryBlock";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InitialSection from "./components/InitialSection";
import InnerPeaceBlock from "./components/InnerPeaceBlock";
import Offers from "./components/Offers";
import OurTeam from "./components/OurTeam";
import Schedule from "./components/Schedule";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Header />
      <InitialSection />
      <Statistics />
      <Offers />
      <DiscoveryBlock />
      <WhyChooseUs />
      <InnerPeaceBlock />
      <OurTeam />
      <Testimonials />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
