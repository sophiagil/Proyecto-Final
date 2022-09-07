-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-09-2022 a las 23:14:33
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `iguamku`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

DROP TABLE IF EXISTS `actividades`;
CREATE TABLE IF NOT EXISTS `actividades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(50) NOT NULL,
  `Descripcion` varchar(250) NOT NULL,
  `Tipo` varchar(50) NOT NULL,
  `Dias_horarios` varchar(50) NOT NULL,
  `Duracion` varchar(50) NOT NULL,
  `Fecha_inicio` varchar(50) NOT NULL,
  `Precio` float NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `Titulo`, `Descripcion`, `Tipo`, `Dias_horarios`, `Duracion`, `Fecha_inicio`, `Precio`, `img_id`) VALUES
(1, 'Seminario de Pastas Cerámicas', 'Conoce las fórmulas efectivas para crear tus propias pastas según la temperatura de horneada. Es un seminario de cuatro encuentros.', 'Seminario', 'Lunes de 15 a 17 hs', 'Cuatro encuentros online', '12/09/2022', 3000, NULL),
(2, 'Introducción al Modelado en Torno Cerámico', 'Aprenderás las bases para utilizar el torno cerámico y poder confeccionar rápidamente piezas utilitarias simples y retornearlas.', 'Seminario', 'Miércoles de 17 a 19 hs', 'Ocho encuentros presenciales ', '14/09/2022', 5000, NULL),
(3, 'Escultura de piezas de la cultura Chorrera', 'Conoce los fundamentos y técnicas primarias para levantar una pieza y esculpirla. Nos enfocaremos en este seminario en las vasijas ancestrales de la cultura Chorrera de Ecuador pre colombino.', 'Taller', 'Viernes de 17 a 19 hs', 'Cuatro encuentros online', '16/09/2022', 3000, NULL),
(4, 'Técnicas de Cocción por Reducción', 'Conoce las diferentes estrategias para cocinar las piezas esmaltadas mediante la técnica milenaria de reducción. ¡Lograrás unos colores y tornasolados únicos y creativos!', 'Talleres', 'Martes de 17 a 20 hs', 'Cinco encuentros presenciales', '01/10/2022', 4000, NULL),
(5, 'Botellas Silbadoras para Agua', 'Conoce y construye las milenarias botellas silbadoras de las culturas pre hispánicas de Mesoamérica.', 'Talleres', 'Sábados de 17 a 19 hs', 'Ocho encuentros online', '10/10/2022', 2800, NULL),
(6, 'Los Secretos de los Esmaltes Cerámicos', 'Iniciamos un nuevo taller sobre los secretos de los esmaltes en cerámica. Mezclas de color, matizados, tornasolados y muestras. ¡No te lo pierdas!', 'Talleres', 'Jueves de 14 a 17 hs', 'Cuatro encuentros online', '16/10/2022', 4000, NULL),
(7, 'Métodos de Cocción Ansestrales', 'Tecnicas de horneado y reduccion nativas', 'Seminario', 'Miercoles y Viernes de 9 a 11 hs', 'Bimestral', '01/09/2022', 4000, NULL),
(8, 'Curso de Filtros Cerámicos Condorhuasi', 'Aprende a confeccionar los filtros cerámicos Condorhuasi para descontaminar agua. Es una opción económica y sustentable.', 'Cursos', 'Viernes de 15 a 18 hs', 'Dos encuentros online', '20/10/2022', 6000, NULL),
(9, 'Hornos Condorhuasi', 'Te enseñaremos los principios para construir un horno tipo chimenea Condorhuasi, que alcanza temperatura de gres y porcelana.', 'Cursos', 'Sábados de 10 a 14 hs', 'Dos encuentros presenciales', '5/11/2022', 2500, NULL),
(10, 'Ceramica Sonora', 'Confección y estudio de instrumentos pre hispánicos de cerámica de Mesoamérica', 'Cursos', 'Viernes y sábados de 16 a 19 hs', 'Cuatrimestral', '20/11/2022', 10000, NULL),
(11, 'Azulejos-Cuerda Seca', 'Técnica de cuerda seca para esmaltar azulejos y mayólicas ', 'Cursos', 'Lunes de 10 a 12 hs', 'Bimestral', '12/11/2022', 2500, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

DROP TABLE IF EXISTS `administradores`;
CREATE TABLE IF NOT EXISTS `administradores` (
  `id_admin` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Edad` int(2) NOT NULL,
  `Mail` varchar(40) NOT NULL,
  `Celular` varchar(20) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `Username` varchar(250) NOT NULL,
  `Password` varchar(250) NOT NULL,
  PRIMARY KEY (`id_admin`),
  KEY `id_rol` (`id_rol`),
  KEY `id_rol_2` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`id_admin`, `Nombre`, `Apellido`, `Edad`, `Mail`, `Celular`, `id_rol`, `Username`, `Password`) VALUES
