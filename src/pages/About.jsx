import BestInternet from "../components/BestInternet";
import WhyChooseMuscle from "../components/WhyChooseMuscle";
import Footer from "../components/Footer";
import WhyChooseSection from "../components/WhyChooseSection";
import About from "../components/About";

function Abouts() {
  return (
    <>
      <div className="flex  items-center justify-center flex-col w-full  overflow-hidden">
        <About />
        <BestInternet />
        <WhyChooseSection />
        <WhyChooseMuscle /> 
        <Footer />
      </div>
    </>
  );
}

export default Abouts;
