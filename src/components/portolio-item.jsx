export function PortfolioItem({title, imgUrl, gitUrl, demoUrl}){
    return(
    <article className="portfolio-item bg-[#130f2a] p-5 rounded-[2rem] border-2 border-solid border-[#6852ba] transition-all duration-500 ease-in-out">
        <div className="portfolio-item-image rounded-3xl overflow-hidden ">
            <img src={imgUrl} alt="TyperTraining"/>
        </div>
        <h3 className="mt-[1.2rem] mx-[0] mb-8 text-[#6751b9] font-extrabold text-[1.3rem]">{title}</h3>
        <div className="portfolio-cta flex gap-4 mb-4">
            <a href={gitUrl} className=" p-3 border border-[#6751b9] rounded-xl bg-transparent text-[#6751b9] font-bold mr-1 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-white" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 fill-[#6751b9]" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                GitHub
            </a>
            <a href={demoUrl} className="  p-3 border border-[#6751b9] rounded-xl bg-transparent text-[#6751b9] font-bold mr-1 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-white" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 fill-[#6751b9]" width="16" height="16" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
                Demo
            </a>
        </div>
    </article>
    )
}