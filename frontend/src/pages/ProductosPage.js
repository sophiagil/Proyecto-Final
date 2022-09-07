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
    </body>
);
}

export default ProductosPage;