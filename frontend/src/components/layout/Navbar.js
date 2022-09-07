import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [setClick] = useState(false)
    const closeMenu = () => setClick(false)
	
	return (
		<header>
			<div className="container">
				<div className="logo">
					<Link className="logo-link" to="/">Cerámica Iguamku </Link>
				</div>
				
				<nav>
					<div className="menu-bar">
							<li><Link className="text-link" to="/" spy={true} 
							smooth={true} offset={50} duration={500} onclick={closeMenu}>Home</Link></li>

							<li><Link className="text-link" to="/nosotros" spy={true} 
							smooth={true} offset={50} duration={500} onclick={closeMenu}>Sobre Nosotros</Link></li>

							<li><Link className="text-link" to="/actividades" spy={true} 
							smooth={true} offset={50} duration={500} onclick={closeMenu}>Actividades</Link></li>

							<li><Link className="text-link" to="/productos" spy={true} 
							smooth={true} offset={50} duration={500} onclick={closeMenu}>Nuestros Productos</Link></li>

							<li><Link className="text-link" to="/contacto" spy={true} 
							smooth={true} offset={50} duration={500} onclick={closeMenu}>Contacto</Link></li>
					</div>
				</nav>
			</div>
  		</header>
    );	
}

export default Navbar;