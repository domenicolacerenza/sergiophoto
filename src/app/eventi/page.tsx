import Gallery from "@/components/Gallery";
import EventiPic from "@/components/pics/EventiPic";

export default function Home() {
  return (

    <main className="flex flex-col min-h-screen my-4">
      <div className="flex flex-col items-center justify-center text-center md:text-lg text-sm md:p-24 p-6 ">
      <h1 className="text-4xl font-bold pb-12">Eventi</h1>

      Servizi fotografici professionali per eventi in Puglia: matrimoni, feste private e celebrazioni esclusive.<br></br>
      Ogni immagine cattura emozioni vere, luce naturale e atmosfere mediterranee, raccontando la magia di momenti irripetibili con uno stile spontaneo ed elegante.
      </div>
      <Gallery list={EventiPic} />

    </main>

  );
}
