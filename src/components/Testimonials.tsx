import CardTestimonial from "../common/components/CardTestimonials"
import { testimonials } from "../constants"
import { TestimonialBackground } from "../assets"
import { Carousel, IconButton } from "@material-tailwind/react";

const Testimonials = () => {
    return (
        <section
            id="Testimonial"
            className="w-full flex flex-col justify-center items-center pb-10 relative"
            style={{
                backgroundImage: `url(${TestimonialBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="items-center">
                <h1 className='text-primaryTextColor font-medievalSharp font-bold sm:text-[40px] text-[25px] text-center sm:w-full p-6'>
                    Testimonials
                </h1>
            </div>
                <Carousel
                    className="rounded-xl pb-14 sm:hidden"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-6 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-2 cursor-pointer rounded-full transition-all content-[''] ${activeIndex === i ? "w-8 bg-secondary" : "w-4 bg-white/50"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    {testimonials.map((testimonial, i) => (
                        <CardTestimonial
                            key={i}
                            id={testimonial.id}
                            name={testimonial.name}
                            username={testimonial.username}
                            description={testimonial.description}
                            image={testimonial.image}
                            link={testimonial.link}
                        />
                    ))}
                </Carousel>
                <div className="items-center justify-center w-full">
                    <div className="hidden sm:grid grid-cols-3 gap-6 mx-4">
                        {testimonials.map((testimonial, i) => (
                            <CardTestimonial
                                key={i}
                                id={testimonial.id}
                                name={testimonial.name}
                                username={testimonial.username}
                                description={testimonial.description}
                                image={testimonial.image}
                                link={testimonial.link}
                            />
                        ))}
                    </div>
                </div>
        </section>
    )
}

export default Testimonials;
