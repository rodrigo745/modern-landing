export default function NavBar(){
    return(
        <div className="w-full flex justify-end lg:justify-between">
            <div className="hidden lg:flex md:space-x-10 ">
                <h2 className="font-bold text-xl mt-1">RJQ</h2>
                <div className="lg:flex md:space-x-10 mt-2">
                    <p>inicio</p>
                    <p>¿Que es RJQ?</p>
                    <p>Open AI</p>
                    <p>Estudios</p>
                    <p>Librerias</p>
                </div>
            </div>
            <div className="space-x-4">
                <button className="hover:bg-orange-600 p-2 rounded-md transition">Iniciar sesión</button>
                <button className="bg-orange-600 p-2 rounded-md">Crear cuenta</button>
            </div>
        </div>
    )
}