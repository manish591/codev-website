import Image from "next/image";
import Wrapper from "../Wrapper";

export default function HeroSection() {
    return (
        <div id="home">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-[6rem] gap-[2rem] lg:gap-0 items-center">
                    <div>
                        <h1 className="text-[2rem] text-center lg:text-left lg:text-[3.5rem] font-semibold leading-tight">
                            We Are Enthusiastic Coders From Graphic Hill University Dehradun
                        </h1>
                    </div>
                    <div>
                        <Image alt="hero" src="/hero.svg" width="500" height="500" />
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
