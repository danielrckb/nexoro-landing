import Comparison from "./components/Comparison"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Features from "./components/Features"
import FeaturesCards from "./components/FeaturesCards"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import TextRotation from "./components/TextRotation"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <TextRotation />
      <FeaturesCards />
      <Pricing />
      <Comparison />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
