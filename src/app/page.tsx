import Topbar from "@/components/Topbar";
import Image from "next/image";
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Topbar />
      <div className="flex items-center justify-center px-24 pt-3">
        <div>
          <Image
            src="/imgs/broken-phone.png"
            alt="Broken phone"
            width={396}
            height={774}
          />
          <div className="shadow"></div>
          <h2>Antes</h2>
        </div>
        <h1 className="title px-36 text-5xl text-black text-center">
          Feito para pessoas exigentes.
        </h1>
        <div>
          <Image
            src="/imgs/new-phone.png"
            alt="New phone"
            width={396}
            height={771}
          />
          <div className="shadow"></div>
          <h2>Depois</h2>
        </div>
      </div>
    </main>
  );
}
