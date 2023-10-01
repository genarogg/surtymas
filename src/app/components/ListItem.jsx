import { Card, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
// import ff from '../../../public/'


function ListItem({children, product}) {

    console.log(product)
  return (
    <Card
    // style={{padding: '-10px'}}
    isBlurred
    className="border-none bg-background/60 dark:bg-default-100/50 w-full "
    shadow="sm"
  >
    <CardBody className=''>
        <div className='flex items-center max-h-16  w-full gap-3'>
        <Image
            alt="Album cover"
            className="object-cover h-full w-16"
            // height='100%'
            shadow="md"
            src={`${product[0]?.imagenes[0] || product.imagen}`}
            // width="100%"
          />

            <div className="flex flex-col gap-0 w-[50px] flex-1">
              <h3 className="font-semibold text-foreground/90 w-full">{`${product[0]?.titulo || product.nombre}`}</h3>
              <p className="text-small text-foreground/80 ">${`${product[0]?.precio || product.precio}`}</p>
              <h1 className="text-large font-medium mt-2">{`${product[0]?.codigo || product.codigo}`}</h1>
            </div>

            <div className='flex items-center gap-2'>
                {children}
                {/* <Image src='/edit1.svg' width={50}/> */}
                {/* <Image src='/delete1.svg' alt='delete' width={50}/> */}
            </div>
          {/* <div className="flex justify-between items-start flex-1">
            <div className="flex flex-col gap-0 w-full ">
              <h3 className="font-semibold text-foreground/90 w-full">{product[0].titulo}</h3>
              <p className="text-small text-foreground/80 ">{product[0].codigo}</p>
              <h1 className="text-large font-medium mt-2">{product[0].precio}</h1>
            </div>
            
          </div> */}
        </div>

      {/* <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center h-[100px]">
        <div className="relative col-span-6 md:col-span-4 h-full" >
          <Image
            alt="Album cover"
            className="object-cover h-full"
            // height='100%'
            shadow="md"
            src={product[0].imagenes[0]}
            // width="100%"
          />
        </div>

        <div className="flex flex-col col-span-6 md:col-span-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold text-foreground/90">{product[0].titulo}</h3>
              <p className="text-small text-foreground/80">{product[0].codigo}</p>
              <h1 className="text-large font-medium mt-2">{product[0].precio}</h1>
            </div>
            
          </div>

          
        </div>
      </div> */}
    </CardBody>
  </Card>
  )
}

export default ListItem