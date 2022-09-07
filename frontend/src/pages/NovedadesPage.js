import { useState, useEffect } from "react";
import axios from 'axios';
import ActividadItem from './../pages/ActividadItem';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            //const response =await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <body>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <ActividadItem key={item.id}
                        tittle={item.Titulo}
                        description={item.Descripcion}
                        day={item.Dia_fecha}
                        duration={item.Duracion}
                        date={item.Fecha_inicio}
                        image={item.img_id} />)
                    )
            } 
        </body>
    )
}

export default NovedadesPage;