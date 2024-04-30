import Image from "next/image";
import NavBar from "@/components/navBar/navBar";
import Header from "@/components/header/header";
import Esferas from "@/components/esferas";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:p-20 xl:px-32 py-10 px-4 ">
      <Esferas lado="left-0 z-0"/>
      <NavBar/>      
      <Header/>
      <Esferas lado="right-20 top-[40vh] z-0"/>
      <Image src="/empresas.svg" width={600} height={200} alt="empresas" className="mt-16 md:mt-32"/>
    </main>
  );
}
