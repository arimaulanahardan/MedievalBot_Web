import CardBenefit from '../common/components/CardBenefit';
import { benefits } from '../constants';
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import { Carousel, IconButton } from "@material-tailwind/react";

const Benefit = () => {
    const {t} = useTranslation();
    return (
        <section
            id='services'
            className='w-full flex flex-col justify-center items-center pb-8'
            style={
                {
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                }
            }
        >
            <div className='m-10 mb-5'>
                <h1 className='text-white font-medievalSharp  font-bold sm:text-[40px] text-[25px] sm:text-left text-center sm:w-[600px] w-full'>{t("BenefitTitle")}</h1>
                <p className={`${styles.paragraph} mt-4 sm:w-[80%] sm:text-left text-center w-full`}>{t("BenefitDesc")}
                </p>
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
                    {benefits(t).map((benefit, i) => (
                        <CardBenefit
                            key={i}
                            id={benefit.id}
                            title={benefit.tittle}
                            description={benefit.description}
                        />
                    ))}
                </Carousel>
            <div className="hidden sm:grid grid-cols-4 w-full gap-4 px-4">
                {benefits(t).map((benefit, i) => (
                    <CardBenefit
                        key={i}
                        id={benefit.id}
                        title={benefit.tittle}
                        description={benefit.description}
                    />
                ))}
            </div>
        </section >
    )
}

export default Benefit;