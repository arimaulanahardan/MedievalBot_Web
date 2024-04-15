import {
    HeroImage,
    HeroBackground,
} from "../assets";
import { socialMediaLinks, LANGUAGE } from "../constants";
import styles from "../styles";
import Button from "../common/components/Button";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { i18n, t } = useTranslation()

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value
        i18n.changeLanguage(lang_code)
    }

    return (
        <section
            id="home"
            className="w-full flex"
            style={{
                backgroundImage: `url(${HeroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <aside className="flex h-full sm:py-28 py-40 items-center border-r border-white border-opacity-50 px-4">
                <div className="grid grid-col-1 space-y-20">
                    {socialMediaLinks.map((social, i) => (
                        <a
                            key={i}
                            href={social.link}>
                            <img
                                key={social.id}
                                src={social.image}
                                className="w-[25px]  h-[25px] button"
                            />
                        </a>
                    ))}
                </div>
            </aside>
            <div className='px-6 flex sm:flex-row flex-col justify-between items-center w-full'>

                <div className="sm:hidden flex">
                    <div className="flex-col">
                        <div className="w-full text-start flex-col m-2">
                            <p
                                className="text-white font-medievalSharp text-[10px]"
                            >
                                {t("HeroLanguge")}
                            </p>
                            <div>
                                <select
                                    defaultValue={i18n.language}
                                    onChange={onChangeLang}
                                    className="button w-30 rounded-md font-medievalSharp p-1 drop-shadow-md bg-transparent duration-300 focus:ring-0 text-white border border-white border-opacity-50 text-[14px]"
                                >
                                    {
                                        LANGUAGE.map((lang, i) => (
                                            <option
                                                key={i}
                                                value={lang.code}
                                                className="text-black"
                                            >
                                                {lang.label}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <img src={HeroImage} alt="HeroImage" className="w-[550px]" />
                    </div>
                </div>
                <div className="flex-1 sm:h-[550px]">
                    <div className="hidden sm:flex flex-col  mb-8">
                        <p
                            className="text-white "
                        >
                            {t("HeroLanguge")}
                        </p>
                        <select
                            defaultValue={i18n.language}
                            onChange={onChangeLang}
                            className="button w-44 rounded-md p-2 drop-shadow-md bg-transparent duration-300 focus:ring-0 text-white border border-white border-opacity-50"
                        >
                            {
                                LANGUAGE.map((lang, i) => (
                                    <option
                                        key={i}
                                        value={lang.code}
                                        className="text-black"
                                    >
                                        {lang.label}
                                    </option>
                                ))
                            }
                        </select>

                    </div>
                    <h1 className={`${styles.heading2}`}>
                        {t("HeroTitle1")}
                        <span className='text-secondary'> {t("HeroTitle2")}</span> {" "} <span>{t("HeroTitle3")} <br className='sm:block hiden' />{t("HeroTitle4")}</span> <br className='sm:block hiden' />{" "}
                        <p className={`${styles.paragraph} text-primaryTextColor w-full sm:mt-5 mt-4`}>
                            {t("HeroParagraph")}
                        </p>
                    </h1>
                    <div className="flex sm:gap-12 gap-4 sm:mt-8 mt-4 flex-center items-center sm:justify-start justify-center">
                        <Button
                            style="mt-0 font-medievalSharp"
                            title={t("HeroButton1")}
                            onClick={() => window.location.href = "https://t.me/forge_avax_bot?start=DEFAULT"}
                        />
                        <div className="button flex rounded-[2px] px-6 py-2 border border-secondary hover">
                            <a className="sm:text-[16px] text-[12px] text-center font-medievalSharp font-normal text-secondary"
                                onClick={() => window.open('https://forgebot.gitbook.io', '_blank')}
                            >
                                {t("HeroButton2")}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:flex items-end justify-end">
                    <img src={HeroImage} alt="HeroImage" className="sm:w-[450px] w-[350px]" />
                </div>
            </div>
        </section>
    )

}

export default Hero;