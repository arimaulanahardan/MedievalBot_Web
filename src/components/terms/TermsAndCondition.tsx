import {
    Logo
} from "../../assets";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
    const {t} = useTranslation();
    return (
        <div className="flex flex-col justify-between items-center sm:my-4 my-2 sm:px-20 px-6">
            <div className="relative flex flex-col items-center sm:p-2 sm:mt-4 mt-2 ">
                <div className="sm:px-2 w-full items-center mb-6">
                    <h1 className='text-center font-bold font-medievalSharp text-primaryTextColor sm:text-[35px] text-[20px] sm:pt-6 p-1'>{t("TermsTitle")} </h1>
                    <h1 className='text-center font-bold font-medievalSharp text-primaryTextColor sm:text-[35px] text-[20px] pb-8'>{t("TermsHeader1")}</h1>
                    <p className="text-justify w-full font-medievalSharp text-primaryTextColor sm:text-[18px] text-[14px]">
                       {t("TermsDesc1")}
                    </p>
                </div>
                <img src={Logo} alt="Logo" className="h-60 w-60" />
                <div className="flex items-center flex-col w-full">
                    <div className="my-4">
                        <h1 className="text-center font-semibold text-primaryTextColor font-medievalSharp sm:text-[25px] text-[18px] pb-4">{t("TermsHeader2")}</h1>
                        <p className="w-full text-primaryTextColor sm:text-[18px] font-medievalSharp text-[14px] text-justify ">{t("TermsDesc2")}</p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-center font-semibold font-medievalSharp text-primaryTextColor sm:text-[25px] text-[18px] mb-4">{t("TermsHeader3")}</h1>
                        <p className="w-full text-primaryTextColor font-medievalSharp sm:text-[18px] text-[14px] text-justify ">{t("TermsDesc3")}</p>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default TermsAndConditions;