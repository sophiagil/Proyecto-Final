import {useState} from "react";
import axios from 'axios';


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));

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
        <section id="hero-contacto">
            <h1>Contacto</h1>
        </section>

        <section id="contacto">
            <div class="contacto-container">
                <form class="form" action="/contacto" method="post" className="formulario">
                    <p class="form_parrafo">Envía tus consultas por <a href="#" class="form_enlace">aquí</a>. Recibirás un correo electrónico con toda la info!</p>

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
}

export default ContactoPage;