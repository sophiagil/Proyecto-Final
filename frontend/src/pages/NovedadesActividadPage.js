import {useState, useEffect} from "react";
import axios from 'axios';
import ActividadItem from '../components/novedades/ActividadItem'; 

const NovedadesActividadPage = (props) => {
    const [loading,  setLoding] = useState(false);
    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        const cargarActividades = async () => {
            setLoding(true);
            //const response =await axios.get(`${process.env.REACT_APP_API_URL}/api/actividades`);
            const response = await axios.get('http://localhost:3000/api/actividades');
            setActividades(response.data);
            setLoading(false);
        };

        cargarActividades();
    }, []);

    return (
    
        <section id="actividades">
            <div className="container">
                <h2>Cursos y Talleres</h2>
                {
                    loading ? (
                        <p>Cargando...</p>
                    ) : (
                        actividades.map(item => <ActividadItem key={item.id}
                        tittle = {item.titulo} description={item.descripcion}
                        image = {item.imagen}  />    )
                    )
                }

            </div>
        </section> 
    );
}

export default NovedadesActividadPage;