import {
    header,
} from "../assets";
import { socialMediaLinks } from "../constants";
import styles from "../styles";
import Button from "../common/Button";
import { FaRegPlayCircle } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="w-full flex justify-between items-center hero">
            <aside className="flex flex-col gap-4 h-[100%] py-44 items-center border-r border-white border-opacity-50 cursor-pointer">
                {socialMediaLinks.map((social, i) => (
                    <a href={social.link}>
                        <img
                            key={social.id}
                            src={social.image}
                            className="w-[80px] h-[80px]"
                        />
                    </a>
                ))}
            </aside>
            <div className='px-6 flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-montserrat font-bold ss:text-[60px] text:[50px] text-white'>
                    Forge {" "}
                    <span className='text-secondary'>Your Fortune</span> <br className='sm:block hidden' />{" "} <span className='text-white'>In The Digital</span> <br className='sm:block hiden' />{" "} <span className='text-white'>Arena</span>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum hic eaque, fugit nulla itaque ut dolorum vitae accusamus sint.
                    </p>
                    <div className="flex gap-12 pt-8">
                        <Button
                            style="mt-0"
                            title="Get Started"
                            onClick={() => { console.log('Button Clicked') }}
                        />
                        <div className="flex rounded-[2px] px-6 py-2 border border-secondary hover">
                            <a className="text-[16px] text-center font-normal text-secondary" href="#">
                                Watch Video
                            </a>
                            <FaRegPlayCircle className="text-secondary text-[20px] ml-4" />
                        </div>
                    </div>
                </h1>
                <img src={header} alt="header" className="w-[550px] object-contain" />
            </div>
            <div className='absolute z-0 -right-1 w-[40%] h-[40%] rounded-full circle__gradient' />
        </section>
    )

}

export default Hero;