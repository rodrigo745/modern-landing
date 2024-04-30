export default function NavBar(){

    const hoverNavP = "hover:border-b-2 hover:border-orange-500 cursor-pointer transition"

    return(
        <div className="w-full flex justify-between z-50 text-white">
            <div className="flex md:space-x-20 ">
                <h2 className="font-bold text-2xl mt-1 cursor-pointer text-orange-500">RJQ</h2>
                <div className="hidden lg:flex  xl:space-x-20 md:space-x-10 mt-2 lg:text-md xl:text-xl font-extralight">
                    <p className="border-b-2 border-orange-500 cursor-pointer">inicio</p>
                    <p className={hoverNavP}>¿Que es RJQ?</p>
                    <p className={hoverNavP}>Open AI</p>
                    <p className={hoverNavP}>Estudios</p>
                    <p className={hoverNavP}>Librerias</p>
                </div>
            </div>
            <div className="space-x-4">
                <button className="hover:bg-orange-600 p-2 rounded-md transition">Iniciar sesión</button>
                <button className="bg-orange-600 p-2 rounded-md">Crear cuenta</button>
            </div>
        </div>
    )
}