(10, 'Sofia Laura', 'Gil', 37, 'sophiagil84@gmail.com', '+54 9 11 45789855', 3, 'sophiagil84@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055'),
(11, 'Leandro', 'Remon', 44, 'leandroraulremon@gmail.com', '+54 9 11 45769878', 5, 'leandroraulremon@gmail.com', 'f55f56e02293f067b6fa13024a17a580');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

DROP TABLE IF EXISTS `contacto`;
CREATE TABLE IF NOT EXISTS `contacto` (
  `id_contacto` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Mail` varchar(20) NOT NULL,
  `Telefono` varchar(20) NOT NULL,
  `Mensaje` varchar(100) NOT NULL,
  PRIMARY KEY (`id_contacto`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripciones`
--

DROP TABLE IF EXISTS `inscripciones`;
CREATE TABLE IF NOT EXISTS `inscripciones` (
  `id_inscripcion` int(11) NOT NULL AUTO_INCREMENT,
  `Nombres` varchar(50) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `Edad` int(2) NOT NULL,
  `Sexo` varchar(10) NOT NULL,
  `Profesion` varchar(50) NOT NULL,
  `Mail` varchar(50) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `Actividad` varchar(50) NOT NULL,
  `Fecha_pago` varchar(20) NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  PRIMARY KEY (`id_inscripcion`),
  KEY `id_actividad` (`id_actividad`) USING BTREE,
  KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `inscripciones`
--

INSERT INTO `inscripciones` (`id_inscripcion`, `Nombres`, `Apellidos`, `Edad`, `Sexo`, `Profesion`, `Mail`, `Telefono`, `Actividad`, `Fecha_pago`, `id_actividad`, `id_usuario`) VALUES
(1, 'Marcela Laura', 'Suarez', 44, 'F', 'Ceramista', 'suarezmar@gmail.com', '+5491133775678', 'Escultura Precolombina', '16/09/22', 3, 0),
(2, 'Diego Benito', 'Alonzo', 26, 'M', 'Músico', 'dieguito20@gmail.com', '+54911984567', 'Ceramica Sonora', '20/08/22', 10, 0),
(3, 'Lucrecia Analia', 'Gonzalez', 32, 'F', 'Docente', 'lucre02@gmail.com', '+549221563054', 'Esmaltes Artesanales', '12/08/22', 6, 0),
(4, 'Lucrecia Analia', 'Gonzalez', 32, 'F', 'Docente', 'lucre02@gmail.com', '+549221563054', 'Metodo de Coccion Ancestrales', 'adeuda', 7, 0),
(5, 'Marcos ', 'Gutierrez', 41, 'M', 'Musicoterapeuta', 'marquitos@gmail.com', '+549351457890', 'Ceramica Sonora', 'adeuda', 10, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades_errores`
--

DROP TABLE IF EXISTS `novedades_errores`;
CREATE TABLE IF NOT EXISTS `novedades_errores` (
  `id_novedad` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(50) NOT NULL,
  `Autor` varchar(50) NOT NULL,
  `Detalle` varchar(250) NOT NULL,
  `Registro` timestamp NOT NULL,
  PRIMARY KEY (`id_novedad`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades_errores`
--

INSERT INTO `novedades_errores` (`id_novedad`, `Titulo`, `Autor`, `Detalle`, `Registro`) VALUES
(1, 'Error con imagenes de productos', 'Sofia', 'El campo IMAGEN de la tabla PRODUCTOS con tipo de dato LONGBLOB no carga imágenes desde directorio local', '2022-08-23 19:01:53'),
(2, 'Error de redireccionamiento de seccion Productos', 'Sofia', 'La página del carrito de compras no está redireccionando a Paypal correctamente. ', '2022-08-11 23:02:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Descripcion` varchar(250) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Precio_dolar` varchar(50) NOT NULL,
  `imagen_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `Nombre`, `Descripcion`, `Cantidad`, `Precio_dolar`, `imagen_id`) VALUES
(1, 'Botella Silbadora Cóndor', 'Botella de cerámica gres zoomorfa de inspiración propia.\r\nPara soplo directo o por agua', 2, '130', ''),
(2, 'Flauta Tlapitzalli pentatónica', 'Flauta de la cultura ancestral Maya, de escala pentatónica.\r\nNotas: Mib- Fa- Sol- La- Sib', 5, '20', ''),
(3, 'Flauta Globular ', 'Flauta globular Maya de 6 cuerpos antropomórfica de diseño propio.\r\nCon 4 obturadores. Notas: Re- Mi- Fa#- Sol', 3, '100', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolesadmin`
--

DROP TABLE IF EXISTS `rolesadmin`;
CREATE TABLE IF NOT EXISTS `rolesadmin` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `Rol` varchar(100) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rolesadmin`
--

INSERT INTO `rolesadmin` (`id_rol`, `Rol`) VALUES
(1, 'Web Master'),
(2, 'Diseñador Web'),
(3, 'Programador Developer'),
(4, 'Administrador BD'),
(5, 'Especialista Marketing Digital');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

DROP TABLE IF EXISTS `secciones`;
CREATE TABLE IF NOT EXISTS `secciones` (
  `id_seccion` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Detalle` varchar(250) NOT NULL,
  `Registro` datetime NOT NULL,
  PRIMARY KEY (`id_seccion`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`id_seccion`, `Nombre`, `Detalle`, `Registro`) VALUES
(1, 'Nosotros', 'Titulo y Descripción de la sección Nosotros', '2022-08-30 16:00:27'),
(2, 'Actividades', 'Listado de las actividades tipo seminario, curso o taller', '2022-08-30 16:00:51'),
(3, 'Productos', 'Listado de los productos en stock y carrito de compras', '2022-08-30 16:01:13'),
(4, 'Usuarios', 'Datos de los usuarios ingresados por login', '2022-08-30 16:01:41'),
(5, 'Administradores', 'Datos de registro de los administradores Web', '2022-08-30 16:02:23'),
(6, 'Contacto', 'Datos de contacto enviados via mail', '2022-08-30 16:02:43'),
(7, 'Inscripciones', 'Listado y datos de los usuarios logueados inscriptos', '2022-08-30 16:03:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombres` varchar(40) NOT NULL,
  `Apellidos` varchar(40) NOT NULL,
  `Sexo` varchar(10) NOT NULL,
  `Fecha_nac` date NOT NULL,
  `Nacionalidad` varchar(40) NOT NULL,
  `Mail` varchar(40) NOT NULL,
  `Celular` varchar(16) NOT NULL,
  `Username` varchar(250) NOT NULL,
  `Contrasena` varchar(250) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `Nombres`, `Apellidos`, `Sexo`, `Fecha_nac`, `Nacionalidad`, `Mail`, `Celular`, `Username`, `Contrasena`) VALUES
(1, 'Alejandra ', 'Becerra', 'f', '1979-10-21', 'Argentina', 'alebe16@gmail.com', '1145789855', 'alejandra.becerra', 'laale2367'),
(2, 'Marcos Alberto', 'Redrado', 'm', '1986-03-05', 'Uruguaya', 'redre1121@hotmail.com', '1133410954', 'elcolomarco23', 'bicente73'),
(3, 'Paolo ', 'Di Maria', 'm', '1990-11-30', 'Argentina', 'di.marialang@gmail.com', '22123458877', 'marco.dimaria3', 'elchave8');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD CONSTRAINT `administradores_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rolesadmin` (`id_rol`) ON DELETE CASCADE;

--
-- Filtros para la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  ADD CONSTRAINT `inscripciones_ibfk_1` FOREIGN KEY (`id_actividad`) REFERENCES `actividades` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
