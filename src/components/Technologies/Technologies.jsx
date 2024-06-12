import React from 'react'
import './Technologies.css';
import mesadetrabajo from '../../img/mesadetrabajo.png';
import check from '../../img/group27.png';
import fondotechnologies from '../../img/fondotechnologies.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../img/image1.png';
import image2 from '../../img/image2.png';
import image3 from '../../img/image3.png';
import image4 from '../../img/image4.png';
import image5 from '../../img/image5.png';
import image6 from '../../img/image6.png';
import image7 from '../../img/image7.png';
import image8 from '../../img/image8.png';
import image9 from '../../img/image9.png';


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];



function Technologies() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <>
      <div className='vexaSoftware-technologies-container'
        style={{
          backgroundImage: `url(${fondotechnologies})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <h1 className='vexaSoftware-technologies-title'>COMO LO HACEMOS</h1>
        <div className='vexaSoftware-technologies-row'>
          <div className='vexaSoftware-technologies-column1 col-12 col-xl-6'>

            <img src={mesadetrabajo} className="vexaSoftware-technologies-column1-image" alt="" />

          </div>

          <div className='vexaSoftware-technologies-column2 col-12 col-xl-6'>
            <div className='vexaSoftware-technologies-containerlist'>
              <img src={check} className="" alt="" />
              <p>Utilizamos tecnologías de última generación, metodologías ágiles y esquemas de comunicación flexible</p>
            </div>
            <div className='vexaSoftware-technologies-containerlist'>
              <img src={check} className="" alt="" />
              <p>Nos mantenemos actualizados y en constante capacitación, comprometidos con brindar el mejor nivel de servicio a nuestros clientes</p>
            </div>
            <div className='vexaSoftware-technologies-containerlist'>
              <img src={check} className="" alt="" />
              <p>Usamos los mejores lenguajes de programación, herramientas de desarrollo y plataformas de gestión de proyectos.</p>
            </div>


          </div>


        </div>
        
        <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={image1} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image2} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image3} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image4} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image5} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image6} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image7} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image8} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image9} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image1} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image2} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image3} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image4} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image5} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image6} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image7} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image8} className='vexaSoftware-technologies-img-slider' />
          </div>
          <div class="slide">
            <img src={image9} className='vexaSoftware-technologies-img-slider' />
          </div>

        </div>
      </div>
      </div>
     
    </>
  )
}

export default Technologies
