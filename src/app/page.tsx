import Gallery from "@/components/Gallery";
import { PortfolioCard } from "@/components/PortfolioCard";
import HomePic from "@/components/pics/HomePic";

export default function Home() {
  return (

    <main className="flex flex-col mb-12">

      <div className="flex flex-col items-center justify-center text-center mb-12">
        <div className="relative w-full h-[50vh]">
          <img
            className="w-full h-full object-cover"
            src="/img/ritratto-sergio-zizzi-fotografo-puglia.jpg"
            alt="Sergio Zizzi - Fotografo Puglia - ritratto professionale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <h1 className="relative text-6xl gilda-display-regular lg:-mt-24 -mt-36 text-white">
          Sergio Zizzi Photography
        </h1>

      </div>
      <div className="flex flex-col items-center justify-center text-center md:text-lg text-sm md:p-24 p-6 ">
        Scopri la luce e l’anima degli spazi pugliesi.<br></br>
        Ogni immagine racconta un luogo, un’atmosfera, una storia autentica.<br></br>
        In questa galleria trovi una selezione di scatti professionali dedicati a masserie di charme,<br></br> trulli, B&B di design e residenze mediterranee, fotografati con cura per esaltare luce naturale, materiali locali e architetture senza tempo.<br></br>
        Lavoro con realtà che vogliono distinguersi nel settore dell’ospitalità di qualità attraverso contenuti visivi autentici e raffinati.<br></br>
Fotografia di interni, architettura e paesaggio in Puglia, pensata per valorizzare il tuo spazio.
              </div>
      <Gallery list={HomePic} />
      
      <h1 className="flex flex-col items-center justify-center text-center text-6xl md:p-32 p-6 ">
          Servizi
        </h1>
        
        <div className="flex flex-wrap mx-auto place-content-center gap-8 p-8">
      <PortfolioCard title={"Interni"} subtitle={"Fotografia d’interni in Puglia: eleganza naturale e atmosfera autentica."}  link={"/interni"} imgSrc={"/img/villa-masseria-puglia-interni.jpg"} />
      <PortfolioCard title={"Eventi"} subtitle={"Eventi speciali in Puglia: emozioni autentiche in ogni scatto."}  link={"/eventi"} imgSrc={"/img/foto-eventi.masseria.puglia.jpg"} />
      </div>
      
    </main >

  );
}
