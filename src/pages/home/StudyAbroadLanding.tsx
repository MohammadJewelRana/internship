
import StudyNavbar from "./StudyNavbar";
import StudyHero from "./StudyHero";
 
import CountriesSection from "./CountriesSection";
 
 
import ProcessSection from "./ProcessSection";
import ContactCTA from "./ContactCTA";
import StudyFooter from "./StudyFooter";
import FloatingSocial from "./FloatingSocial";
 
 

const StudyAbroad = () => {
  return (
    <main className="min-h-screen bg-white">

      <StudyNavbar />

      <StudyHero />

    

      <CountriesSection />

      {/* <WhyChooseUs /> */}

     
                            

      <ProcessSection />

      <ContactCTA />

      <StudyFooter />
      <FloatingSocial/>

    </main>
  );
};

export default StudyAbroad;