"use client";

import Topbar from "@/components/Topbar";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Home() {
  return (
    <main className="relative flex min-h-screen min-w-screen flex-col items-center">
      <Topbar />
      <div className="page flex items-center justify-center px-24 max-md:flex-col max-md:gap-4 max-md:h-full max-md:my-10">
        <div className="home-page-phone">
          <Image
            src="/imgs/broken-phone.png"
            alt="Broken phone"
            width={396}
            height={774}
          />
          <div className="shadow"></div>
          <h2>Antes</h2>
        </div>
        <h1 className="title px-36">Feito para pessoas exigentes.</h1>
        <div className="home-page-phone">
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
      <div className="page max-md:h-auto max-md:my-16">
        <h1 id="servicos" className="title">
          Serviços
        </h1>
        <div className="flex justify-center items-center gap-60 max-md:flex-col max-md:gap-24 max-md:mt-10">
          <div className="flex flex-col gap-20 mt-10">
            <div className="item-container">
              <div className="img-section">
                <Image
                  src="/imgs/front-phone.png"
                  alt="Celular com a tela na frente"
                  width={180}
                  height={347}
                />
              </div>
              <p>Troca de telas</p>
            </div>
            <div className="item-container">
              <div id="conector" className="img-section">
                <Image
                  src="/imgs/charge-connection.png"
                  alt="Conectores"
                  width={522}
                  height={241}
                />
              </div>
              <p>Conectores</p>
            </div>
          </div>
          <div className="flex flex-col gap-28">
            <div className="item-container mt-16">
              <div id="camera" className="img-section">
                <Image
                  src="/imgs/camera.png"
                  alt="Câmera de Samsung Galaxy S"
                  width={472}
                  height={216}
                />
              </div>
              <p>Câmeras</p>
            </div>
            <div className="item-container">
              <div className="img-section">
                <Image
                  src="/imgs/battery.png"
                  alt="Bateria de celular iPhone"
                  width={282}
                  height={408}
                />
              </div>
              <p>Baterias</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page my-16">
        <h1 id="contato" className="title">
          Contato
        </h1>
        <div className="contato-links">
          <a
            href="https://api.whatsapp.com/send?phone=5511943636727&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
          >
            Fale direto com o técnico!
            <WhatsAppIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/conecta-mais-tech/"
            target="_blank"
          >
            Página Oficial LinkedIn
            <LinkedInIcon />
          </a>
          <a href="https://instagram.com/conectamaistech/" target="_blank">
            Siga o nosso Instagram!
            <InstagramIcon />
          </a>
        </div>
        <div className="flex justify-center items-center p-4 max-md:mx-5 mx-16 my-10 border border-0.5 bg-sky-200 text-gray-800 rounded-2xl animation animate-bounce duration-200 hover:bg-gray-300 hover:text-sky-700">
          <a href="https://forms.gle/kBP2j9Fzi2ocuisW8" target="_blank">
            Entre em contato direto com o formulário! Orçamento gratuito.
            <ArrowOutwardIcon />
          </a>
        </div>
      </div>
      <div className="page max-md:mt-20 max-md:mb-24">
        <h1 id="nossa-historia" className="title">
          Nossa História
        </h1>
        <p className="text-center py-20 px-32 text-4xl max-md:py-10 max-md:px-8">
          Somos uma empresa motivada e inovadora, trazendo comforto e segurança
          em nossos serviços. Temos sede de vencer desafios e correr para
          soluções. Juntos somos uma equipe especializada para te ajudar.
        </p>
      </div>
      <footer className="bg-slate-200 w-full p-10 absolute bottom-0 left-0 right-0">
        <p className="flex justify-center">
          Todos os direitos reservados. Conecta Mais Tech 2023 ®
        </p>
      </footer>
    </main>
  );
}
