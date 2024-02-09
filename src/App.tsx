import './App.css'
import {
  Navbar,
  Hero
} from './components'
import styles from './styles'

function App() {

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} `} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
    </div>
  )
}

export default App
