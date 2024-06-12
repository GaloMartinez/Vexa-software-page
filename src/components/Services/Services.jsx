import React from 'react'
import { JackInTheBox } from "react-awesome-reveal";
import './Services.css';
import group from '../../img/Group.png';
import group1 from '../../img/technical-service 1.png';
import group2 from '../../img/cloud-service 1.png';
import fondoservices from '../../img/img-services.png';

function Services() {
    return (
        <div className='vexaSoftware-services-container'>
            <h1 className='vexaSoftware-services-title'>SERVICIOS</h1>
            <div className='vexaSoftware-services-containImg'

                style={{
                    backgroundImage: `url(${fondoservices})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat'
                }}


            >
                <div className='vexaSoftware-services-row row'>



                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src={group} className="vexaSoftware-servicesGroup-img" alt="" />
                                <h3 className='vexaSoftware-servicesGroup-h1'>Desarrollos a medida</h3>
                            </div>
                            <div class="card-back">
                                <h1>Desarrollos a medida </h1>
                                <p>Creamos soluciones únicas que se adaptan perfectamente a tus necesidades. 
                                    Desde sistemas web hasta aplicaciones móviles, 
                                    nuestros desarrollos a medida están diseñados para impulsar tu empresa
                                     con tecnología de punta y diseños atractivos.</p>
                            </div>
                        </div>
                    </div>



                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src={group1} className="vexaSoftware-servicesGroup-img" alt="" />
                                <h3 className='vexaSoftware-servicesGroup-h1'>Mantenimiento</h3>
                            </div>
                            <div class="card-back">
                               <h1>Mantenimiento</h1>
                               <p>Ofrecemos servicios integrales de mantenimiento para software existente e integraciones, 
                                asegurando que tu negocio opere sin interrupciones y con el máximo rendimiento. 
                                Con Vexa Software, tu tecnología siempre estará al día</p>
                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src={group2} className="vexaSoftware-servicesGroup-img" alt="" />
                                <h3 className='vexaSoftware-servicesGroup-h1'>DevOps</h3>
                            </div>
                            <div class="card-back">
                                <h1>DevOps</h1>
                                <p>Nuestro enfoque DevOps facilita despliegues rápidos y eficientes, 
                                    permitiendo pruebas en tiempo real con nuestros clientes. 
                                    Aseguramos la mejor calidad y adaptabilidad en cada etapa del desarrollo</p>
                            </div>
                        </div>
                    </div>














                    {/* 

                    <JackInTheBox className='vexaSoftware-services-column col-3'>
                        <div className='vexaSoftware-services-group'>
                            <img src={group} className="vexaSoftware-servicesGroup-img" alt="" />
                            <h3 className='vexaSoftware-servicesGroup-h1'>Desarrollo a medida</h3>
                        </div>
                    </JackInTheBox>

                    <JackInTheBox className='vexaSoftware-services-column col-3'>
                        <div className='vexaSoftware-services-group'>
                            <img src={group1} className="vexaSoftware-servicesGroup-img" alt="" />
                            <h3 className='vexaSoftware-servicesGroup-h1'>Mantenimiento</h3>
                        </div>
                    </JackInTheBox>
                    <JackInTheBox className='vexaSoftware-services-column col-3'>
                        <div className='vexaSoftware-services-group'>
                            <img src={group2} className="vexaSoftware-servicesGroup-img" alt="" />
                            <h3 className='vexaSoftware-servicesGroup-h1'>DevOps</h3>
                        </div>
                    </JackInTheBox> */}

                </div>
            </div>
        </div>
    )
}

export default Services
