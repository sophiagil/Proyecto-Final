import React from "react";
import Slide from "../Carrousel/Slide";
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import axios from 'axios';


const HomePage = (props) => {
    const navigate = useNavigate();

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http//localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }       
    }

    return (
    <body>
        <section id="hero">
            <div className="container">
                <h1>Aprende a crear obras de Arte <br /> con tus manos</h1>
                <button>INSCRÍBETE YA!</button>
            </div>
        </section>

        <section id="nosotros">
            <div className="container">
                <div className="img-container"></div>
                <div className="descripcion">
                <h2>Somos <span className="color-asento">Iguamku</span></h2>
                <p>Te damos la Bienvenida a nuestro espacio de Arte. Somos una familia de músicos y artesanos. Nos especializamos en armonización con sonidos y escultura de piezas cerámicas únicas.<br />
                Te invitamos a recorrer la galería de productos y actividades para conocer nuestro trabajo y compartir experiencias.</p>
                </div>
            </div>
        </section>

        <section id="actividades">
            <div className="container">
                <h2>Actividades</h2>
                <div className="actividad">
                    <div className="card">
                        <h3>Seminarios</h3>
                        <p>En nuestros seminarios aprenderás las diversas técnicas de modelado y hornado de instrumentos sonoros pre hispánicos. ¡No te lo pierdas!</p>
                        <button onClick={() => navigate("/ActividadItem")}>+ Info</button>
                    </div>
                    <div className="card">
                        <h3>Talleres</h3>
                        <p>Todos los meses podrás participar de nuestros talleres para aprender las bases del trabajo del ceramista. Crearás tus propias pastas, engobes y esmaltes. </p>
                        <button onClick={() => navigate("/ActividadItem")}>+ Info</button>
                    </div>
                    <div className="card">
                        <h3>Cursos</h3>
                            <p>Te enseñaremos en nuestros cursos a confeccionar Filtros descontaminantes de agua, hornos cerámicos para media y alta temperatura ¡y más!</p>  
                            <button onClick={() => navigate("/ActividadItem")}>+ Info</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="productos">
                <div className="container">
                    <h2>Nuestros Productos</h2>
                    <div className="slider">
                        <Slide />  
                    </div>
                </div>
    

            <section id="productos-texto">
                <div className="container">
                    <div className="descripcion">
                    <h3>Galería de Compras <span className="color-asento">Iguamku Cerámica</span></h3>
                    <p>Te invitamos a recorrer nuestra galería de productos Iguamku. Contamos con una gran variedad de piezas de diseño únicas. Instrumentos musicales, utilitarios, filtros cerámicos y mucho más.</p>
                    </div>
                </div>
            </section>
    
            <section id="productos-galeria">
                <div className="container">
                    <div className="galeria-items">
                        <div className="item">
                            <h3>Filtros Cerámicos</h3>
                            <p>Ofrecemos los Filtros descontaminantes de agua tipo Condorhuasi con una capacidad de 2,5 y 3,5 litros.</p>
                                <button>Ver +</button>
                        </div>
                        <div className="item">
                            <h3>Utilitarios para el Hogar</h3>
                            <p>Elaboramos todo tipo de piezas utilitarias para el hogar y jardín. También realizamos diseños únicos por pedido. ¡Consulta nuestra oferta de productos!</p>
                                <button>Ver +</button>
                        </div>
                        <div className="item">
                            <h3>Instrumentos Musicales</h3>
                                <p>Creamos gran variedad de instrumentos cerámicos para armonización sonora, nos especializamos en aerófonos, ideófonos y botellas Silbadoras para agua pre hispánicas.</p>  
                                <button>Ver +</button>
                        </div>
                        <div className="item">
                            <h3>Hornos Cerámicos</h3>
                                <p>Brindamos asesoramiento a distancia y presencial y elaboración integral de hornos cerámicos para media y alta temperatura.</p>  
                                <button>Ver +</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        
        <section id="hero-contacto">
            <h1>Contacto</h1>
        </section>

        <section id="contacto">
            <div class="contacto-container">
                <form class="form" action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p class="form_parrafo">Envía tus consultas completando los siguientes datos. Recibirás un correo electrónico con toda la info!</p>

                    <div class="form_container">
                        <div class="form_group">
                            <label for="name" class="form_label">Nombre:</label>
                            <input type="text" id="name" class="form_input" name='nombre' value={formData.nombre} onChange={handleChange} />
                            <span class="form_line"></span>
                        </div>
                    </div>

                    <div class="form_container">
                        <div class="form_group">
                            <label for="mail" class="form_label">Correo electrónico:</label>
                            <input type="text" id="email" class="form_input" name='email' value={formData.email} onChange={handleChange} />
                            <span class="form_line"></span>
                        </div>
                    </div>

                    <div class="form_container">
                        <div class="form_group">
                            <input type="text" id="tel" class="form_input" name='telefono' value={formData.telefono} onChange={handleChange} />
                            <label for="tel" class="form_label">Teléfono:</label>
                            <span class="form_line"></span>
                        </div>
                    </div>

                    <div class="form_container">
                        <div class="form_group">
                            <label for="msg" class="form_label">Mensaje:</label>
                            <textarea id="msg" class="form_textarea"  name="mensaje"  value={formData.mensaje} onChange={handleChange}></textarea>
                            <span class="form_line"></span>
                        </div>
                        <input type="submit" class="submit" value="Enviar" />
                    </div>  
                </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
            </div>
        </section>   
    </body>
        );
    }


export default HomePage;