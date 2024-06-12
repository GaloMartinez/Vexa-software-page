import React, { useState, useRef } from 'react'
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import Alert from '../Alert/Alert';
import ForumIcon from '@mui/icons-material/Forum';
import { Row, Col, Form, Button } from 'react-bootstrap';
import imagecontact from '../../img/image-contact.png';
import Footer from '../Footer/Footer';

const ContactForm = () => {

    const [agreeContact, setAgreeContact] = useState(false);
    const [alert, setAlert] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current) {
            setIsLoading(true); // Inicia el spinner antes de enviar el correo

            emailjs.sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY)
                .then((result) => {
                    // Manejo del éxito
                    setAlert({
                        msg: 'Mensaje enviado correctamente!',
                        error: false
                    });
                    form.current.reset();
                    setAgreeContact(false);
                }, (error) => {
                    // Manejo del error
                    setAlert({
                        msg: `No se pudo enviar el mensaje ${error.text}`,
                        error: true
                    });
                }).finally(() => {
                    setIsLoading(false); // Detiene el spinner independientemente del resultado
                    setTimeout(() => {
                        setAlert({});
                    }, 5000);
                });
        }
    };


    const { msg } = alert;

    return (

        <div className="help-contact-container">
            <div className="help-contact-options">
                <div className="help-contact-left-side col-12 col-xl-6">
                    <div className='help-contact-title'>
                        <img src={imagecontact} className="" height={350} width={350} alt="" />

                    </div>
                    <h1>Hablemos de Innovacion</h1>
                    <p className='help-contact-subtitle'>En Vexa Software, convertimos tus visiones en soluciones tecnológicas impactantes. </p>
                    <p className='help-contact-subtitle'>¿Preparado para transformar tus ideas en innovación? </p>
                </div>
                <Form ref={form} onSubmit={sendEmail} className="help-contact-form-container col-12 col-xl-6">
                    {msg && <Alert alert={alert} />}
                    <Row>
                        <h1 className='vexaSoftware-formContact-title'>¡Contactános!</h1>
                        <Col md={6} className='vexaSoftware-formContact-info'>

                            <Form.Group controlId="formBasicName">
                                <p>Nombre</p>
                                <Form.Control type="text" name="from_name" />
                            </Form.Group>
                        </Col>
                        <Col md={6} className='vexaSoftware-formContact-info'>
                            <Form.Group controlId="formBasicOrganization">
                                <p>Nombre de la empresa</p>
                                <Form.Control type="text" name="from_organization" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className='vexaSoftware-formContact-infomail'>
                            <Form.Group controlId="formBasicEmail">
                                <p>Email (*)</p>
                                <Form.Control type="email" name="from_email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className='vexaSoftware-formContact-infomsg'>
                            <Form.Group controlId="formBasicMessage">
                                <p>Escribe un mensaje</p>
                                <Form.Control as="textarea" name="from_message" required rows={4} />
                            </Form.Group>
                            <div className='contact-form-button-container'>
                                <Button variant="primary" type="submit" className="contact-form-button" disabled={isLoading}>
                                    {isLoading ? (
                                       <div class="sk-fading-circle">
                                       <div class="sk-circle1 sk-circle"></div>
                                       <div class="sk-circle2 sk-circle"></div>
                                       <div class="sk-circle3 sk-circle"></div>
                                       <div class="sk-circle4 sk-circle"></div>
                                       <div class="sk-circle5 sk-circle"></div>
                                       <div class="sk-circle6 sk-circle"></div>
                                       <div class="sk-circle7 sk-circle"></div>
                                       <div class="sk-circle8 sk-circle"></div>
                                       <div class="sk-circle9 sk-circle"></div>
                                       <div class="sk-circle10 sk-circle"></div>
                                       <div class="sk-circle11 sk-circle"></div>
                                       <div class="sk-circle12 sk-circle"></div>
                                     </div>
                                    ) : (
                                        "Enviar"
                                    )}
                                </Button>
                            </div>
                        </Col>
                    </Row>

                </Form>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactForm