
import { twiter } from '../assets';

interface cardTestimonialProps {
    id: string;
    name: string;
    username: string;
    testimonial: string;
    image: string;
    link: string;
}

const CardTestimonial: React.FC<cardTestimonialProps> = ({ id, name, username, testimonial, image, link }) => {
    return (
        <div
            id={id}
            className='w-full flex  cursor-pointer'
            onClick={() => window.open(link, '_blank')}
        >

            <div className="text-center"
                style={{
                    borderRadius: '0.3125rem 0.3125rem 7.5rem 0.3125rem',
                    border: '2px solid #FF5C00'
                }}>
                <div className='flex justify-end w-full'>
                    <img src={twiter} alt="" className='w-[50px]'/>
                </div>
                <div className=' px-4 pb-4 flex'>
                    <img src={image} alt="#"
                        className='justify-start'
                    />
                    <div className=" items-start p-2 ml-4">
                        <h1 className='font-montserrat font-normal text-white text-[14px'>{name}</h1>
                        <h1 className='font-montserrat font-normal text-start text-dimWhite text-[10px]'>{username}</h1>
                    </div>
                </div>
                <div className='pl-4 pr-6 mb-8 w-full '>
                    <div className=' w-full'>
                        <p className='text-dimWhite text-[12px] text-left text-wrap leading-normal'>{testimonial}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardTestimonial;

