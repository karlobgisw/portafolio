import { PortfolioItem } from "./portolio-item"
import { PortfolioItemWorking } from "./portfolio-item-working"

export function Proyects(){
    return(
        <div>
            <div className="w-full h-auto bg-gradient-to-t from-[#111132] to-[#0c0c1d]">
                <div className="mx-12">
                <br />
                <br />
                <br />
                <br />
                <br />
                    <h5 className="mb-14 text-white text-[50px] tracking-[10px] font-bold max-md:text-[1.3rem] max-md:mb-[2rem]">MY <span className="text-purple-700">PROJECTS</span></h5>
                    <div className="portolfio-container grid grid-cols-[repeat(3,_1fr)] gap-10 max-md:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[repeat(1,_1fr)]">
                        <PortfolioItem title="TyperTraining" imgUrl="../src/assets/images/TyperTraining.png" gitUrl="https://github.com/karlobgisw/TyperTraining" demoUrl="https://typertraining-production-259c.up.railway.app/"></PortfolioItem>
                        <PortfolioItemWorking></PortfolioItemWorking>
                        <PortfolioItemWorking></PortfolioItemWorking>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}