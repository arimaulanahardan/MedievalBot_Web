import CardFeature from '../common/components/CardFeature';
import { featureBenefits } from '../constants';
import styles from '../styles';
import { Carousel, IconButton } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';

const Features = () => {
    const { t } = useTranslation();

    return (
        <section
            id='about%20us'
            className='w-full flex flex-col justify-center items-center mb-10 relative'>
            <div className='m-16 mb-5'>
                <h1 className='text-primaryTextColor font-medievalSharp font-bold sm:text-[40px] text-[25px] text-center w-full '>{t("FeatureTitle")}</h1>
                <p className={`${styles.paragraph} mt-4 w-full text-center mb-10`}>
                    {t("FeatureDesc")}
                </p>
            </div>
            <span className='absolute z-[0] -left-1/2 aspect-square w-[50%] h-[50%] rounded-full animate-pulse circle__gradient' />
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
                {featureBenefits(t).map((feature, i) => (
                    <CardFeature
                        key={i}
                        id={feature.id}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        link={feature.link}
                    />
                ))}
            </Carousel>

            <div className="w-full items-center justify-center">
                <div className="hidden sm:grid grid-cols-3 gap-10">
                    {featureBenefits(t).map((feature, i) => (
                        <CardFeature
                            key={i}
                            id={feature.id}
                            title={feature.title}
                            description={feature.description}
                            image={feature.image}
                            link={feature.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
