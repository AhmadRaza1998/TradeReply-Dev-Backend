import BannerSec from "./BannerSec";
import AnswerTrades from "./AnswerTrades";
import TradesTabs from "./TradesTabs";
import OurMission from "./OurMission";
import Testimonials from "./Testimonials";
import HowitWorks from "./HowitWorks";
import FeaturedResources from "./FeaturedResources";
import LearningResources from "./LearningResources";

export default function Home() {
  return (
    <div className="home" id="home-page">
      <BannerSec />
      <AnswerTrades />
      <TradesTabs />
      <section className="our_testimonial_sec">
        <OurMission />
        <Testimonials />
      </section>
      <HowitWorks />
      <LearningResources />
      <FeaturedResources />
    </div>
  );
}
