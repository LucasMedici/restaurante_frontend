
import React from 'react'
import '../itemCard/style.css'
import Image from 'next/image'

import NoProfile from '../../../public/no_profile.png'

export default function ItemCard() {
  return (
    <div className='container'>
        <div className='container_image'>
            {/* <Image src={NoProfile} style={{height: '200px', width:'200px'}} alt='imagem'/> */}
        </div>

        <div >
            <div>
                <p className='item_title'>Pizza de Frango</p>
                <p className='item_price'>R$ 21,99</p>
            </div>

            <hr style={{width: '250px'}}/>

            <div>
                <button>Comprar</button>
            </div>

        </div>
    </div>
  )
}
