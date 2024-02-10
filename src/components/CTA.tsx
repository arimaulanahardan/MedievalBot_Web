import { FaArrowRight } from "react-icons/fa";
import { bgCTA } from "../assets";
import Button from "../common/Button";

const CTA = () => {
    return (
        <section
            className="w-full mb-10 flex justify-between items-center"
            style={{
                background: `url(${bgCTA}) no-repeat center`,
                backgroundSize: "contain",
                height: "400px",
            }}
        >
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="font-montserrat font-bold text-[40px] text-white text-center max-w-[500px]">
                    Be Part of The <span className="text-secondary">Future of Trading</span>
                </h1>
                <p className="text-dimWhite text-center max-w-[500px] mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum hic eaque, fugit nulla itaque ut dolorum vitae accusamus sint.
                </p>
                <Button
                    style="mt-8 flex align-center justify-center"
                    title="Get Started"
                    onClick={() => { console.log('Button Clicked') }}
                    icon={<FaArrowRight className="ml-4 mt-1 " />}
                />
            </div>
        </section>
    )
}

export default CTA;

