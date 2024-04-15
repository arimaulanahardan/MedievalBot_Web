import {
    socialMediaLinks,
} from "../constants";
import { useTranslation } from "react-i18next";


const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className="w-full sm:px-8 px-2" style={{borderTop: '1px solid white'}}>
            <div className="flex justify-between items-center">
                <div className="flex items-center w-full sm:gap-24 gap-6">
                    {socialMediaLinks.map((social) => {
                        return (
                            <div
                                key={social.id}
                                className="button py-3"
                                onClick={() => window.open(social.link)}
                            >
                                <img src={social.image} alt={social.id} className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"

                                />
                            </div>
                        )
                    })}
                </div>
                <div className="flex items-center w-full flex-end justify-end">
                    <a href="/term&condition" className="text-dimWhite font-medievalSharp hover:text-white hover:underline sm:text-[18px] text-[14px] font-normal">{t("Terms&Conditions")}</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
