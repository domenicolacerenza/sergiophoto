
export default function Home() {
  return (

    <main className="flex flex-col lg:flex-row min-h-screen place-items-center justify-center">
      <div className="">
        <img
          className="w-[50vh] h-full object-cover shadow-md rounded-2xl m-auto p-8"
          src="/img/me-autoscatto-chisono-profilo-fotografo.jpg"
          alt="Ritratto di Sergio Zizzi, fotografo professionista in Puglia">

        </img>

      </div>
      <div className="w-[50vh] p-8">
        <h1 className="text-4xl font-bold py-4">Chi Sono</h1>
        <div className="text-lg text-left py-4">
          Fotografo professionista specializzato in fotografia di interni e architettura in Puglia. Mi occupo di valorizzare ambienti unici come masserie, dimore storiche, bed & breakfast, ville e strutture ricettive attraverso immagini naturali, luminose ed emozionali.<br></br>
          Collaboro con architetti, interior designer e property manager per raccontare l’identità autentica di ogni spazio, con uno stile visivo pulito ed elegante. <br></br> <br></br>Ogni progetto fotografico nasce per comunicare la bellezza del territorio e dell’accoglienza mediterranea.
          Realizzo servizi fotografici professionali per siti web, social media, cataloghi, Airbnb, Booking ed editoria online. Lavoro principalmente tra la Valle d'Itria, il Salento, Ostuni e lungo la costa adriatica, ma sono disponibile a spostarmi su richiesta!
        </div>
      </div>
    </main>

  );
}