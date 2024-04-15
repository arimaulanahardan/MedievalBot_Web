import styles from './styles'
import {
  Hero,
  Count,
  Benefit,
  Feature,
  CTA,
  // Testimonial
  Navbar,
  Footer,
} from "./components/index"


function App() {
  return (
    <div className={`bg-primary ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <div className='sticky top-0 z-50 bg-primary/50 backdrop-blur-sm'>
          <Navbar />
        </div>
        <Hero />
        <Count />
        <Benefit />
        <Feature />
        {/* <Testimonial /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
