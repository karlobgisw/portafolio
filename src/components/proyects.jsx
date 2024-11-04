import { PortfolioItem } from "./portolio-item"
import TyperTraining from "../assets/TyperTraining.png"
import outfit from "../assets/outfit.jpeg"
import weather from "../assets/weather.png"
import TipCalculator from "../assets/TipCalculator.jpeg"

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
                        <PortfolioItem title="TyperTraining" imgUrl={TyperTraining} gitUrl="https://github.com/karlobgisw/TyperTraining.git" demoUrl="https://typertraining-production-259c.up.railway.app/"></PortfolioItem>
                        <PortfolioItem title="WeatherApp" imgUrl={weather} gitUrl="https://github.com/karlobgisw/weatherApp.git" demoUrl="https://weatherappwithkarlo.netlify.app/"></PortfolioItem>
                        <PortfolioItem title="Shoping Cart" imgUrl={outfit} gitUrl="https://github.com/karlobgisw/OUT-FIT" demoUrl="https://outfitdemo.netlify.app/"></PortfolioItem>
                        <PortfolioItem title="Tip Calculator" imgUrl={TipCalculator} gitUrl="https://github.com/karlobgisw/Calculadora-de-propinas.git" demoUrl="https://calculadora-de-totales-y-propina.netlify.app/"></PortfolioItem>
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
