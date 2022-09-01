import React from "react";
import Slide from "../Carrousel/Slide";

const HomePage = (props) => {
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident saepe, consequuntur cum, quidem ratione adipisci officia quo corrupti quis facere ipsam. Eveniet exercitationem nisi officia! Natus assumenda, reiciendis quaerat.</p>
                </div>
            </div>
        </section>

        <section id="actividades">
            <div className="container">
                <h2>Cursos y Talleres</h2>
                <div className="actividad">
                    <div className="card">
                        <h3>Hornos Cerámicos Condorhuasi</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>
                            <button>+ Info</button>
                    </div>
                    <div className="card">
                        <h3>Taller de Pastas Cerámicas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>
                            <button>+ Info</button>
                    </div>
                    <div className="card">
                        <h3>Seminario de Instrumentos Prehispánicos</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>  
                            <button>+ Info</button>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident saepe, consequuntur cum, quidem ratione adipisci officia quo corrupti quis facere ipsam. Eveniet exercitationem nisi officia! Natus assumenda, reiciendis quaerat.</p>
                    </div>
                </div>
            </section>
    
            <section id="productos-galeria">
                <div className="container">
                    <div className="galeria-items">
                        <div className="item">
                            <h3>Filtros Cerámicos</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>
                                <button>Ver +</button>
                        </div>
                        <div className="item">
                            <h3>Utilitarios Arte y Hogar</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>
                                <button>Ver +</button>
                        </div>
                        <div className="item">
                            <h3>Instrumentos Musicales</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>  
                                <button>Ver +</button>
                        </div>
                        <div className="item">
                            <h3>Hornos Cerámicos</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet eveniet quasi id deleniti. Sequi labore aspernatur non eaque optio, alias adipisci explicabo iste deleniti esse ex minima mollitia magnam!</p>  
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
            <div className="contacto-container">
                <form className="form">
                    <p className="form_parrafo">Envía tus consultas por <a href="#" className="form_enlace">aquí</a>. Recibirás un correo electrónico con toda la info!</p>

                    <div className="form_container">
                        <div className="form_group">
                            <label for="name" className="form_label">Nombre:</label>
                            <input type="text" id="name" className="form_input" placeholder=" " />
                            <span className="form_line"></span>
                        </div>
                    </div>

                    <div className="form_container">
                        <div className="form_group">
                            <label for="mail" className="form_label">Correo electrónico:</label>
                            <input type="text" id="email" className="form_input" placeholder=" " />
                            <span className="form_line"></span>
                        </div>
                    </div>

                    <div className="form_container">
                        <div className="form_group">
                            <input type="text" id="tel" className="form_input" placeholder=" " />
                            <label for="tel" className="form_label">Teléfono:</label>
                            <span className="form_line"></span>
                        </div>
                    </div>

                    <div className="form_container">
                        <div className="form_group">
                            <label for="msg" className="form_label">Mensaje:</label>
                            <textarea id="msg" name="mensaje" className="form_textarea" placeholder=" "></textarea>
                            <span className="form_line"></span>
                        </div>
                        <input type="submit" className="submit" value="Enviar" />
                    </div>  
                </form>
            </div>
        </section>   
    </body>
);
}

export default HomePage;