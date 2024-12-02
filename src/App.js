import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Home from './components/Home'; // Asegúrate de que este componente esté correctamente implementado
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#291010', // Color rojo vinotinto
    },
  },
});

const App = () => {
  const [currentSection, setCurrentSection] = useState('home'); // Estado para manejar la sección actual

  const handleNavigate = (section) => {
    setCurrentSection(section); // Cambia la sección actual según la navegación
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar onNavigate={handleNavigate} /> {/* Navbar que permite navegar entre secciones */}
        {currentSection === 'home' && <Home />} {/* Renderiza el componente Home si la sección actual es 'home' */}
        {currentSection === 'gallery' && <Gallery />} {/* Renderiza el componente Gallery si la sección actual es 'gallery' */}
        {currentSection === 'contact' && (
          <div className="contact-info">
            <h1>Contacto</h1>
            <p><strong>Nombre Completo:</strong> Camilo Andres Leon Limas</p>
            <p><strong>Código:</strong> 55220504</p>
            <p><strong>Materia:</strong> Taller de Diseño Multimedia</p>
            <p><strong>Proyecto Final:</strong> Galería de Arte</p>
          </div>
        )} {/* Renderiza la información de contacto si la sección actual es 'contact' */}
      </div>
    </ThemeProvider>
  );
};

export default App;
