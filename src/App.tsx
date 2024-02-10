import './App.css'
import {
  Navbar,
  Hero,
  CountStat,
  Benefit,
  Features,
  Testimonial,
  CTA,
  Footer
} from './components'
import styles from './styles'

function App() {

  return (
    <div className='bg-primary w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter} `} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <CountStat />
          <Benefit />
          <Features />
          <Testimonial />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
