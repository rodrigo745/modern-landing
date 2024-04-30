import Image from "next/image";
import NavBar from "@/components/navBar/navBar";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Esferas from "@/components/esferas";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:p-20 xl:px-32 py-10 px-4 ">
      <Esferas lado="left-0 z-0"/>
      <NavBar/>      
      <Header/>
      <div className="esfera2 absolute right-72 top-[34vh]"></div>
      <Image src="/empresas.svg" width={600} height={200} alt="empresas" className="mt-16 md:mt-32"/>
      <div className="overflow-hidden w-full h-full z-0">
        <div className="esfera2 absolute right-0 "></div>
      </div>
      <Main/>
      <div className="overflow-hidden w-full h-full z-0">
        <div className="esfera3 absolute right-0 "></div>
      </div>
    </main>
  );
}
