import React from 'react'
import './Hiring.css';
import fondohiring from '../../img/fondohiring.png';
import mesadetrabajo1 from '../../img/img1-hiring.png';
import mesadetrabajo2 from '../../img/img2-hiring.png';

function Hiring() {
    return (
        <div className='vexaSoftware-hiring-container'
            style={{
                backgroundImage: `url(${fondohiring})`,
                backgroundSize: 'cover',
                // backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className='vexaSoftware-hiring-contain'>
                <h1 className='vexaSoftware-hiring-title'>MODALIDADES DE CONTRATACION</h1>
                <div className='vexaSoftware-hiring-row1'>
                    <div className='col-12 col-xl-6 vexaSoftware-hiring-column1'>
                        <img src={mesadetrabajo1} className="vexaSoftware-hiring-image" alt="" />
                    </div>
                    <div className='col-12 col-xl-6  vexaSoftware-hiring-column2'>
                        <div className='vexaSoftware-hiring-column2-group'>
                            <h1>Proyectos con presupuesto cerrado</h1>
                            <p>Definimos juntos el alcance de tu proyecto y ofrecemos una propuesta comercial ajustada a tus necesidades. Nuestros proyectos cuentan con garantía y soporte dedicado, asegurando tu satisfacción y éxito.</p>
                        </div>
                    </div>
                </div>

                <div className=' vexaSoftware-hiring-row2'>
                    <div className='col-12 col-xl-6 vexaSoftware-hiring-column3'>
                        <div className='vexaSoftware-hiring-column3-group'>
                            <h1>Paquetes de Horas de Desarrollo</h1>
                            <p>Flexibilidad y transparencia definen nuestros paquetes de horas de desarrollo.
                                Priorizamos tus necesidades y gestionamos el desarrollo de manera eficiente,
                                manteniéndote informado a cada paso mediante herramientas como Jira y comunicación constante.</p>
                        </div>
                    </div>
                    <div className='col-12 col-xl-6 vexaSoftware-hiring-column4'>
                        <img src={mesadetrabajo2} className="vexaSoftware-hiring-image" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hiring
