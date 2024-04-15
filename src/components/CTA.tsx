import {
    Logo
} from "../assets";
import Button from "../common/components/Button";
import { FaArrowRight } from "react-icons/fa6";
import styles from "../styles";
import { useTranslation } from "react-i18next";

const CTA = () => {
    const {t} = useTranslation();
    return (
        <div className="flex justify-center items-center sm:p-8 p-4 sm:mb-10 mb-6">
            <div
                className="rounded-lg w-full"
                style={{
                    background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(255, 92, 0, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%)',
                    border: '1px solid #FF5C00',
                }}
            >
                <div className="flex flex-col items-center p-2 sm:my-10 my-5 sm:px-20 px-10">
                    <img src={Logo} alt="Logo" className="h-20 w-20" />
                    <div className="px-2 w-full items-center mb-6">
                        <h1 className='text-center font-bold font-medievalSharp  text-primaryTextColor sm:text-[35px] text-[25px] leading-normal py-6'>{t("CTATitle")}</h1>
                        <p className={`${styles.paragraph} text-center w-full`}>
                            {t("CTADesc")}
                        </p>
                    </div>
                    <Button
                        style="mt-0 flex font-medievalSharp"
                        title={t("CTAButton")}
                        onClick={() => window.location.href = "https://t.me/forge_avax_bot?start=DEFAULT"}
                        icon={<FaArrowRight className='ml-4 mt-1' />}
                    />

                </div>
            </div>
        </div>
    );
}

export default CTA;