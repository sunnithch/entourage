import Header from '../components/Header';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import ReservationsForSale from '@/components/ReservationsForSale';
import BusinessModel from '../components/BusinessModel';
// import TeamMembers from '../components/TeamMembers';
import AttractionStrategy from '../components/AttractionStrategy';
import ImpactMeasurement from '../components/ImpactMeasurement';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Features />
      <HowItWorks />
      {/* <TeamMembers /> */}
      <ReservationsForSale />
      <AttractionStrategy />
      <ImpactMeasurement />
      <BusinessModel />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

