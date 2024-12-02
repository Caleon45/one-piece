import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';


const Navbar = ({ onNavigate }) => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Galería de One Piece   
                    </Typography>
                </motion.div>
                <Button color="inherit" onClick={() => onNavigate('home')}>Inicio</Button>
                <Button color="inherit" onClick={() => onNavigate('gallery')}>Galería</Button>
                <Button color="inherit" onClick={() => onNavigate('contact')}>Contacto</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;