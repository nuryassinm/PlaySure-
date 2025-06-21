import BestInternet from "../components/BestInternet";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import WhyChooseMuscle from "../components/WhyChooseMuscle";
import Footer from "../components/Footer";
import WhyChooseSection from "../components/WhyChooseSection";
import Ourpricings from "../components/Ourpricings";
import PricingSection from "../components/PricingSection";


import About from "../components/About";

function OurPricing() {
  return (
    <>
      <div className="flex  items-center justify-center flex-col w-full  overflow-hidden">
     
      {/* <Nav /> */}
      <Ourpricings />
        <PricingSection />
        <WhyChooseMuscle /> 
       
        <Footer />
      </div>
    </>
  );
}

export default OurPricing;
