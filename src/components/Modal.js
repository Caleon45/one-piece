import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css'; // Asegúrate de importar el archivo CSS

const ArtModal = ({ art, onClose }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (!comment.trim()) {
      alert('Por favor, escribe un comentario antes de enviar.');
      return; // No enviar si el comentario está vacío
    }

    // Obtener los comentarios existentes del localStorage
    const comments = JSON.parse(localStorage.getItem('comments')) || {};
    
    // Agregar el nuevo comentario al arreglo correspondiente al ID de la obra
    comments[art.id] = comments[art.id] ? [...comments[art.id], comment] : [comment];
    
    // Guardar los comentarios actualizados en localStorage
    localStorage.setItem('comments', JSON.stringify(comments));
    
    // Mostrar mensaje de confirmación
    alert('Comentario enviado con éxito!');

    // Limpiar el campo de comentario después de enviar
    setComment('');

    // Cerrar el modal después de enviar el comentario
    onClose();
  };

  return (
    <Modal 
      isOpen={true} 
      onRequestClose={onClose} 
      ariaHideApp={false}
      className="art-modal" // Clase CSS para el modal
      overlayClassName="art-modal-overlay" // Clase CSS para el overlay
    >
      <h2>{art.name}</h2>
      <p>{art.description}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Escribe tu comentario aquí..."
        className="modal-textarea" // Clase CSS para el textarea
      />
      <div className="button-container"> {/* Contenedor para los botones */}
        <button
          onClick={handleCommentSubmit}
          className="modal-button modal-button-submit" // Clases CSS para el botón de enviar
        >
          Enviar Comentario
        </button>
        <button
          onClick={onClose}
          className="modal-button modal-button-close" // Clases CSS para el botón de cerrar
        >
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default ArtModal;