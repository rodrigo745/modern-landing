import Image from "next/image";
import NavBar from "@/components/navBar/navBar";
import Header from "@/components/header/header";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-20 py-10 px-4">
    <NavBar/>      
    </main>
  );
}
