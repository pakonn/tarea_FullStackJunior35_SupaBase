import Link from "next/link";
import { CardCharacter } from "../components";
import { supabase } from "../repositories/supabase"


export default async function page() {
    //Voy a obtener todos los personajes favoritos
    const {data:favoritos,error} = await supabase.from("favoritos").select("*");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
              <Link href="/" className="bg-blue-600 text-white font-bold rounded-xl">
              Volver al inicio
              </Link>
        <div className="grid grid-cols-4 gap-4">
          {favoritos?.map((pj) => { 
              return <CardCharacter key={pj.id} id={pj.character_id} nombre={pj.name} imagen={pj.image} estado={pj.status}/>
          })}        
        </div>      

      </div>
    </div>
  )
}
