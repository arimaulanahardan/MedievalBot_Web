import react from 'react';
import styles from '../styles';

interface cardBenefitProps {
    id: string;
    title: string;
    description: string;
    image: string;
}

const CardBenefit: React.FC<cardBenefitProps> = ({ id, title, description, image }) => {
    return (
        <div
            id={id}
            className="w-full flex mb-4 flex-col justify-between items-center mx-8"
        >
            <div className="CardBot text-center"
                style={{
                    borderRadius: '0.3125rem 0.3125rem 7.5rem 0.3125rem',
                    border: '2px solid #FF5C00'
                }}>

                <div className='IconRobot relative flex'>
                    <div className='bg-primary-gradient rounded-full h-[150px] w-[150px]'>
                    </div>
                    <img src={image} alt="#"
                        className='absolute inset-0 w-[190px] h-[180px] justify-end object-cover object-center'
                    />
                </div>
                <div className='pt-6 w-full pb-6'>
                    <h1 className='font-montserrat font-semibold text-white text-[16px]'>{title}</h1>
                    <div className=' w-full p-4'>
                        <p className={`${styles.paragraph} text-[12px] text-left text-wrap leading-normal`}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardBenefit;