import React from 'react'
import './Projects.css';
import Carousel from 'react-bootstrap/Carousel';
import image15 from '../../img/image15.png';
import image16 from '../../img/proyect-2-image.png';
import colaboration from '../../img/colaboration.png';

function Projects() {
    return (
        <div className='vexaSoftware-projects-section'>
            <div className='vexaSoftware-projects-container-description'>
                <h1>CASOS DE EXITO</h1>
                <p>Explora nuestros proyectos recientes y descubre cómo hemos transformado ideas en realidades tecnológicas exitosas. Cada proyecto es un testimonio de nuestra dedicación a la calidad, innovación y atención personalizada.</p>
            </div>
            <div className='vexaSoftware-projects-carrousel-container'>
                <Carousel >
                    <Carousel.Item>
                        <img src={image15} className="" alt="" />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image16} className="" alt="" />
                        <Carousel.Caption>
                             {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image15} className="" alt="" />
                        <Carousel.Caption>
                             {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <img src={colaboration} className="vexaSoftware-projects-collaboration-img" alt="Collaboration" />

            </div>
        </div>
    )
}

export default Projects
