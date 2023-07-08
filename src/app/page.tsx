"use client";

import Topbar from "@/components/Topbar";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <Topbar />
      <div className="page flex items-center justify-center px-24">
        <div className="mt-4">
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
      <div className="page">
        <h1 id="servicos" className="title">
          Serviços
        </h1>
        <div className="flex justify-center items-center gap-60">
          <div className="flex flex-col gap-20">
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
              <div className="img-section">
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
          <div className="flex flex-col gap-20">
            <div className="item-container">
              <div className="img-section">
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
      <div className="page">
        <h1 id="contato" className="title">
          Contato
        </h1>
        <div className="contato-links">
          <a href="https://api.whatsapp.com/send?phone=5511943636727&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento!">
            Fale direto com o técnico!
            <WhatsAppIcon />
          </a>
          <a href="https://www.linkedin.com/company/conecta-mais-tech/">
            Página Oficial LinkedIn
            <LinkedInIcon />
          </a>
          <a href="https://instagram.com/conectamaistech/">
            Siga o nosso Instagram!
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="page">
        <h1 id="nossa-historia" className="title">
          Nossa História
        </h1>
        <p className="text-center py-20 px-32 text-4xl ">
          Somos uma empresa motivada e inovadora, trazendo comforto e segurança
          em nossos serviços. Temos sede de vencer desafios e correr para
          soluções. Juntos somos uma equipe especializada para te ajudar.
        </p>
      </div>
      <footer className="bg-slate-200 w-full p-10 flex justify-center">
        Todos os direitos reservados. Conecta Mais Tech 2023 ®
      </footer>
    </main>
  );
}
