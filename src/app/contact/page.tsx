import Link from "@/components/Link"

export default function Home() {
  return (

    <main className="flex flex-col min-h-screen ">
      <div className="">
          <img
            className="w-full h-[50vh] object-cover"
            src="/img/hero.jpeg"
            alt="Hero Image">

            </img>
            
          </div>
      <div className="max-w-6xl m-auto p-12">
        <h1 className="text-3xl font-bold mb-4">Contatti</h1>
        <p className="text-lg">Se hai domande o vuoi collaborare, non esitare a contattarmi!</p>
        <p className="text-lg">Puoi anche seguirmi sui social media per rimanere aggiornato sui miei ultimi progetti.</p>
        <p className="text-lg">Sono sempre aperto a nuove opportunità e collaborazioni, scrivimi!</p>
        <br></br><br></br>
        <p>Email: <a className="hover:text-red-500" href="mailto:sergiozizzi.photo@gmail.com">sergiozizzi.photo@gmail.com</a></p>
        <p>Instagram: <a className="hover:text-red-500" href="https://instagram.com/sergiozizziphoto" target="_blank">@sergiozizziphoto</a></p>
        <p>LinkedIn: <a className="hover:text-red-500" href="https://linkedin.com/in/sergiozizzi" target="_blank">/sergiozizzi</a></p>
        <p>Telefono: <a className="hover:text-red-500" href="tel:+393315720878">+39 331 572 0878</a></p>
        <Link></Link>
      </div>
     
    </main>

  );
}
