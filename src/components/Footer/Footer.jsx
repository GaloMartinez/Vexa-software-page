import React from 'react'
import './Footer.css';
import whatsappimg from '../../img/wp-img.png';
import instagramimg from '../../img/ig-img.png';
import logovexa from '../../img/VEXA-FINAL-02.png';

function Footer() {
  return (
    <div className='vexaSoftware-footer-container'>
      <div className='vexaSoftware-footer-row'>
        <div className='vexaSoftware-footer-column1 col-12 col-xl-9'>
          <div className='vexaSoftware-footer-internalColumn1 col-12 col-xl-6'>
            <div className='vexaSoftware-footer-totalGroup'>
              <div className='vexaSoftware-footer-group1'>
                <img src={whatsappimg} className="" height={25} width={25} alt="" />
                <p> +54 9 11 4935 8238</p>
              </div>
              <div className='vexaSoftware-footer-group2'>
                <img src={instagramimg} className="" height={25} width={25} alt="" />
                <p>@VexaSoftware</p>
              </div>
            </div>
          </div>

          <div className='vexaSoftware-footer-internalColumn2 col-12 col-xl-6 '>
            <p>Atención: Lunes a Viernes de 08 hs a 18hs</p>

          </div>

        </div>

        <div className='vexaSoftware-footer-column2 col-12 col-xl-3'>
        <img src={logovexa} className="" height={100} width={234} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Footer
