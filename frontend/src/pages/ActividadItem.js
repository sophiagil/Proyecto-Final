import React from "react";

const ActividadesItem = (props) => {

  const { tittle, description, day, duration, date, image } = props;

  return (

    <body>

      <section id="hero-blog">
        <div className="container">
          <h1>Novedades del mes</h1>
          <button>RESERVÁ TU VANCANTE!</button>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <h2>Cursos, Talleres y Seminarios</h2>
          <p className="lead">Escrito por Iguamku Cerámica</p>
          <hr />
            <div class="row">
              <div class="col-12 col-lg-9 mb-5">
                <div class="row mb-5">
                  <div class="col-3">
                    <img class="img-fluid" src={image} alt="" />
                  </div>
                  <div class="col-9">
                    <a href="#"><h3>{tittle}</h3></a>
                    <p className="badge"><span class="badge text-bg-success">Inscripción Abierta</span></p>
                    <p>Descripción: {description}</p>
                    <p>Días y Horarios: {day}</p>
                    <p>Duración: {duration}</p>
                    <p>Fecha de Inicio: {date}</p>
                    <hr />
                  </div>
                </div>

                <div class="row mb-5">
                  <div class="col-3">
                    <img class="img-fluid" src={image} alt="" />
                  </div>
                  <div class="col-9">
                    <a href="#"><h3> Título {tittle}</h3></a>
                    <p className="badge"><span class="badge text-bg-danger">Últimas Vacantes</span></p>
                    <p>Descripción: {description}</p>
                    <p>Días y Horarios: {day}</p>
                    <p>Duración: {duration}</p>
                    <p>Fecha de Inicio: {date}</p>
                    <hr />
                  </div>
                </div>

                <div class="row mb-5">
                  <div class="col-3">
                    <img class="img-fluid" src={image} alt="" />
                  </div>
                  <div class="col-9">
                    <a href="#"><h3> Título {tittle}</h3></a>
                    <p className="badge"><span class="badge text-bg-success">Inscripción Abierta</span></p>
                    <p>Descripción: {description}</p>
                    <p>Días y Horarios: {day}</p>
                    <p>Duración: {duration}</p>
                    <p>Fecha de Inicio: {date}</p>
                    <hr />
                  </div>

                  <div class="row mb-5">
                    <div class="col-3">
                      <img class="img-fluid" src={image} alt="" />
                    </div>
                    <div class="col-9">
                      <a href="#"><h3>Título {tittle}</h3></a>
                      <p className="badge"><span class="badge text-bg-danger">Últimas Vacantes</span></p>
                      <p>Descripción: {description}</p>
                      <p>Días y Horarios: {day}</p>
                      <p>Duración: {duration}</p>
                      <p>Fecha de Inicio: {date}</p>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
      </body>
  )
};

    export default ActividadesItem;






