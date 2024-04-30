import Esferas from "../esferas"

export default function Main(){
    return(
        <div className="mt-20 w-full px-4 z-50">
            <div className="bg-slate-800 p-8 py-16 lg:p-12 lg:py-24 w-full shadow-sm shadow-blue-900">
                <div className="flex flex-col lg:flex lg:flex-row lg:justify-between z-50">
                    <div className="w-[60%]">
                        <p className="border-t-4 w-14 lg:w-16 border-orange-500"></p>
                        <h4 className="text-xl lg:text-2xl mt-1 font-bold">¿Que es RJQ?</h4>
                    </div>
                    <p className="text-slate-400 text-lg mt-6 lg:mt-0">La luz de la luna se filtraba por la ventana, arrojando sombras danzantes sobre los muebles polvorientos y las cortinas desgarradas. En el centro de la habitación, un antiguo escritorio de madera se erguía como un testigo silencioso de tiempos pasados.</p>
                </div>
                
                <div className="mt-10 md:mt-20 flex flex-col lg:flex lg:flex-row lg:justify-between z-50">
                    <h4 className="text-4xl font-bold text-orange-400 lg:w-[50%] ">A las posibilidades solo las limita tu imaginación</h4>
                    <h4 className="text-xl mt-10 lg:mt-10 cursor-pointer border-b-2 border-orange-500 w-fit">Explora la librería</h4>
                </div>
                <div className="mt-10 md:mt-20 flex flex-col lg:flex lg:flex-row z-50 lg:justify-between space-y-10 lg:space-y-0 lg:space-x-10">
                    <div>
                        <div className="w-[100%]">
                            <p className="border-t-4 w-14 lg:w-16 border-orange-500"></p>
                            <h4 className="text-xl lg:text-2xl mt-1 font-bold">Chatbots</h4>
                        </div>
                        <p className="mt-4 text-slate-400 font-medium">El aroma del café recién hecho flotaba en el aire, tentador y reconfortante. Ana se dirigió a la pequeña cocina y llenó una taza con el líquido oscuro.</p>
                    </div>
                    <div>
                        <div className="w-[100%]">
                            <p className="border-t-4 w-14 lg:w-16 border-orange-500"></p>
                            <h4 className="text-xl lg:text-2xl mt-1 font-bold">Algo más</h4>
                        </div>
                        <p className="mt-4 text-slate-400 font-medium">El aroma del café recién hecho flotaba en el aire, tentador y reconfortante. Ana se dirigió a la pequeña cocina y llenó una taza con el líquido oscuro.</p>
                    </div>
                    <div>
                        <div className="w-[100%]">
                            <p className="border-t-4 w-14 lg:w-16 border-orange-500"></p>
                            <h4 className="text-xl lg:text-2xl mt-1 font-bold">Educación</h4>
                        </div>
                        <p className="mt-4 text-slate-400 font-medium">El aroma del café recién hecho flotaba en el aire, tentador y reconfortante. Ana se dirigió a la pequeña cocina y llenó una taza con el líquido oscuro.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}