import React from 'react'
import {Avatar} from "@nextui-org/avatar"
import Link from 'next/link'

function Categories() {
  return (
    <div>
        <h1 style={{fontSize: '24px'}} className='text-center text-black'>Categorias</h1>
        <div className='flex flex-col gap-10 w-full'>
            <div className="w-full card-container">
                <Link href='/productos/tipo/pantalon' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/pantalon.jpg" /><p>Pantalon</p></Link>
                <Link href='/productos/tipo/crop top' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/crop-top.jpg" /><p>Crop Top</p></Link>
                <Link href='/productos/tipo/pijama' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/pijama.jpg" /><p>Pijama</p></Link>
                <Link href='/productos/tipo/falda' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/falda.jpg" /><p>Falda</p></Link>
                <Link href='/productos/tipo/vestido' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/vestido.jpg" /><p>Vestido</p></Link>

                <Link href='/productos/tipo/blazer' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/blazer.jpg" /><p>Blazer</p></Link>
            <Link href='/productos/tipo/blusa' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/blusa.jpg" /><p>Blusa</p></Link>
            <Link href='/productos/tipo/camisa' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/camisa.jpg" /><p>Camisa</p></Link>

            <Link href='/productos/tipo/set' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/set.jpg" /><p>Set</p></Link>
            <Link href='/productos/tipo/zapatos' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/zapatos.jpg" /><p>Zapatos</p></Link>
            <Link href='/productos/tipo/leggins' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/leggins.jpg" /><p>Leggins</p></Link>

            </div>
            <div className="w-full card-container">
            <Link href='/productos/tipo/playa' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/playa.jpg" /><p>Playa</p></Link>
            <Link href='/productos/tipo/sueter' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/sueter.jpg" /><p>Sueter</p></Link>
            <Link href='/productos/tipo/short' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/short-mujer.jpg" /><p>Short</p></Link>
            <Link href='/productos/tipo/mono' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/mono-mujer.jpg" /><p>Mono</p></Link>
            <Link href='/productos/tipo/franela' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/franela.jpg" /><p>Franela</p></Link>
            <Link href='/productos/tipo/chaqueta' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/chaqueta.jpg" /><p>Chaqueta</p></Link>
            <Link href='/productos/tipo/conjuntos' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/conjuntos.jpg" /><p>Conjuntos</p></Link>

            <Link href='/productos/tipo/enterizo' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/enterizo.jpg" /><p>Enterizo</p></Link>
            <Link href='/productos/tipo/sobretodo' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/sobretodo.jpg" /><p>Sobretodo</p></Link>
            <Link href='/productos/tipo/body' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/body.jpg" /><p>Body</p></Link>


            <Link href='/productos/tipo/liquidacion' className='foto-category '><Avatar className='lg:w-24 lg:h-24 sm:w-16 sm:h-16' isBordered src="/model.jpg" /><p>Liquidacion</p></Link>
            
            </div>
        </div>
    </div>
  )
}

export default Categories