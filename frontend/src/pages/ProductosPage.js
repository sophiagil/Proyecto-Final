import React from "react";
import Slide from "../Carrousel/Slide";

const ProductosPage = (props) => {
    return (
    <body>
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
                    <h3>Galería de Compras <span class="color-asento">Iguamku Cerámica</span></h3>
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
    </body>
);
}

export default ProductosPage;