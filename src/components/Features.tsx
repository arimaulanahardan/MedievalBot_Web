import CardFeatures from '../common/CardFeatures';
import { features } from '../constants';
import styles from '../styles';

const Features = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center mb-10'>
            <div className='m-10 mb-5'>
                <h1 className='text-white font-montserrat font-bold text-[40px] text-center w-full '>Features</h1>
                <p className={`${styles.paragraph} mt-4 w-full text-center px-44 mb-10`}>
                    Harken, trader of the future! Doth manual trading leave you weary, yearning for automated triumphs?
                    Fear not, for Medieval Robotic presents your valiant solution – a Telegram bot forged in the fires of innovation, ready to guide you to Solana riches!
                </p>
            </div>
            <div className='absolute z-[0] -left-1/2  w-[50%] h-[50%] rounded-full circle__gradient' />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {features.map((feature, i) => (
                    <CardFeatures
                        key={feature.id}
                        id={feature.id}
                        title={feature.title}
                        image={feature.image}
                        link={feature.link}
                    />
                ))}
            </div>
        </section>
    )
}

export default Features;
