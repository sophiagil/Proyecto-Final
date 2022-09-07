import React from "react";
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ActividadesPage = (props) => {
    const navigate = useNavigate();

    return (
    <body>
        <section id="actividades">
            <div className="container">
                <h2>Actividades</h2>
                <div className="actividad">
                    <div className="card">
                        <h3>Seminarios</h3>
                        <p>En nuestros seminarios aprenderás las diversas técnicas de modelado y hornado de instrumentos sonoros pre hispánicos. ¡No te lo pierdas!</p>
                            <button onClick={() => navigate("/ActividadesBlog1")}>+ Info</button>
                    </div>
                    <div className="card">
                        <h3>Talleres</h3>
                        <p>Todos los meses podrás participar de nuestros talleres para aprender las bases del trabajo del ceramista. Crearás tus propias pastas, engobes y esmaltes. </p>
                            <button onClick={() => navigate("/ActividadesBlog2")}>+ Info</button>
                    </div>
                    <div className="card">
                        <h3>Cursos</h3>
                            <p>Te enseñaremos en nuestros cursos a confeccionar Filtros descontaminantes de agua, hornos cerámicos para media y alta temperatura ¡y más!</p>  
                            <button onClick={() => navigate("/ActividadesBlog3")}>+ Info</button>
                    </div>
                </div>
            </div>
        </section>
    </body>
);
}

export default ActividadesPage;