

export function Button({title, seccion}){
    return(
        <a href={seccion} className=" p-5 border border-white rounded-xl bg-transparent text-white mr-5 max-xl:mr-10 max-xl:ml-10 cursor-pointer font-light max-xl:w-32 max-sm:mr-2 max-sm:ml-2 hover:bg-white hover:text-[#0c0c1d] transition-all duration-500">{title}</a>
    )
}