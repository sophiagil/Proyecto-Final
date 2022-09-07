import React from "react";

const ActividadesBlog1 = (props) => {
  return (
    <body>
      <section id="hero-blog">
        <div className="container">
          <h1>Novedades del mes</h1>
          <button>RESERVÁ TU VANCANTE!</button>
        </div>
      </section>

      <section id="blog">
      <div class="container">
        <h2>Nuestros Seminarios</h2>
        <p class="lead">Escrito por Iguamku Cerámica</p>
        <hr />
          <div class="row">
            <div class="col-12 col-lg-9 mb-5">
              <div class="row mb-5">
                <div class="col-3">
                  <img class="img-fluid" src="./../../img/Actividades/Blog/blog1-img1.jpg" alt="" />
                </div>
                  <div class="col-9">
                    <a href="#"><h3>Seminario de Pastas Cerámicas</h3></a>
                    <p className="badge"><span class="badge text-bg-success">Inscripción Abierta</span></p>
                    <p>Descripcion: Conocé las fórmulas efectivas para crear tus propias pastas según la temperatura de horneda. Es un seminario de cuatro encuentros.</p>
                    <p>Días y Horarios: Lunes de 15 a 17 hs</p>
                    <p>Duración: Cuatro encuentros online</p>
                    <p>Fecha de Inicio: 12/09/2022</p>
                  </div>
              </div>

              <div class="row mb-5">
                <div class="col-3">
                  <img class="img-fluid" src="./../../img/Actividades/Blog/blog1-img2.png" alt="" />
                </div>
                <div class="col-9">
                  <a href="#"><h3>Introducción al Modelado en Torno Cerámico</h3></a>
                  <p className="badge"><span class="badge text-bg-success">Inscripción Abierta</span></p>
                  <p>Descripcion: Aprenderás las bases para utilizar el torno cerámico y poder confeccionar rápidamente piezas utilitarias simples y retornearlas.</p>
                  <p>Días y Horarios: Miércoles de 17 a 19 hs</p>
                  <p>Duración: Ocho encuentros presenciales en el taller Iguamku</p>
                  <p>Fecha de Inicio: 14/09/2022</p>
                </div>
              </div>

              <div class="row mb-5">
                <div class="col-3">
                  <img class="img-fluid" src="./../../img/Actividades/Blog/blog1-img3.jpg" alt="" />
                </div>
                <div class="col-9">
                  <a href="#"><h3>Escultura de piezas de la cultura Chorrera</h3></a>
                  <p className="badge"><span class="badge text-bg-danger">Últimas Vacantes</span></p>
                  <p>Descripcion: Conoce los fundamentes y técnicas primarias para levantar una pieza y esculpirla. Nos enfocaremos en este seminario en las vasijas ancestrales de la cultura Chorrera de Ecuador pre colombino.</p>
                  <p>Días y Horarios: Viernes de 17 a 19 hs</p>
                  <p>Duración: Cuatro encuentros online</p>
                  <p>Fecha de Inicio: 16/09/2022</p>
                </div>
              </div>
              </div>
          </div>
        </div>
        </section>
      </body>
  );
}


export default ActividadesBlog1;