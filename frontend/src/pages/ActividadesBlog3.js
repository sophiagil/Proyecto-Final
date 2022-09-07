import React from "react";

  const ActividadesBlog3 = (props) => {
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
        <h2>Nuestros Talleres</h2>
        <p class="lead">Escrito por Iguamku Cerámica</p>
        <hr />
          <div class="row">
            <div class="col-12 col-lg-9 mb-5">
              <div class="row mb-5">
                <div class="col-3">
                  <img class="img-fluid" src="./../../img/Actividades/Blog/blog3-img1.jpg" alt="" />
                </div>
                  <div class="col-9">
                    <a href="#"><h3>Curso de Filtros Cerámicos Condorhuasi</h3></a>
                    <p className="badge"><span class="badge text-bg-danger">Últimas Vacantes</span></p>
                    <p>Descripcion: Aprende a confeccionar los filtros cerámicos Condorhuasi para descontaminar agua. Es una opción económica y sustentable.</p>
                    <p>Días y Horarios: Viernes de 15 a 18 hs</p>
                    <p>Duración: Dos encuentros online</p>
                    <p>Fecha de Inicio: 20/10/2022</p>
                  </div>
              </div>

              <div class="row mb-5">
                <div class="col-3">
                  <img class="img-fluid" src="./../../img/Actividades/Blog/blog3-img2.jpg" alt="" />
                </div>
                <div class="col-9">
                  <a href="#"><h3>Hornos Condorhuasi</h3></a>
                  <p className="badge"><span class="badge text-bg-danger">Últimas Vacantes</span></p>
                  <p>Descripcion: Te enseñaremos los principios para construir un horno tipo chimenea Condorhuasi, que alcanza temperatura de gres y porcelana.</p>
                  <p>Días y Horarios: Sábados de 10 a 14 hs</p>
                  <p>Duración: Dos encuentros presenciales</p>
                  <p>Fecha de Inicio: 5/11/2022</p>
                </div>
              </div>

              <div class="row mb-5">
                <div class="col-3">
                  <img class="img-fluid" src="./../../img/Actividades/Blog/blog3-img3.jpg" alt="" />
                </div>
                <div class="col-9">
                  <a href="#"><h3>Azulejos- Cuerda Seca</h3></a>
                  <p className="badge"><span class="badge text-bg-success">Abierta la Inscripción</span></p>
                  <p>Descripcion: Te invitamos a participar del mundo de los azulejos y mayólicas. Aprenderás a realizar dibujos y pinturas con esmaltes a través de la técnica de Cuerda Seca.</p>
                  <p>Días y Horarios: Jueves de 10 a 12 hs</p>
                  <p>Duración: Cuatro encuentros online</p>
                  <p>Fecha de Inicio: 20/11/2022</p>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
    </body>
  );
}
  
  export default ActividadesBlog3;


