import React from 'react'
import './MainBanner.css';
import vexaLogo from '../../img/vexaLogo.png';
import fondovectores from '../../img/fondovectores.png';
function MainBanner() {
    return (
        <div
            className='vexaSoftware-mainBanner-container'
            style={{
                backgroundImage: `url(${fondovectores})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='vexaSoftware-mainBanner-content'>
                <img src={vexaLogo} className="vexaSoftware-mainBanner-img" alt="" />
                <h1 className='vexaSoftware-mainBanner-title'>Transformamos tu idea en codigo</h1>
                <p className='vexaSoftware-mainBanner-p'>Transformamos tu visión en soluciones tecnológicas de vanguardia.
                    En Vexa Software, la innovación se encuentra con la excelencia para llevar tu negocio al siguiente nivel
                </p>
                <div className="vexaSoftware-mainBanner-buttons-contain">
                    <a href="#hiring" button className="vexaSoftware-mainBanner-button-light ">Ver planes</a>
                    <a href="#contact" button className="vexaSoftware-mainBanner-button-green ">Contacto</a>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
