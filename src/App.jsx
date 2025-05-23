import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/HeaderUpdated'
import Footer from './components/Footer'
import Home from './pages/Home'
import StudentRegistration from './pages/StudentRegistration'
import ProfessionalRegistration from './pages/ProfessionalRegistration'
import InstitutionRegistration from './pages/InstitutionRegistration'
import Event from './pages/Event'

// Import service pages
import GamifiedLearning from './pages/services/GamifiedLearning'
import EnterpriseTraining from './pages/services/EnterpriseTraining'
import ConsultingServices from './pages/services/ConsultingServices'
import CurriculumDesign from './pages/services/CurriculumDesign'
import RDInnovations from './pages/services/RDInnovations'

import './App.css'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize any global animations here
    const ctx = gsap.context(() => {
      // Animate elements with the .fade-in class
      gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.fromTo(element, 
          { opacity: 0, y: 50 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top bottom-=100',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-benefits" element={<StudentRegistration />} />
          <Route path="/professional-benefits" element={<ProfessionalRegistration />} />
          <Route path="/institution-benefits" element={<InstitutionRegistration />} />
          <Route path="/event" element={<Event />} />
          
          {/* Service page routes */}
          <Route path="/gamified-learning" element={<GamifiedLearning />} />
          <Route path="/enterprise-training" element={<EnterpriseTraining />} />
          <Route path="/consulting-services" element={<ConsultingServices />} />
          <Route path="/curriculum-design" element={<CurriculumDesign />} />
          <Route path="/rd-innovations" element={<RDInnovations />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App