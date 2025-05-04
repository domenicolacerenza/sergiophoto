import Gallery from "@/components/Gallery";
import InterniPic from "@/components/pics/InterniPic";

export default function Home() {
  return (

    <main className="flex flex-col min-h-screen my-4">
      <div className="flex flex-col items-center justify-center text-center md:text-lg text-sm md:p-24 p-6 ">
      <h1 className="text-4xl font-bold pb-12">Interni</h1>

        Scopri una selezione di fotografia professionale di interni in Puglia, dedicata a masserie, ville, B&B e residenze mediterranee.<br></br>
        Ambienti luminosi, dettagli architettonici e materiali naturali raccontati con uno stile autentico ed elegante.<br></br>
        Ideale per valorizzare spazi di ospitalità di alto livello attraverso immagini che trasmettono bellezza, calore e identità.
      </div>
      <Gallery list={InterniPic} />

    </main>

  );
}
