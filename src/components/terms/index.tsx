import styles from '../../styles'
import TermsAndConditions from './TermsAndCondition'
import {
    Navbar,
    Footer,
} from "../index"

function Terms() {
    return (
        <div className={`bg-primary ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className='sticky top-0 z-50 bg-primary/50 backdrop-blur-sm'>
                    <Navbar />
                </div>
                <TermsAndConditions />
                <Footer />
            </div>
        </div>
    )
}

export default Terms