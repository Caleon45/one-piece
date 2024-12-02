import React from 'react';
import './Home.css'; // Asegúrate de crear un archivo CSS para estilos

// Importa los iconos de las redes sociales
import facebookIcon from '../imagenes/facebook-icon.png.png';
import twitterIcon from '../imagenes/twitter-icon.png.png';
import instagramIcon from '../imagenes/instagram-icon.png.png';
import logo from '../imagenes/one-piece-logo.png.png'; // Asegúrate de que el logo esté en la carpeta assets

const Home = () => {
    return (
        <div className="home-container">
            <img src={logo} alt="One Piece Logo" className="logo" />
            <div className="description">
                <h2>¿Qué es One Piece?</h2>
                <p>
                    "One Piece" es un popular manga y anime creado por Eiichiro Oda que sigue las aventuras de Monkey D. Luffy y su tripulación de piratas en su búsqueda del tesoro legendario conocido como "One Piece". Desde su debut en 1997, "One Piece" ha capturado la imaginación de millones de fanáticos en todo el mundo, convirtiéndose en una de las franquicias más exitosas en la historia del entretenimiento.
                </p>
                <p>
                    La serie ha impactado profundamente la cultura pop, inspirando películas, videojuegos, y una amplia gama de productos. Su narrativa rica, personajes memorables y temas de amistad, perseverancia y aventura han resonado con audiencias de todas las edades, consolidando su lugar como un pilar en el mundo del entretenimiento.
                </p>
            </div>

            {/* Card para el video de YouTube */}
            <div className="video-card">
                <h3>Conoce más sobre One Piece</h3>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/CWrJQzm0diI" // URL de incrustación correcta
                    title="One Piece - Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="social-buttons">
                <a href="https://www.facebook.com/onepieceofficial" className="social-button facebook">
                    <img src={facebookIcon} alt="Facebook" className="icon" />
                    Facebook
                </a>
                <a href="https://twitter.com/OnePiece" className="social-button twitter">
                    <img src={twitterIcon} alt="Twitter" className="icon" />
                    Twitter
                </a>
                <a href="https://www.instagram.com/onepiece_staff/" className="social-button instagram">
                    <img src={instagramIcon} alt="Instagram" className="icon" />
                    Instagram
                </a>
            </div>
        </div>
    );
};

export default Home;