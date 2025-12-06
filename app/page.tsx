import CTA from "./components/CTA"
import Features from "./components/Features"
import FeaturesCards from "./components/FeaturesCards"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <FeaturesCards />
      <CTA />
      <Footer />
    </div>
  )
}
