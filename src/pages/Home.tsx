'use client'
import Hero from '../component/widgets/Hero'
import Tags from '../component/shared/ui/Tags'
import AboutSection from '../component/widgets/AboutUs'
import WorkSection from '../component/widgets/WorkSection'
import CaseStudySection from '../component/widgets/CaseStudySection'
import ContactSection from '../component/widgets/ContactSection'
import { useConContext } from '../context/useConContext'
import { motion, AnimatePresence } from 'framer-motion'
import ContactConsultancySection from '../component/widgets/CtaSection'

const HomeModule: React.FC = () => {
  const { Contect } = useConContext()

  return (
    <div className="relative">
      <AnimatePresence>
        {Contect && (
          <motion.div
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 , ease: 'easeOut' }}
          >
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>

      <Hero />
      <Tags />
      <AboutSection />
           <CaseStudySection />
      <WorkSection />
      <ContactConsultancySection/>
 
    </div>
  )
}

export default HomeModule

