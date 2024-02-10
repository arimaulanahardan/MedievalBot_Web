import CardBenefit from '../common/CardBenefit';
import { benefits } from '../constants';
import styles from '../styles';
import { BgTransparant } from '../assets';

const Benefit = () => {
    return (
        <section className='w-full flex flex-col'
            style={
                {
                    background: `url(${BgTransparant}) no-repeat center`,
                    backgroundSize: 'cover'
                }
            }
        >

            <div className='justify-center items-center m-10 mb-5'>
                <h1 className='text-white font-montserrat font-bold text-[40px] text-left w-[600px] '>Your Benefit From using our Services</h1>
                <p className={`${styles.paragraph} mt-4 w-[80%]`}>
                    Harken, trader of the future! Doth manual trading leave you weary, yearning for automated triumphs?
                    Fear not, for Medieval Robotic presents your valiant solution – a Telegram bot forged in the fires of innovation, ready to guide you to Solana riches!
                </p>
            </div>
            <div className='flex'>
                {benefits.map((benefit, i) => (
                    <CardBenefit
                        key={benefit.id}
                        id={benefit.id}
                        title={benefit.title}
                        description={benefit.description}
                        image={benefit.image}
                    />
                ))}
            </div>
        </section>
    )
}

export default Benefit;