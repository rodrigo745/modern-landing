import Image from "next/image"

export default function Header(){
    return(
        <div className="flex flex-col-reverse lg:flex lg:flex-row lg:justify-between items-center w-full mt-20 z-50">
            <div className="w-full md:w-[50%]">
                <h2 className="text-4xl md:text-6xl font-bold text-orange-500">Construyamos algo increíble con RJQ de OpenAI</h2>
                <p className="mt-10 text-lg text-slate-400  md:pr-20 or-4">Aunque había una cama disponible para cualquier asistencia durante los viajes, no era agradable. No había pensamientos en absoluto que bendijeran todo ejercicio. La indulgencia era todo un cambio alegre y bullicioso en el apego. Durante años, hemos permitido a la fiesta preguntar sobre el orden.</p>
                <div className="mt-10 rounded-md">
                    <input type="text" className="p-2 rounded-l-md  w-[60%] md:w-[40%] bg-slate-700" placeholder="Ingresa tu correo"/>
                    <button className="p-2 px-4 bg-orange-600 rounded-r-md text-white">Obtener</button>
                </div>
                <div className="flex-col md:flex md:flex-row mt-10 w-full">
                    <div className="flex">

                        <div className="bg-slate-500 w-8 h-8 border-2 border-white rounded-full text-center">A</div>
                        <div className="bg-slate-500 relative right-2 w-8 h-8 border-2 border-white rounded-full  text-center">B</div>
                        <div className="bg-slate-500 relative right-4 w-8 h-8 border-2 border-white rounded-full  text-center">C</div>
                        <div className="bg-slate-500 relative right-6 w-8 h-8 border-2 border-white rounded-full  text-center">D</div>
                        <div className="bg-slate-500 relative right-8 w-8 h-8 border-2 border-white rounded-full  text-center">E</div>
                        <div className="bg-slate-500 relative right-10 w-8 h-8 border-2 border-white rounded-full text-xs p-1.5">16+</div>
                    </div>
                    <p className="ml-6 md:ml-0 text-xs mt-2 relative right-6">1,600 personas solicitaron acceso a una visita en las últimas 24 horas.</p>
                </div>
            </div>
            <div className="text-white">
                <Image src="/rostro.svg" width={640} height={500} alt="rostro" className="md:w-[40vw] xl:w-[30vw] sm:mr-20 md:mr-32 lg:mr-40"/>
            </div>
        </div>
    )
}