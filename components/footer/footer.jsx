export default function Footer() {
    return(
        <div className="bg-cyan-950 w-[96vw] lg:w-[99vw] h-full relative  mt-52 p-10">
            <div className="flex flex-col w-full items-center py:20 lg:py-10">
                <h4 className="text-4xl lg:text-5xl font-bold text-orange-400 text-center">Puedes encontrar el futuro antes que otros</h4>
                <button className="px-8 py-3 text-xl border-2 rounded-sm mt-16 
                        hover:bg-orange-500 transition">Pedir acceso</button>
                <div className="flex flex-col  lg:flex lg:flex-row lg:justify-center content-center items-center w-full lg:px-52 mt-20">
                    <div className="text-5xl font-bold mt-0 text-center pl-20 cursor-pointer">RJQ+</div>
                    <div className="flex w-full justify-center mt-20 lg:mt-0 lg:space-x-60 space-x-10 lg:ml-44">

                    <div className="space-y-6 cursor-pointer">
                        <p>Enlaces</p>
                        <p>Contacto</p>
                        <p>Sobre nosotros</p>
                        <p>Recursos</p>
                        <p>Contadores</p>
                    </div>
                    <div className="space-y-6 cursor-pointer">
                        <p>Galería</p>
                        <p>Ubicación</p>
                        <p>Personajes</p>
                        <p>Variado</p>
                    </div>
                    <div className="space-y-6 cursor-pointer">
                        <p>Otros</p>
                        <p>Listado</p>
                        <p>Numeros</p>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}