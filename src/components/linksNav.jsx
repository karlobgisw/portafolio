export function Links({nombre, seccion}){
    return(
        <a href={seccion} className="flex items-center justify-center text-lg text-purple-700 hover:text-purple-500 cursor-pointer">{nombre}</a>
    )
}