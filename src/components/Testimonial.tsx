import CardTestimonial from "../common/CardTestimonial";
import { testimonials } from "../constants";
import styles from "../styles";

const Testimonial = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center mb-10'>
            <div className='m-10 mb-5'>
                <h1 className='text-white font-montserrat font-bold text-[40px] text-center w-full '>Testimonials</h1>
                <p className={`${styles.paragraph} mt-4 w-full text-center px-44 mb-10`}>
                    Harken, trader of the future! Doth manual trading leave you weary, yearning for automated triumphs?
                    Fear not, for Medieval Robotic presents your valiant solution – a Telegram bot forged in the fires of innovation, ready to guide you to Solana riches!
                </p>
            </div>
            <div className="flex gap-2 overflow-x-auto">
                {testimonials.map((testimonial, i) => (
                    <CardTestimonial
                        id={testimonial.id}
                        name={testimonial.name}
                        username={testimonial.username}
                        testimonial={testimonial.testimonial}
                        image={testimonial.image}
                        link={testimonial.link}
                    />
                ))}
            </div>
            <div className='absolute z-[0] -right-1/2  w-[50%] h-[50%] rounded-full circle__gradient' />
        </section>
    )
}

export default Testimonial;
